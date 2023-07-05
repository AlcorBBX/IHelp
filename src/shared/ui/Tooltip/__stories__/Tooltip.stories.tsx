import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Button } from 'shared/ui/Button';

import { Tooltip } from '../ui/Tooltip';
import type { TooltipProps } from '../ui/Tooltip.type';

export default {
  title: 'UiKit/Tooltip',
  component: Tooltip,
} as Meta;

const DefaultTemplate: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args} text="hi!">
    {(props) => (
      <div style={{ paddingTop: '100px', paddingLeft: '50px' }}>
        <p {...props} style={{ width: 'max-content' }}>
          tooltip
        </p>
      </div>
    )}
  </Tooltip>
);
export const Default = DefaultTemplate.bind({});

const ButtonTemplate: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args} text="hi!">
    {(props) => (
      <div style={{ paddingTop: '100px', paddingLeft: '50px' }}>
        <Button {...props}>tooltip</Button>
      </div>
    )}
  </Tooltip>
);
export const WithButton = ButtonTemplate.bind({});

const PositionsTemplate: StoryFn<TooltipProps> = (args) => (
  <React.Fragment>
    <div>
      <Tooltip {...args} type="bottom" text="hi!">
        {(props) => <Button {...props}>bottom</Button>}
      </Tooltip>
    </div>

    <div style={{ display: 'flex' }}>
      <Tooltip {...args} type="right" text="hi!">
        {(props) => <Button {...props}>rigth</Button>}
      </Tooltip>

      <Tooltip {...args} type="left" text="hi!">
        {(props) => <Button {...props}>left</Button>}
      </Tooltip>
    </div>

    <div>
      <Tooltip {...args} type="top" text="hi!">
        {(props) => <Button {...props}>top</Button>}
      </Tooltip>
    </div>
  </React.Fragment>
);
export const Positions = PositionsTemplate.bind({});
