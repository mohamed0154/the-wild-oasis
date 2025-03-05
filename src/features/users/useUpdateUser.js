import toast from "react-hot-toast";
import { UpdateUser as UpdateUserApi } from "./updateUserServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: UpdateUserApi,

    onSuccess() {
      toast.success("User Updated successfuly");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError(er) {
      toast.error(er.message);
    },
  });

  return { updateUser, isPending };
}
