import React, { DialogHTMLAttributes } from 'react';

export const Dialog: React.FC<DialogHTMLAttributes<HTMLDialogElement>> = ({ children, className, ...rest }) => (
  <dialog className={className} {...rest}>
    {children}
  </dialog>
);
