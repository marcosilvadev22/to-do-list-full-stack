import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
import { useAuth } from "../contexts/useAuth";
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate replace to="/login"/>
  }

  return <>{children}</>
}

export default ProtectedRoute;