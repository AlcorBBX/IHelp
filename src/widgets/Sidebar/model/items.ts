import { IconType } from 'shared/ui/Icon/ui/Icon.type';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: IconType;
  // Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: '/',
    text: 'Main page',
    icon: 'bell',
  },
  {
    path: '/about',
    text: 'About',
    icon: 'bell',
  },
  {
    path: '/profile',
    text: 'Profile',
    icon: 'bell',
  },
  {
    path: '/settings',
    text: 'Settings',
    icon: 'bell',
  },
];
