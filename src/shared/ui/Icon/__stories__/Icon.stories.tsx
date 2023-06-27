import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { Icon } from '../ui/Icon';
import { IconProps } from '../ui/Icon.type';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const DefaultTemplate: StoryFn<IconProps> = (args) => (
  <div>
    <Icon {...args} type="like" theme="primary" onClick={() => ''} />
  </div>
);
export const Default = DefaultTemplate.bind({});
