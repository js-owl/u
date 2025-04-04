import { useDispatch } from 'react-redux';
import { AppDispatch } from '7_app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
