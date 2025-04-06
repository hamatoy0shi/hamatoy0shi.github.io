import ProductDetail from './ProductDetail';
import { Meta } from '@storybook/react';

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
  argTypes: {
    images: { control: { type: 'object' } },
    category: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    price: { control: { type: 'range', min: 0, max: 10000 } },
    description: { control: { type: 'text' } },
  },
};

export default meta;

export const Example = {
  args: {
    images: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/The_Smashing_Pumpkins_-_MCIS_-_reissue_cover.jpg/220px-The_Smashing_Pumpkins_-_MCIS_-_reissue_cover.jpg',
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/The_Smashing_Pumpkins_-_Mellon_Collie_And_The_infinite_Sadness.jpg/220px-The_Smashing_Pumpkins_-_Mellon_Collie_And_The_infinite_Sadness.jpg',
      'https://avatars.mds.yandex.net/i?id=8b4d7ac37f17a8932fcfad2726d5d5738cd7456d-9601511-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5d1f2082ff51285212f1f4d2f8ea3b36f4f49801-5241709-images-thumbs&n=13',
    ],
    category: 'LP',
    name: 'Mellon Collie And The Infinite Sadness',
    description:
      "third studio album and first double album by the American alternative rock band the Smashing Pumpkins, released on October 23, 1995, in the United Kingdom[1] and on October 24 in the United States by Virgin Records. It was produced by the singer and guitarist Billy Corgan, alongside the producers Flood and Alan Moulder. The 28-track album was released as a two-disc CD and a triple LP. It features a wide array of musical styles, including art rock, grunge, alternative pop, and heavy metal.'",
    price: 3000,
  },
};
