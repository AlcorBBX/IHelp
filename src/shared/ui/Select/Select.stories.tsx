import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  // placeholder: 'Type text',
  // value: 'Text',
  options: [{ text: 'f' }, { text: 'w' }],
};

PrimaryDark.decorators = [ThemeDecorator(Theme.STEALTH)];
// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   // theme: ButtonTheme.OUTLINE,
// };
//
// export const Clear = Template.bind({});
// Clear.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.CLEAR,
// };
//
// export const ClearDark = Template.bind({});
// ClearDark.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.CLEAR,
// };
// ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const ClearInverted = Template.bind({});
// ClearInverted.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.CLEAR_INVERTED,
// };
//
// export const ClearInvertedDark = Template.bind({});
// ClearInvertedDark.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.CLEAR_INVERTED,
// };
// ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const Outlined = Template.bind({});
// Outlined.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.OUTLINE,
// };
//
// export const OutlinedDark = Template.bind({});
// OutlinedDark.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.OUTLINE,
// };
// OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const OutlinedDangerDark = Template.bind({});
// OutlinedDangerDark.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.OUTLINED_DANGER,
// };
// OutlinedDangerDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const Background = Template.bind({});
// Background.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.BACKGROUND,
// };
//
// export const BackgroundDark = Template.bind({});
// BackgroundDark.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.BACKGROUND,
// };
// BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.BACKGROUND_INVERTED,
// };
//
// export const BackgroundInvertedDark = Template.bind({});
// BackgroundInvertedDark.args = {
//   placeholder: 'Type text',
//   value: 'Text',
//   theme: InputTheme.BACKGROUND_INVERTED,
// };
// BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
