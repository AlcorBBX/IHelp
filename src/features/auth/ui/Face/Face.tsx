import { forwardRef, memo } from 'react';

import hands from 'shared/assets/monkey/hands.png';

import cl from './Face.module.scss';

interface FaceProps {
  faceImage?: string;
}

export const Face = memo(
  forwardRef<HTMLDivElement, FaceProps>((_, ref) => (
    <div className={cl.animationIcon} ref={ref}>
      <img src={hands} alt="face" />
    </div>
  )),
);
