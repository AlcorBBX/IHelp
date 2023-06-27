import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import type { CardProps } from 'shared/ui/Card/Card.type';

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
      {...args}
      title="Title"
      // cover={<p>d</p>}
      extra={<Button theme="outlinedDanger">X</Button>}
      actions={[
        [<Button theme="outlinedDanger">add</Button>],
        [<Button theme="outlinedDanger">delete</Button>],
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

// const SelectedTemplate: StoryFn<CardProps> = (args) => (
//   <Card
//     className="my-card"
//     type="selection"
//     view="clear"
//     size="m"
//     onClick={() => {}}
//     selected
//     disabled
//     {...args}
//   >
//     <div>Card's content</div>
//   </Card>
// );
// export const Selected = SelectedTemplate.bind({});
