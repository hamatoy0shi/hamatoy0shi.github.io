import Modal from './Modal';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    visible: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Visible = {
  args: {
    visible: true,
    children: 'Модальное окно',
  },
};
