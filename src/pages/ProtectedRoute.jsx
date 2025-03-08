import Loading from "../ui/Loading";

// import { useRedirect } from "../features/auth/useRedirect";
import { useCheckAuth } from "../features/auth/useCheckAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isPending } = useCheckAuth();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) {
        navigate("/login");
      }
    },
    [isAuthenticated, isPending, navigate],
  );

  if (isPending)
    return (
      <div className="relative h-[100vh] dark:bg-slate-900">
        <Loading />;
      </div>
    );

  return (
    <div className="dark:bg-slate-900 dark:text-slate-200">{children}</div>
  );
};

export default ProtectedRoute;
