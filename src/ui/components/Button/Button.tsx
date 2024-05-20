import React, { ButtonHTMLAttributes } from 'react';
import './button.css';

type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({ variant = 'secondary', backgroundColor, size = 'medium', children, ...rest }: Button) => (
  <button
    className={['storybook-button', `storybook-button--${variant}`, `storybook-button--${size}`].join(' ')}
    style={backgroundColor && { backgroundColor }}
    {...rest}
  >
    {children}
  </button>
);
