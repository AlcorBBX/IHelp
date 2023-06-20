import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Button } from 'shared/ui/Button/Button';

// import { Icon } from 'shared/ui/Icon/Icon';
import { Tooltip, type TooltipProps } from '../Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const DefaultTemplate: StoryFn<TooltipProps> = (args) => (
  <Tooltip text="hi!">
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
  <Tooltip text="hi!">
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
      <Tooltip type="bottom" text="hi!">
        {(props) => <Button {...props}>bottom</Button>}
      </Tooltip>
    </div>

    <div style={{ display: 'flex' }}>
      <Tooltip type="right" text="hi!">
        {(props) => <Button {...props}>rigth</Button>}
      </Tooltip>

      <Tooltip type="left" text="hi!">
        {(props) => <Button {...props}>left</Button>}
      </Tooltip>
    </div>

    <div>
      <Tooltip type="top" text="hi!">
        {(props) => <Button {...props}>top</Button>}
      </Tooltip>
    </div>
  </React.Fragment>
);
export const Positions = PositionsTemplate.bind({});
