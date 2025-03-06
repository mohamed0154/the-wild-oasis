import toast from "react-hot-toast";
import { UpdateUser as UpdateUserApi } from "./updateUserServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: UpdateUserApi,

    onSuccess(user) {
      toast.success("User Updated successfuly");
      queryClient.setQueryData("user", user);
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError() {
      toast.error("There's a Proplem");
    },
  });

  return { updateUser, isPending };
}
