import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "./authServices";

export function useCheckAuth() {
  const { data: user, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: checkAuth,
  });

  return { user, isAuthenticated: user?.role === "authenticated", isPending };
}
