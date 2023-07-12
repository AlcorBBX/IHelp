import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Icon } from 'shared/ui/Icon';

import { Button } from '../ui/Button';
import type { ButtonProps } from '../ui/Button.type';

export default {
  title: 'UiKit/Button',
  component: Button,
} as Meta;

const DefaultTemplate: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);
export const Default = DefaultTemplate.bind({});

const ThemesTemplate: StoryFn<ButtonProps> = (args) => (
  <div>
    <div style={{ background: '#121212', padding: '5px' }}>
      <Button theme="background" {...args}>
        background
      </Button>
    </div>
    <span style={{ margin: '16px' }} />
    <Button theme="primary" {...args}>
      primary
    </Button>
    <span style={{ margin: '16px' }} />
    <Button theme="clear" {...args}>
      clear
    </Button>
    <span style={{ margin: '16px' }} />
    <Button theme="outline" {...args}>
      outline
    </Button>
    <span style={{ margin: '16px' }} />
    <Button theme="outlinedDanger" {...args}>
      outline
    </Button>
  </div>
);
export const Themes = ThemesTemplate.bind({});

const SizeTemplate: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} size="xs">
      Size xs
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="s">
      Size s
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="m">
      Size m
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="l">
      Size l
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="xl">
      Size xl
    </Button>
  </div>
);
export const Size = SizeTemplate.bind({});

const IconTemplate: StoryFn<ButtonProps> = (args) => (
  <React.Fragment>
    <Button {...args}>
      <Icon type="magnifier" />
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args}>No icon</Button>
    <span style={{ margin: '16px' }} />
    <Button {...args}>
      <Icon type="magnifier" />
      Left
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args}>
      Right
      <Icon theme="invert" type="magnifier" />
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args}>
      <Icon type="magnifier" />
      Both
      <Icon type="bell" />
    </Button>
    <span style={{ margin: '16px' }} />
  </React.Fragment>
);
export const IconTempl = IconTemplate.bind({});

export const Selected: StoryFn<ButtonProps> = (args) => {
  const [selected, setSelected] = React.useState(true);

  return (
    <Button {...args} active={selected} onClick={() => setSelected(!selected)}>
      {`Button is ${selected ? 'on' : 'off'}`}
    </Button>
  );
};

export const Loading: StoryFn<ButtonProps> = (args) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Button {...args} loading={loading} onClick={() => setLoading(!loading)}>
      {`Button is ${loading ? 'on' : 'off'}`}
    </Button>
  );
};
