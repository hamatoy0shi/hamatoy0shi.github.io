import img from './logo.svg';
import React, { FC } from 'react';
import cn from 'clsx';
import s from './Logo.modules.css';

const Logo: FC = () => {
  return (
    <div>
      <img src={img} className={cn(s.logo)} alt="logo" />
    </div>
  );
};

export default Logo;
