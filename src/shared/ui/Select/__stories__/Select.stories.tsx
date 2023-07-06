import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { Select } from '../ui/Select';
import { SelectProps } from '../ui/Select.type';

export default {
  title: 'UiKit/Select',
  component: Select,
} as Meta;

const theme = [
  { title: 'stealth', value: 'stealth' },
  { title: 'chaos theory', value: 'chaos_theory' },
  { title: 'dark note', value: 'dark_note' },
  { title: 'dino', value: 'dino' },
  { title: '8008', value: '8008' },
  { title: 'dark', value: 'dark' },
];

export const Default: StoryFn<SelectProps> = (args) => {
  const [pickTheme, setPickTheme] = useState('');

  const changeThemeHandler = (value: string) => {
    setPickTheme(value);
  };

  const selectedTheme = theme.find((item) => item.value === pickTheme);
  return (
    <div>
      <Select
        {...args}
        theme="primary"
        mode="rows"
        options={theme}
        selected={selectedTheme || null}
        onChange={changeThemeHandler}
        placeholder="chose theme"
      />
    </div>
  );
};
