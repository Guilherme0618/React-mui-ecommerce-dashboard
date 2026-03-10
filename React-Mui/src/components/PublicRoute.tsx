import { Navigate } from "react-router-dom";

type PublicRouteProps = {
  isAuthenticated: boolean;
  children: React.ReactNode;
};

function PublicRoute({ isAuthenticated, children }: PublicRouteProps) {
  /* if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  } */

  return <>{children}</>;
}

export default PublicRoute;
