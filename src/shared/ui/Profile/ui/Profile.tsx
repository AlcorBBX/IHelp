import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon';
import { Skeleton } from 'shared/ui/Skeleton';

import cls from './Profile.module.scss';
import { ProfileProps } from './Profile.type';

// TODO add progressbar, avatar

export const Profile = ({
  nickname,
  avatar,
  lvl,
  score,
  joinDate,
  className,
  loading,
}: ProfileProps) => {
  if (loading) return <Skeleton variant="rounded" />;

  return (
    <div className={classNames(cls.profileContainer, {}, [className])}>
      <Icon className={cls.profileIcon} type="profile" />
      <span className={cls.profileNickname}>{nickname}</span>
    </div>
  );
};
