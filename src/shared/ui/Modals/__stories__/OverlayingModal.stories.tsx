import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Button } from 'shared/ui/Button';

import { Modal } from '../ui/Modal/Modal';
import { ModalProps } from '../ui/Modal/Modal.type';

export default {
  title: 'UiKit/Modals',
  component: Modal,
} as Meta;

const DefaultTemplate: StoryFn<ModalProps> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const onCloseModal = () => {
    setOpen(false);
  };
  const onShowModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={onShowModal}>Open modal</Button>
      {/* {open && ( */}
      <Modal isOpen={open} onClose={onCloseModal} {...args}>
        Modal
      </Modal>
      {/* )} */}
    </div>
  );
};
export const Default = DefaultTemplate.bind({});
