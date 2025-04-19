import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/7_app/providers/StoreProvider';

export const getUIScroll = (state: StateSchema) => state.ui.scroll;

export const getUIScrollByPath = createSelector(
  getUIScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
