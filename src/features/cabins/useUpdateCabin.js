import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabinApi } from "./cabinServices";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin } = useMutation({
    mutationFn: updateCabinApi,
    onSuccess() {
      toast.success("The Cabin Updated Successfuly");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError(er) {
      toast.error(er.message);
    },
  });

  return { updateCabin };
}
