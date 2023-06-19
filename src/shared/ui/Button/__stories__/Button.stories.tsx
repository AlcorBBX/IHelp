import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const DefaultTemplate: StoryFn<ButtonProps> = (args) => (
  <Button theme="background" {...args}>
    Button
  </Button>
);
export const Default = DefaultTemplate.bind({});

const SizeTemplate: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} size="xs">
      Size xs
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="s">
      Size s
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="m">
      Size m
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="l">
      Size l
    </Button>
    <span style={{ margin: '16px' }} />
    <Button {...args} size="xl">
      Size xl
    </Button>
  </div>
);
export const Size = SizeTemplate.bind({});

// const IconTemplate: StoryFn<ButtonProps> = (args) => (
//   <React.Fragment>
//     <Button {...args}>No icon</Button>
//     <span style={{ margin: '16px' }} />
//     <Button {...args}>
//       {/* <IconComponent data={GearIcon} size={18} /> */}
//       Left
//     </Button>
//     <span style={{ margin: '16px' }} />
//     <Button {...args}>
//       Right
//       {/* <IconComponent data={GearIcon} size={18} /> */}
//     </Button>
//     <span style={{ margin: '16px' }} />
//     <Button {...args}>
//       {/* <IconComponent data={GearIcon} size={18} /> */}
//       Both
//       {/* <IconComponent data={GearIcon} size={18} /> */}
//     </Button>
//     <span style={{ margin: '16px' }} />
//     <Button {...args}>
//       <Button.Icon side="right">
//         {/* <IconComponent data={GearIcon} size={18} /> */}
//       </Button.Icon>
//       Both (with Button.Icon)
//       {/* <IconComponent data={GearIcon} size={18} /> */}
//     </Button>
//     <span style={{ margin: '16px' }} />
//     <Button {...args}>
//       {/* <IconComponent data={GearIcon} size={18} /> */}
//     </Button>
//     <span style={{ margin: '16px' }} />
//     <Button {...args}>
//       <Button.Icon>
//         {/* <IconComponent data={GearIcon} size={18} /> */}
//       </Button.Icon>
//     </Button>
//   </React.Fragment>
// );
// export const Icon = IconTemplate.bind({});

export const Selected: StoryFn<ButtonProps> = (args) => {
  const [selected, setSelected] = useState(true);

  return (
    <Button {...args} active={selected} onClick={() => setSelected(!selected)}>
      {`Button is ${selected ? 'on' : 'off'}`}
    </Button>
  );
};

// export const Link: StoryFn<ButtonProps> = (args) => {
//   return (
//     <Button {...args}  href={'//ya.ru'} target={'_blank'}>
//       {`Open ya.ru`}
//     </Button>
//   );
// };

// export const ButtonInRouter: StoryFn<ButtonProps> = (args) => {
//   return (
//     <a href={'https://ya.ru'} target={'_blank'} rel="noreferrer">
//       <Button {...args} component={'span'}>
//         {`Open ya.ru`}
//       </Button>
//     </a>
//   );
// };

// export const CustomComponent: StoryFn<ButtonProps> = (args) => {
//   const ButtonComponent = (props: ButtonProps) => {
//     return (
//       <button {...props} style={{ boxShadow: '2px 2px 2px 2px deepskyblue' }} />
//     );
//   };
//   return (
//     <Button {...args} view="normal" component={ButtonComponent}>
//       {`Button with custom component`}
//     </Button>
//   );
// };

// const ShowcaseTemplate: StoryFn = () => <ButtonShowcase />;
// export const Showcase = ShowcaseTemplate.bind({});
