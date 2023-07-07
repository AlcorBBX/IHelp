import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { Skeleton } from '../ui/Skeleton';
import type { SkeletonProps } from '../ui/Skeleton.type';

export default {
  title: 'UiKit/Skeleton',
  component: Skeleton,
} as Meta;

const DefaultTemplate: StoryFn<SkeletonProps> = (args) => (
  <Skeleton {...args} />
);
export const Default = DefaultTemplate.bind({});

const VariantTemplate: StoryFn<SkeletonProps> = (args) => (
  <div>
    <p>Variant text</p>
    <Skeleton {...args} variant="text" />
    <span style={{ margin: '16px' }} />
    <p>Variant rounded</p>
    <Skeleton {...args} variant="rounded" />
    <span style={{ margin: '16px' }} />
    <p>Variant rectangular</p>
    <Skeleton {...args} variant="rectangular" />
    <span style={{ margin: '16px' }} />
    <p>Variant circular</p>
    <Skeleton {...args} variant="circular" />
  </div>
);
export const Variant = VariantTemplate.bind({});

const SizeTemplate: StoryFn<SkeletonProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <p style={{ marginBottom: '16px', fontSize: '26px' }}>Variant text</p>
      <p>Size small</p>
      <Skeleton {...args} size="small" />
      <span style={{ margin: '16px' }} />
      <p>Size default</p>
      <Skeleton {...args} size="default" />
      <span style={{ margin: '16px' }} />
      <p>Size large</p>
      <Skeleton {...args} size="large" />
    </div>
    <div>
      <p style={{ marginBottom: '16px', fontSize: '26px' }}>Variant rounded</p>
      <p>Size small</p>
      <Skeleton {...args} variant="rounded" size="small" />
      <span style={{ margin: '16px' }} />
      <p>Size default</p>
      <Skeleton {...args} variant="rounded" size="default" />
      <span style={{ margin: '16px' }} />
      <p>Size large</p>
      <Skeleton {...args} variant="rounded" size="large" />
    </div>
    <div>
      <p style={{ marginBottom: '16px', fontSize: '26px' }}>
        Variant rectangular
      </p>
      <p>Size small</p>
      <Skeleton {...args} variant="rectangular" size="small" />
      <span style={{ margin: '16px' }} />
      <p>Size default</p>
      <Skeleton {...args} variant="rectangular" size="default" />
      <span style={{ margin: '16px' }} />
      <p>Size large</p>
      <Skeleton {...args} variant="rectangular" size="large" />
    </div>
    <div>
      <p style={{ marginBottom: '16px', fontSize: '26px' }}>Variant circular</p>
      <p>Size small</p>
      <Skeleton {...args} variant="circular" size="small" />
      <span style={{ margin: '16px' }} />
      <p>Size default</p>
      <Skeleton {...args} variant="circular" size="default" />
      <span style={{ margin: '16px' }} />
      <p>Size large</p>
      <Skeleton {...args} variant="circular" size="large" />
    </div>
  </div>
);
export const Size = SizeTemplate.bind({});

const AnimationTemplate: StoryFn<SkeletonProps> = (args) => (
  <div>
    <p>Animation wave</p>
    <Skeleton {...args} animation="wave" />
    <span style={{ margin: '16px' }} />
    <p>Animation pulse</p>
    <Skeleton {...args} animation="pulse" />
  </div>
);
export const Animation = AnimationTemplate.bind({});

const ThemeTemplate: StoryFn<SkeletonProps> = (args) => (
  <div>
    <p>Theme primary</p>
    <Skeleton {...args} theme="primary" />
    <span style={{ margin: '16px' }} />
    <p>Theme background</p>
    <div
      style={{
        padding: '5px',
        background: 'var(--sub-alt-color)',
      }}
    >
      <Skeleton {...args} theme="background" />
    </div>
  </div>
);
export const Theme = ThemeTemplate.bind({});
