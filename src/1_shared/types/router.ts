import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/2_entities/User';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
