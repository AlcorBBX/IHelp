import { classNames } from 'shared/lib/classNames/classNames';

import cls from './SmallProfile.module.scss';

interface SmallProfileProps {
  nickname: string;
  lvl: number;
  className?: string;
}
// todo move in entities

export const SmallProfile = ({
  lvl,
  nickname,
  className,
}: SmallProfileProps) => {
  const linkProfile = () => {
    console.log('link');
  };
  return (
    <div className={classNames(cls.profileContainer, {}, [className])}>
      <span>profile</span>
      <span>{nickname}</span>
      <span>{lvl}</span>
    </div>
  );
};
