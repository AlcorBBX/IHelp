import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon';
import { Skeleton } from 'shared/ui/Skeleton';

import cls from './SmallProfile.module.scss';
import { SmallProfileProps } from './SmallProfile.type';

// TODO add more styles

export const SmallProfile = ({
  lvl,
  nickname,
  className,
  profileLink,
  loading,
}: SmallProfileProps) => {
  if (loading) return <Skeleton variant="rounded" />;

  return (
    <div className={classNames(cls.profileContainer, {}, [className])}>
      <AppLink to={profileLink} className={cls.profile} theme="clear">
        <Icon className={cls.profileIcon} type="profile" />
        <span className={cls.profileNickname}>{nickname}</span>
        <Card className={cls.profileLvlCard} theme="primary" size="small">
          <span>{lvl}</span>
        </Card>
      </AppLink>
    </div>
  );
};
