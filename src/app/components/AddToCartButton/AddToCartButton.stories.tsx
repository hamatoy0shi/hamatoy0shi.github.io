import AddToCartButton from './AddToCartButton';
import { Meta } from '@storybook/react';

const meta: Meta<typeof AddToCartButton> = {
  component: AddToCartButton,
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
};

export default meta;

export const Example = {
  args: {
    count: '0',
  },
};
