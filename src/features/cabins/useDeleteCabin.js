import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "./cabinServices";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isPending: isDeletting } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess() {
      toast.success("The Cabin Deleted Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError() {
      toast.error("There's a Proplem");
    },
  });

  return { deleteCabin, isDeletting };
}
