import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "react-router-dom";
import { login as loginApi } from "./authServices";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess(user) {
      queryClient.setQueryData(["users"], user.user);
      redirect("/dashboard");
    },
    onError(er) {
      toast.error(er.message);
    },
  });

  return { login, isPending };
}
