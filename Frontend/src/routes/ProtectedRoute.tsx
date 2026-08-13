import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const getToken = document.cookie;
  if (!getToken) {
    return <Navigate replace to="/login"/>
  }

  return <>{children}</>
}

export default ProtectedRoute;