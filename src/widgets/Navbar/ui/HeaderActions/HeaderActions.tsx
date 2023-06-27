import { Icon } from 'shared/ui/Icon';
import { SmallProfile } from 'shared/ui/SmallProfile/SmallProfile';

import cls from './HeaderActions.module.scss';
import { HeaderActionsItem } from './HeaderActionsItem/HeaderActionsItem';

export const HeaderActions = () => {
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
        <Icon type="bell" />
        <Icon type="exit" />
      </div>
    </div>
  );
};
