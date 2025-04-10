import { Meta } from '@storybook/react';
import CartItem from './CartItem';

const meta: Meta<typeof CartItem> = {
  component: CartItem,
  argTypes: {
    image: {
      control: { type: 'select' },
      options: [
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/The_Smashing_Pumpkins_-_MCIS_-_reissue_cover.jpg/220px-The_Smashing_Pumpkins_-_MCIS_-_reissue_cover.jpg',
        'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/The_Smashing_Pumpkins_-_Mellon_Collie_And_The_infinite_Sadness.jpg/220px-The_Smashing_Pumpkins_-_Mellon_Collie_And_The_infinite_Sadness.jpg',
        'https://avatars.mds.yandex.net/i?id=8b4d7ac37f17a8932fcfad2726d5d5738cd7456d-9601511-images-thumbs&n=13',
      ],
    },
    name: { control: { type: 'text' } },
    price: { control: { type: 'range', min: 0, max: 10000 } },
  },
};

export default meta;

export const Example = {
  args: {
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/The_Smashing_Pumpkins_-_MCIS_-_reissue_cover.jpg/220px-The_Smashing_Pumpkins_-_MCIS_-_reissue_cover.jpg',
    name: 'Mellon Collie And The Infinite Sadness',
    price: 3000,
  },
};
