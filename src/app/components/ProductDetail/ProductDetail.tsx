import React, { FC } from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import cn from 'clsx';
import s from './ProductDetail.modules.css';

interface ProductDetailProps {
  images: string[];
  name: string;
  category: string;
  description: string;
  price: number;
}

const ProductDetail: FC<ProductDetailProps> = ({ images, name, category, description, price }) => {
  return (
    <div className={cn(s.detail)}>
      <div className={cn(s.imagesContainer)}>
        {images.map((image, index) => (
          <img key={index} className={cn(s.image)} src={image} alt={`${name}+${index}`} />
        ))}
      </div>
      <h1 className={cn(s.name)}>{name}</h1>
      <h2 className={cn(s.category)}>{category}</h2>
      <p className={cn(s.description)}>{description}</p>
      <p className={cn(s.price)}>{price} р</p>
      <AddToCartButton count={0} />
    </div>
  );
};

export default ProductDetail;
