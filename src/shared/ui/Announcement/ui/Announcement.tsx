import cls from './Announcement.module.scss';
import type { AnnouncementProps } from './Announcement.type';

export const Announcement = ({ children }: AnnouncementProps) => {
  return <div className={cls.announcement}>{children}</div>;
};
