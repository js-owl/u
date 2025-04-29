import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line sowl-plugin/layer-imports
import { UserRole } from '@/2_entities/User';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
