import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import s from './Header.modules.css';
import cn from 'clsx';

const Header: FC = () => {
  return (
    <header className={cn(s.header)}>
      <Logo />
    </header>
  );
};

export default Header;
