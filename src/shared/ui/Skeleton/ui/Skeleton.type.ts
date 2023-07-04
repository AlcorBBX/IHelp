import { HTMLAttributes } from 'react';

type HtmlDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

type SkeletonSize = 'small' | 'default' | 'large';

type SkeletonVariant = 'text' | 'rectangular' | 'rounded' | 'circular';

type SkeletonAnimation = 'wave' | 'pulse';

export interface SkeletonProps extends HtmlDivProps {
  className?: string;
  size?: SkeletonSize;
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
}
