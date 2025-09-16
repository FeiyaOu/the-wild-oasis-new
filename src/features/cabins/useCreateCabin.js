 
 import { useQueryClient,useMutation } from "@tanstack/react-query";
 import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin(){
   const queryClient = useQueryClient();
   const { isPending: isCreating, mutate: createCabin } = useMutation({
     mutationFn: createEditCabin,
     onSuccess: () => {
       alert('New cabin is successflly created!');
       queryClient.invalidateQueries({
         queryKey: ['cabins'],
       });
    //    reset();
     },
     onError: (err) => alert(err.message),
   });

   return {isCreating,createCabin}

}

 