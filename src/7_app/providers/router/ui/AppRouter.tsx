import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "1_shared/config/routeConfig/routeConfig";
import { PageLoader } from "4_widgets/PageLoader/ui/PageLoader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
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
export default AppRouter;
