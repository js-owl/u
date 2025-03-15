import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import { getUserAuthData } from "2_entities/User";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useSelector(getUserAuthData);
  let location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }
  return children;
}
