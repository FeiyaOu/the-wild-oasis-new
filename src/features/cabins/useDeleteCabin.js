 import { useMutation,useQueryClient } from "@tanstack/react-query";
 import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";


 export function useDeleteCabin(){
const queryClient = useQueryClient();
const { isPending: isDeleting, mutate:deleteCabin } = useMutation({
  mutationFn: (id) => deleteCabinApi(id),
  onSuccess: () => {
    alert('Cabin deleted successfully!');
    queryClient.invalidateQueries({
      queryKey: ['cabins'],
    });
  },
  onError: (err) => alert(err.message),
});
 
 return {isDeleting,deleteCabin}

 }
 