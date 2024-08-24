import React from "react";
import './TextField.scss';

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    value: string;
    errorMessage: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Textfield = ({ id, label, placeholder, value, errorMessage, onChange, ...rest }: TextfieldProps) => {
    return <>
        <label htmlFor={id}>{label}</label>
        <div className="input-wrapper">
            <input id={id} name={id} type='text' className='text-field' placeholder={placeholder}
                value={value} onChange={onChange} {...rest} />
            <span className="error-message">{errorMessage ?? ''}</span>
        </div>
    </>
}