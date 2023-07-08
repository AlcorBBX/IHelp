type AlertType = 'success' | 'warning' | 'error' | 'default';

export interface AlertProps {
  className?: string;
  type?: AlertType;
  message: string;
  title?: string;
}
