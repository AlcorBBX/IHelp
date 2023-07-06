import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import 'shared/styles/index.scss';
import { Button } from 'shared/ui/Button';

import { OverlayingModal } from '../ui/OverlayingModal/OverlayingModal';
import { ModalProps } from '../ui/OverlayingModal/OverlayingModal.type';

export default {
  title: 'UiKit/Modals',
  component: OverlayingModal,
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
      <OverlayingModal isOpen={open} onClose={onCloseModal} {...args}>
        Modal
      </OverlayingModal>
      {/* )} */}
    </div>
  );
};
export const Default = DefaultTemplate.bind({});
