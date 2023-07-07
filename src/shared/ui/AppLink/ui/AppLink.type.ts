import { LinkProps } from 'react-router-dom';

import { SizeVariant } from 'shared/types/sizeVariant';
import { ThemeVariant } from 'shared/types/themeVariant';

type AppLinkTheme = ThemeVariant;

type AppLinkSize = SizeVariant;

type ReactRouterDomLinkProps = Omit<LinkProps, 'className'>;

export interface AppLinkProps extends ReactRouterDomLinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
