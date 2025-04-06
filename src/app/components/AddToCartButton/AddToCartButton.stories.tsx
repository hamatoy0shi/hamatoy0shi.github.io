import AddToCartButton from './AddToCartButton';
import { Meta } from '@storybook/react';

const meta: Meta<typeof AddToCartButton> = {
  component: AddToCartButton,
  argTypes: {
    count: {
      control: { type: 'range', min: 0, max: 10 },
    },
  },
};

export default meta;

export const Example = {
  args: {
    count: 0,
  },
};
