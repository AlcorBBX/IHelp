import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { AppLink } from '../ui/AppLink';
import type { AppLinkProps } from '../ui/AppLink.type';

export default {
  title: 'UiKit/AppLink',
  component: AppLink,
} as Meta;

const DefaultTemplate: StoryFn<AppLinkProps> = (args) => (
  <>
    {/* <AppLink theme="primary" to="/"> */}
    <span>AppLink</span>
    {/* </AppLink> */}
  </>
);
export const Default = DefaultTemplate.bind({});
