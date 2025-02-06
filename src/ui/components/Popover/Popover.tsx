import React, { HTMLAttributes } from 'react';

export const Popover: React.FC<HTMLAttributes<HTMLDivElement & { popover: string }>> = ({
  children,
  className,
  ...rest
}) => (
  <div id="my-popover" className={className} popover="auto" {...rest}>
    {children}
  </div>
);
