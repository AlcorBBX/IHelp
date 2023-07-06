import type { Preview } from '@storybook/react';
// import { themes } from '@storybook/theming';
import { withI18N } from '../src/app/storybookDecorators/withI18n'
import { withTheme } from '../src/app/storybookDecorators/withTheme'

const preview: Preview = {
  parameters: {
    docs: {
      // theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [withI18N, withTheme]
export default preview;
