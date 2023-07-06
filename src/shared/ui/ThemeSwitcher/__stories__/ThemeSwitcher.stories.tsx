import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { ThemeSwitcherProps } from '../ui/ThemeSwitcher.type';

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
} as Meta;

export const Default: StoryFn<ThemeSwitcherProps> = (args) => (
  <>
    <ThemeSwitcher {...args} />
  </>
);
