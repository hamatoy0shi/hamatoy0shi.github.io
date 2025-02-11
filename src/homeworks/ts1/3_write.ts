/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type OperationType = 'Cost' | 'Profit';

export type Operation = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: OperationType;
};

export type Grocery = {
  name: string;
  category: number;
};

const groceries: Grocery[] = [
  {
    name: 'milk',
    category: 0,
  },
  {
    name: 'coriander',
    category: 1,
  },
  {
    name: 'cucumber',
    category: 3,
  },
  {
    name: 'eggplant',
    category: 3,
  },
  {
    name: 'carrot',
    category: 3,
  },
  {
    name: 'onion',
    category: 3,
  },
  {
    name: 'tomato',
    category: 3,
  },
  {
    name: 'soap',
    category: 4,
  },
  {
    name: 'bag',
    category: 4,
  },
  {
    name: 'pepper',
    category: 1,
  },
  {
    name: 'salt',
    category: 1,
  },
  {
    name: 'banana',
    category: 2,
  },
  {
    name: 'apple',
    category: 2,
  },
  {
    name: 'orange',
    category: 2,
  },
  {
    name: 'sugar',
    category: 1,
  },
];

const categories: Category[] = [
  {
    id: '1',
    name: 'Drink',
    photo: 'https://somesite.com/1.jpg',
  },
  {
    id: '2',
    name: 'Spice',
    photo: 'https://somesite.com/2.jpg',
  },
  {
    id: '3',
    name: 'Fruit',
    photo: 'https://somesite.com/3.jpg',
  },
  {
    id: '4',
    name: 'Vegetable',
    photo: 'https://somesite.com/4.jpg',
  },
  {
    id: '5',
    name: 'Other',
    photo: 'https://somesite.com/5.jpg',
  },
];

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const oldPrice = Number(Math.random().toFixed(2));
  const grocery: Grocery = groceries[Math.floor(Math.random() * groceries.length)];
  return {
    id: `rnm-${Math.random() * 16}`,
    name: grocery.name,
    photo: `https://somesite.com/groceries/${Math.floor(Math.random() * 10)}.jpg`,
    desc: 'write your description here',
    createdAt: createdAt,
    oldPrice: oldPrice,
    price: oldPrice * 1.15,
    category: categories[grocery.category],
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const operationType: OperationType = Math.floor(Math.random() * 10) % 2 === 0 ? 'Cost' : 'Profit';
  return {
    id: `rnm-${Math.random() * 15}`,
    name: `${operationType}-${Math.random() * 10}`,
    desc: 'some random operation',
    createdAt: createdAt,
    amount: Math.floor(Math.random() * 20),
    category: categories[Math.floor(Math.random() * categories.length)],
    type: operationType,
  };
};
