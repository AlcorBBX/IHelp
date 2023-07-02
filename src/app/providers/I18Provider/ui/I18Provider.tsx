import { ReactNode } from 'react';

import { I18NProvider } from '@ayub-begimkulov/i18n';

import { i18n } from 'shared/config/i18n/i18n';

interface I18ProviderProps {
  children: ReactNode | ReactNode[];
}

export const I18Provider = ({ children }: I18ProviderProps) => {
  return <I18NProvider i18n={i18n}>{children}</I18NProvider>;
};
