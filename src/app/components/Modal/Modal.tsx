import React, { FC } from 'react';
import cn from 'clsx';
import s from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className={cn(s.mask)}>
      <div className={cn(s.container)}>
        <button className={cn(s.button)}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
