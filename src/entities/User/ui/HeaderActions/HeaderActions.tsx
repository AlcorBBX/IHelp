import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { SmallProfile } from 'shared/ui/SmallProfile';

import cls from './HeaderActions.module.scss';
import { HeaderActionsProps } from './HeaderActions.type';

// TODO
const auth = true;

// TODO add more styles

export const HeaderActions = memo(({ className }: HeaderActionsProps) => {
  if (!auth) {
    return <Button>Log in</Button>;
  }

  const logout = () => {
    console.log('logout');
  };

  return (
    <div className={classNames(cls.headerActions, {}, [className])}>
      <SmallProfile profileLink="/" nickname="alcorbbx" lvl={93} />

      <Button theme="clear" square size="s">
        <Icon type="bell" />
      </Button>
      <Button onClick={logout} theme="clear" square size="s">
        <Icon type="exit" />
      </Button>
    </div>
  );
});
