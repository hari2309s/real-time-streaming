import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    color: string;
}

export const Button = ({ children, color, ...rest }: ButtonProps) => {
    return (
        <button className="button" style={{ background: color }} {...rest}>
            {children}
        </button>
    );
};
