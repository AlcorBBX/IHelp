import { memo, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // TODO dont foget optimaze
  const onKeyToggleHandler = (e: KeyboardEvent) => {
    if (e.key === 'E') {
      onToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyToggleHandler);

    return () => {
      window.removeEventListener('keydown', onKeyToggleHandler);
    };
  }, [collapsed, onKeyToggleHandler]);
  // TODO dont foget optimaze

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        onClick={onToggle}
        // theme="outlinedDanger"
        active
        square
        size="l"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {SidebarItemList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
});
