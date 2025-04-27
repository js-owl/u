import { AppRoutes, RoutePath } from '@/1_shared/const/router';
import { AppRouteProps } from '@/1_shared/types/router';
import { UserRole } from '@/2_entities/User';

import { NotFoundPage } from '@/5_p/NotFoundPage';
import { MainPage } from '@/5_p/MainPage';
import { AboutPage } from '@/5_p/AboutPage';
import { ProfilePage } from '@/5_p/ProfilePage';
import { ArticlesPage } from '@/5_p/ArticlesPage';
import { ArticleDetailsPage } from '@/5_p/ArticleDetailsPage';
import { ArticleEditPage } from '@/5_p/ArticleEditPage';
import { AdminPanelPage } from '@/5_p/AdminPanelPage';
import { ForbiddenPage } from '@/5_p/ForbiddenPage';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER]
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbiden}`,
    element: <ForbiddenPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
