import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { Input } from '../ui/Input';
import { InputProps } from '../ui/Input.type';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const DefaultTemplate: StoryFn<InputProps> = (args) => (
  <div>
    <Input label="label" placeholder="placeholder" {...args} />
  </div>
);
export const Default = DefaultTemplate.bind({});

const ThemeTemplate: StoryFn<InputProps> = (args) => (
  <div>
    <Input
      theme="outline"
      label="outline theme"
      placeholder="placeholder"
      {...args}
    />
    <span style={{ margin: '16px' }} />
    <Input
      theme="outlinedDanger"
      label="outlinedDanger theme"
      placeholder="placeholder"
      {...args}
    />
    <span style={{ margin: '16px' }} />
    <Input
      theme="background"
      label="background theme"
      placeholder="placeholder"
      {...args}
    />
    <span style={{ margin: '16px' }} />
    <Input
      theme="inverted"
      label="inverted theme"
      placeholder="placeholder"
      {...args}
    />
    <span style={{ margin: '16px' }} />
    <Input
      theme="backgroundInverted"
      label="backgroundInverted theme"
      placeholder="placeholder"
      {...args}
    />
    <span style={{ margin: '16px' }} />
    <Input theme="clear" label="label" placeholder="placeholder" {...args} />
    <span style={{ margin: '16px' }} />
    <Input
      theme="clearInverted"
      label="clearInverted theme"
      placeholder="placeholder"
      {...args}
    />
  </div>
);
export const Themes = ThemeTemplate.bind({});
