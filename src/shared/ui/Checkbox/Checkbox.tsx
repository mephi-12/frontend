import React, { InputHTMLAttributes } from 'react';
import './styles.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <label className={`custom-checkbox ${className} ${disabled ? 'disabled' : ''}`}>
      <input 
        type="checkbox" 
        disabled={disabled}
        {...props}
      />
      <span className="checkmark"></span>
      {label && <span className="label-text">{label}</span>}
    </label>
  )
}
