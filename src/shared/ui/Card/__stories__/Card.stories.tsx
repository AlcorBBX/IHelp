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
    <Card size="default" theme="primary" {...args}>
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
      theme="primary"
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
      {...args}
    >
      <div>Card's background</div>
    </Card>
  </div>
);
export const Full = FullTemplate.bind({});

const ThemesTemplate: StoryFn<CardProps> = (args) => (
  <div>
    <Card size="default" theme="primary" {...args}>
      <div>primary</div>
    </Card>

    <div style={{ background: 'grey', padding: '10px 0px 10px 5px' }}>
      <Card size="default" theme="background" {...args}>
        <div>background</div>
      </Card>
    </div>

    <span style={{ margin: '16px' }} />
    <Card size="default" theme="clear" {...args}>
      <div>clear</div>
    </Card>

    <span style={{ margin: '16px' }} />
    <Card size="default" theme="clearInverted" {...args}>
      <div>clear invverted</div>
    </Card>

    <span style={{ margin: '16px' }} />
    <Card size="default" theme="outline" {...args}>
      <div>outline</div>
    </Card>
    <span style={{ margin: '16px' }} />
    <Card size="default" theme="outlinedDanger" {...args}>
      <div>outlined danger</div>
    </Card>
  </div>
);
export const Themes = ThemesTemplate.bind({});
