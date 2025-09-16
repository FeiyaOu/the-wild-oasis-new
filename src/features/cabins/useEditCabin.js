
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";


export function useEditCabin(){
const queryClient = useQueryClient();
const { isPending: isEditing, mutate: editCabin } = useMutation({
  mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
  onSuccess: () => {
    alert('New cabin is successflly edited!');
    queryClient.invalidateQueries({
      queryKey: ['cabins'],
    });
    // reset();
  },
  onError: (err) => alert(err.message),
});

return {isEditing,editCabin}
}

