import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCabin as insertCabinApi } from "./cabinServices";
import toast from "react-hot-toast";

export function useInsertCabin() {
  const queryClient = useQueryClient();

  const { mutate: insertCabin, isPending: isInserting } = useMutation({
    mutationFn: insertCabinApi,
    onSuccess() {
      toast.success("cabin Created Successfly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError() {
      toast.error("There is a Proplem");
    },
  });

  return { insertCabin, isInserting };
}
