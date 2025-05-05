import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "./authServices";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess(user) {
      queryClient.setQueryData(["users"], user);

      const { token } = user.data;
      localStorage.setItem("auth-token", token);

      navigate("/dashboard");
    },
    onError(er) {
      toast.error(er.message);
    },
  });

  return { login, isPending };
}
