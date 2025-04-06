import React, { FC } from 'react';
import cn from 'clsx';
import s from './CartItem.modules.css';

interface CartItemProps {
  name: string;
  image: string;
  price: number;
}

const CartItem: FC<CartItemProps> = ({ name, image, price }) => {
  return (
    <div className={cn(s.item)}>
      <img src={image} alt={name} className={cn(s.image)} />
      <div className={cn(s.info)}>
        <h3>{name}</h3>
        <p>{price} р</p>
      </div>
      <button className={cn(s.button)}>Удалить</button>
    </div>
  );
};

export default CartItem;
