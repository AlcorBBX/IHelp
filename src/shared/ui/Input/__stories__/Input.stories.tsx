import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { Input } from '../ui/Input';
import { InputProps } from '../ui/Input.type';

export default {
  title: 'UiKit/Input',
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
    <div style={{ background: 'grey', padding: '5px' }}>
      <Input
        theme="background"
        label="background theme"
        placeholder="placeholder"
        {...args}
      />
    </div>
    <span style={{ margin: '16px' }} />
    <Input
      theme="primary"
      label="primary theme"
      placeholder="placeholder"
      {...args}
    />
    <span style={{ margin: '16px' }} />
    <Input
      theme="clearInverted"
      label="clearInverted theme"
      placeholder="placeholder"
      {...args}
    />
    <span style={{ margin: '16px' }} />
    <Input theme="clear" label="clear" placeholder="placeholder" {...args} />
  </div>
);
export const Themes = ThemeTemplate.bind({});
