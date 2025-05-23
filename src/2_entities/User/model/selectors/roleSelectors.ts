import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/7_app/providers/StoreProvider';
import { UserRole } from '../const/consts';

export const getUserRoles = (state: StateSchema) => {
  return state.user.authData?.roles;
};

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
