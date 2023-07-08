import { LinkProps } from 'react-router-dom';

import { SizeVariant, ThemeVariant } from 'shared/types';

type AppLinkTheme = ThemeVariant;

type AppLinkSize = SizeVariant;

type ReactRouterDomLinkProps = Omit<LinkProps, 'className'>;

export interface AppLinkProps extends ReactRouterDomLinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
