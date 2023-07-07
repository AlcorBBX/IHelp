import { HTMLAttributes } from 'react';

type HtmlDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

type SkeletonSize = 'small' | 'default' | 'large';

type SkeletonVariant = 'text' | 'rectangular' | 'rounded' | 'circular';

type SkeletonAnimation = 'wave' | 'pulse';

type SkeletonTheme = 'primary' | 'background';

export interface SkeletonProps extends HtmlDivProps {
  className?: string;
  size?: SkeletonSize;
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  theme?: SkeletonTheme;
}
