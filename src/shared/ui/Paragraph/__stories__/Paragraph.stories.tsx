import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Paragraph } from '../ui/Paragraph';
import { ParagraphProps } from '../ui/Paragraph.type';

export default {
  title: 'UiKit/Paragraph',
  component: Paragraph,
} as Meta;

const DefaultTemplate: StoryFn<ParagraphProps> = (args) => (
  <div>
    <Paragraph {...args}>fdf </Paragraph>
  </div>
);
export const Default = DefaultTemplate.bind({});
