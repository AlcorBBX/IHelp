import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

// eslint-disable-next-line
export const useAppDispatch = useDispatch<AppDispatch>;

// eslint-disable-next-line
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
