import { type Decorator } from '@storybook/react';

import { I18Provider } from 'app/providers';

export const withI18N: Decorator = (StoryFn, context) => {
  return (
    <I18Provider>
      <StoryFn />
    </I18Provider>
  );
};
