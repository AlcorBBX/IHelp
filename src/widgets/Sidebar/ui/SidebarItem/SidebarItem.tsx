import { memo } from 'react';

import { useTranslate } from '@ayub-begimkulov/i18n';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const t = useTranslate();
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      {/* <item.Icon className={cls.icon} /> */}
      {/* <span className={cls.link}>{item.text}</span> */}
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
