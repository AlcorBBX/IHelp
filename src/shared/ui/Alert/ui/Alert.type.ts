import { IconType } from 'shared/ui/Icon';

type AlertType = 'success' | 'warning' | 'error' | 'default';

export interface AlertProps {
  className?: string;
  type?: AlertType;
  message: string;
  title?: string;
  icon?: IconType | false;
  isOpen?: boolean;
  onClose?: () => void;
}
