import { type Decorator } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';

export const withTheme: Decorator = (StoryFn, context) => {
  // const theme = context.parameters.theme || context.globals.theme;

  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  );
};
