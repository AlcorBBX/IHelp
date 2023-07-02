import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import { appStore } from '../lib/store';

type StoreProviderProps = {
  children: ReactNode | ReactNode[];
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={appStore}>{children}</Provider>;
};
