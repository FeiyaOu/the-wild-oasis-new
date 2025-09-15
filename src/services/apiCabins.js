import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins can not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // if (!id) {
  //   console.log(newCabin?.image?.[0]);
  // }
  const imageName = `${Math.random()}-${newCabin?.image?.[0].name}`.replaceAll(
    '/',
    '',
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/public/${imageName}`;

  let query = supabase.from('cabins');

  //A) Create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);

    //B) Edit
    if (id) {
      query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
    }

    const { data, error } = await query.select();

    if (error) {
      console.error(error);
      throw new Error('Cabins can not be created');
    }

    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
      .from('cabin-images')
      .upload(`public/${imageName}`, newCabin?.image?.[0]);

    if (storageError) {
      const { error: deleteError } = await supabase
        .from('cabins')
        .delete()
        .eq('id', data.id);
      console.error(deleteError);
      throw new Error(
        'Cabin image can not be uploaded and the cabin was not created.',
      );
    }

    return data;
  }
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins can not be loaded');
  }

  return data;
}
