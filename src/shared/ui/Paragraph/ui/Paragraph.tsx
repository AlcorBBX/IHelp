import { useTranslate } from '@ayub-begimkulov/i18n';

import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton';

import cls from './Paragraph.module.scss';
import { ParagraphProps } from './Paragraph.type';

export const Paragraph = ({
  children,
  className,
  text,
  loading,
  ...other
}: ParagraphProps) => {
  const t = useTranslate();

  if (loading) return <Skeleton variant="text" />;

  return (
    <p className={classNames(cls.paragraph, {}, [className])} {...other}>
      {text && t(text)}
      {children}
    </p>
  );
};
