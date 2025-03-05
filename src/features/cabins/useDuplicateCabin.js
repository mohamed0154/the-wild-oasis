import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCabin } from "./cabinServices";
import toast from "react-hot-toast";

export function useDuplicateCabin() {
  const queryClient = useQueryClient();

  const { mutate: duplicateCabin } = useMutation({
    mutationFn: insertCabin,
    onSuccess() {
      toast.success("The Cabin duplicated Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError(er) {
      toast.error(er.message);
    },
  });

  return { duplicateCabin };
}
