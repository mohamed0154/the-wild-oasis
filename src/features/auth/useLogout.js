import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "./logout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess() {
      queryClient.removeQueries();
      navigate("/login");
    },
    onError(er) {
      toast.error(er.message);
    },
  });

  return { mutate, isPending };
}
