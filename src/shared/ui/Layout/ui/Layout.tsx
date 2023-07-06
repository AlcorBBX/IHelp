import { Outlet, ScrollRestoration } from 'react-router-dom';

import cls from './Layout.module.scss';
import type { LayoutProps } from './Layout.types';

export const Layout = ({
  announcementSlot,
  navbarSlot,
  headerSlot,
  sidebarSlot,
  bottomSlot,
}: LayoutProps) => {
  return (
    <div className={cls.app}>
      {announcementSlot}
      {navbarSlot}
      {headerSlot}
      <div className={cls.container}>
        {sidebarSlot && <aside className={cls.sidebar}>{sidebarSlot}</aside>}
        <div className={cls.content}>
          <Outlet />
        </div>
      </div>
      {bottomSlot && <footer className={cls.footer}>{bottomSlot}</footer>}
      <ScrollRestoration />
    </div>
  );
};
