import { forwardRef, memo } from 'react';

import hands from 'shared/assets/monkey/hands.png';

import cl from './FaceAnimation.module.scss';

interface FaceAnimationProps {
  faceImage?: string;
}

export const FaceAnimation = memo(
  // eslint-disable-next-line react/prop-types
  forwardRef<HTMLDivElement, FaceAnimationProps>(({ faceImage }, ref) => (
    <div className={cl.animationIcon} ref={ref}>
      <img src={hands} alt="face" />
    </div>
  )),
);
