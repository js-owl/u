import { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRouteProps, routeConfig } from '@/1_shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/4_widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
export default memo(AppRouter);
