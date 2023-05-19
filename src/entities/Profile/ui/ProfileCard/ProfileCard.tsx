import { useSelector } from 'react-redux';

import { getProfileData } from 'entities/Profile/model/selectors/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.profilecard, {}, [className])}>
      <div className={cls.header}>
        <Text title="Профиль" />
        <Button className={cls.editBtn} theme="outline">
          Редактировать
        </Button>
      </div>

      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder="Ваше имя"
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваше фамилия"
          className={cls.input}
        />
      </div>
    </div>
  );
};
