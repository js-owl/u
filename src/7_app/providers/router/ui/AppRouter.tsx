import { memo, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "1_shared/config/routeConfig/routeConfig";
import { getUserAuthData } from "2_entities/User";
import { PageLoader } from "4_widgets/PageLoader/ui/PageLoader";

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
export default memo(AppRouter);
