import { ThemeVariant } from 'shared/types';

type SkeletonSize = 'small' | 'default' | 'large';

type SkeletonVariant = 'text' | 'rectangular' | 'rounded' | 'circular';

type SkeletonAnimation = 'wave' | 'pulse';

type SkeletonTheme = ThemeVariant;

export interface SkeletonProps {
  className?: string;
  size?: SkeletonSize;
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  theme?: SkeletonTheme;
}
