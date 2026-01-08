import { Navigate } from "react-router";
import type { ProtectedRouteProps } from "./protectedRoute.types";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authorized = sessionStorage.getItem("token");

  if (!authorized) return <Navigate to={"/register"} replace />;
  return children;
};

export default ProtectedRoute;
