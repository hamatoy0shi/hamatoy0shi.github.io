/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (inString: string): string => inString.replace(/^\+/, '');

export const addPlus = (inString: string | number) => `+${inString}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: NonNullable<string>, separator = ' ') =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d: number = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

interface returnValue {
  x: number;
  y: number;
}

export const getTransformFromCss = (transformCssString: string): returnValue => {
  const data: Array<string> | null = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

interface rgb {
  0: number;
  1: number;
  2: number;
}

export const getColorContrastValue = (input: Required<rgb>): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((input[0] * 299 + input[1] * 587 + input[2] * 114) / 1000);

export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): number[] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red: number = parseInt(color.substring(1, 2), 16);
    const green: number = parseInt(color.substring(2, 3), 16);
    const blue: number = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red: number = parseInt(color.substring(1, 3), 16);
  const green: number = parseInt(color.substring(3, 5), 16);
  const blue: number = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export const getNumberedArray = <T>(arr: T[]): Array<{ value: T; number: number }> =>
  arr.map((value: T, number: number): { value: T; number: number } => ({ value, number }));

export const toStringArray = <T>(arr: { value: T; number: number }[]): string[] =>
  arr.map(({ value, number }): string => `${value}_${number}`);

interface Customer {
  id: string;
  name: string;
  age: number;
  isSubscribed: boolean;
}

type AccType = Record<Customer['id'], Pick<Customer, 'name' | 'age' | 'isSubscribed'>>;

export const transformCustomers = (customers: Required<Customer[]>): AccType => {
  return customers.reduce((acc: AccType, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
