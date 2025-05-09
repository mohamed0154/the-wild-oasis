import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "./authServices";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess() {
      toast.success("User Created successfuly");
    },
    onError(er) {
      toast.error(er.message);
    },
  });

  return { signup, isPending };
}
