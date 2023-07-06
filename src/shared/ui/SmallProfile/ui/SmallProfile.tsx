import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon';

import cls from './SmallProfile.module.scss';

interface SmallProfileProps {
  nickname: string;
  lvl: number;
  className?: string;
}

// TODO change button to AppLink
// TODO add more styles

export const SmallProfile = ({
  lvl,
  nickname,
  className,
}: SmallProfileProps) => {
  return (
    <div className={classNames(cls.profileContainer, {}, [className])}>
      <Button className={cls.profile} theme="clear">
        <Icon className={cls.profileIcon} type="profile" />
        <span className={cls.profileNickname}>{nickname}</span>
        <Card className={cls.profileLvlCard} theme="primary" size="small">
          <span>{lvl}</span>
        </Card>
      </Button>
    </div>
  );
};
