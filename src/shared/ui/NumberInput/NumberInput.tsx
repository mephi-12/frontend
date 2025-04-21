import React from 'react';
import './styles.scss';

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  onAdd?: () => void
  onSub?: () => void
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  error = false,
  className = '',
  onSub,
  onAdd,
  ...props
}) => {
  return (
    <div className={`number-input ${className} ${error ? 'error' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <input type="number" {...props} />
        <div className="stepper-buttons">
          <button onClick={onAdd} type="button" className="step-btn step-up">+</button>
          <button onClick={onSub} type="button" className="step-btn step-down">-</button>
        </div>
      </div>
    </div>
  );
};