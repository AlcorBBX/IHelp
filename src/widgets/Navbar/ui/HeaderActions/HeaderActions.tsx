import { SmallProfile } from 'shared/ui/SmallProfile/SmallProfile';

import Settings from 'widgets/Navbar/assets/icons/setting.svg';

import cls from './HeaderActions.module.scss';
import { HeaderActionsItem } from './HeaderActionsItem/HeaderActionsItem';

export const HeaderActions = () => {
  const handleClick = () => {
    console.log('f');
  };
  return (
    <div className={cls.headerActions}>
      <div className={cls.headerActionsWrapper}>
        <HeaderActionsItem>
          <span className={cls.projectInfo}>i</span>
        </HeaderActionsItem>
        {/* <span>
          <img src="./icons/setting.svg" alt="settings" />
        </span> */}
      </div>
      <div className={cls.headerActionsWrapper}>
        <SmallProfile nickname="alcobbx" lvl={85} />
      </div>
    </div>
  );
};
