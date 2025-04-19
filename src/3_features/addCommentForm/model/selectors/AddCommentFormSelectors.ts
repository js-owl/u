import { StateSchema } from '@/7_app/providers/StoreProvider';

export const getAddCommentFromText = (state: StateSchema) => state.addCommentForm?.text ?? '';

export const getAddCommentFromError = (state: StateSchema) => state.addCommentForm?.error;
