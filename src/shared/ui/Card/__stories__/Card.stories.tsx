import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

import { Card } from '../ui/Card';
import type { CardProps } from '../ui/Card.type';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const DefaultTemplate: StoryFn<CardProps> = (args) => (
  <div>
    <Card size="default" theme="backgroundInverted" {...args}>
      <div>Card's background inverted</div>
    </Card>

    <Card size="default" theme="background" {...args}>
      <div>Card's background</div>
    </Card>
  </div>
);
export const Default = DefaultTemplate.bind({});

const FullTemplate: StoryFn<CardProps> = (args) => (
  <div>
    <Card
      title="Title"
      // cover={<p>d</p>}
      extra={<Button theme="primary">X</Button>}
      actions={[
        [
          <Button theme="outlinedDanger">
            <Icon type="like" />
          </Button>,
        ],
        [
          <Button theme="outlinedDanger">
            <Icon type="dislike" />
          </Button>,
        ],
      ]}
      size="default"
      theme="background"
      {...args}
    >
      <div>Card's background</div>
    </Card>
  </div>
);
export const Full = FullTemplate.bind({});
