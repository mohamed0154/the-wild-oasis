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
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate],
  );


  if (isPending) return <Loading />;

  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-slate-200">
      {isAuthenticated && children}
    </div>
  );
};

export default ProtectedRoute;
