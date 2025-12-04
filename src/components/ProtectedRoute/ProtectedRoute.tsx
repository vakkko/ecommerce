import { Navigate } from "react-router";
import type { ProtectedRouteProps } from "./protectedRoute.types";

const ProtectedRoute = ({ children, isAuth }: ProtectedRouteProps) => {
  if (!isAuth) return <Navigate to={"/register"} replace />;
  return children;
};

export default ProtectedRoute;
