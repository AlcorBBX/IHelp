import { LinkProps } from 'react-router-dom';

type AppLinkTheme =
  | 'primary'
  | 'background'
  | 'outlinedDanger'
  | 'outline'
  | 'clear'
  | 'clearInverted';

type AppLinkSize = 'xs' | 's' | 'm' | 'l' | 'xl';

type ReactRouterDomLinkProps = Omit<LinkProps, 'className'>;

export interface AppLinkProps extends ReactRouterDomLinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
