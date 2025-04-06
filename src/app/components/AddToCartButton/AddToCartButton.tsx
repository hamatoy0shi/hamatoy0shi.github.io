import React, { FC } from 'react';
import cn from 'clsx';
import s from './AddToCartButton.modules.css';

interface ButtonProps {
  count: number;
}

const AddToCartButton: FC<ButtonProps> = ({ count }) => {
  if (count < 1) {
    return <button className={cn(s.add_button)}>Добавить</button>;
  }

  return (
    <div className={cn(s.controls)}>
      <button className={cn(s.ctrl_button)}>-</button>
      <input type="text" className={cn(s.input)} value={count} readOnly={true} />
      <button className={cn(s.ctrl_button)}>+</button>
    </div>
  );
};

export default AddToCartButton;
