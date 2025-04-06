import React, { FC } from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import cn from 'clsx';
import s from './ProductCard.modules.css';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = ({ image, name, description, price }) => {
  return (
    <div className={cn(s.card)}>
      <img className={cn(s.image)} src={image} alt={name} />
      <h3>{name}</h3>
      <p className={cn(s.description)}>{description.slice(0, 50)}...</p>
      <p className={cn(s.price)}>{price} р</p>
      <AddToCartButton count={0} />
    </div>
  );
};

export default ProductCard;
