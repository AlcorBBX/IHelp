import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'shared/ui/Button';

import { Alert } from '../ui/Alert';
import { AlertProps } from '../ui/Alert.type';

export default {
  title: 'UiKit/Alert',
  component: Alert,
} as Meta;

const DefaultTemplate: StoryFn<AlertProps> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const onCloseAlert = () => {
    setOpen(false);
  };
  const onOpenModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={onOpenModal}>Open\close alert</Button>
      <Alert message="alert" isOpen={open} onClose={onCloseAlert} />
    </div>
  );
};
export const Default = DefaultTemplate.bind({});
