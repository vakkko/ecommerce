import { Navigate } from "react-router";
import type { ProtectedRouteProps } from "./protectedRoute.types";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authorized = localStorage.getItem("token");

  if (!authorized) return <Navigate to={"/register"} replace />;
  return children;
};

export default ProtectedRoute;
