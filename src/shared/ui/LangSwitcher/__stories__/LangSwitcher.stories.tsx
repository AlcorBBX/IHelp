import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { LangSwitcher } from '../ui/LangSwitcher';
import { LangSwitcherProps } from '../ui/LangSwitcher.type';

export default {
  title: 'Components/LangSwitcher',
  component: LangSwitcher,
} as Meta;

export const Default: StoryFn<LangSwitcherProps> = (args) => (
  <>
    <LangSwitcher {...args} />
  </>
);
