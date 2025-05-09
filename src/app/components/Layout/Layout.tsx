import React from 'react';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
