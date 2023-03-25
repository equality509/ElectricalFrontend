import React, { ReactNode, MouseEvent} from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

type ButtonProps = {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    buttonStyle?: 'btn--primary' | 'btn--outline' | 'btn--test';
    buttonSize?: 'btn--medium' | 'btn--large';
  };

  const STYLES: ButtonProps['buttonStyle'][] = [
    'btn--primary',
    'btn--outline',
    'btn--test',
  ];
const SIZES: ButtonProps['buttonSize'][] = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type = 'button',
    onClick,
    buttonStyle = STYLES[0],
    buttonSize = SIZES[0],
  }: ButtonProps) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};