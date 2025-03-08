import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "./useCheckAuth";

export function useRedirect() {
  const navigate = useNavigate();
  const { isAuthenticated, isPending } = useCheckAuth();

  useEffect(
    function () {
      if (isAuthenticated && !isPending) {
        navigate("/dashboard");
      }
    },
    [isAuthenticated, isPending, navigate],
  );

  return { isPending };
}
