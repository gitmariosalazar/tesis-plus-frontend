import React, { useState, useCallback, ChangeEvent, FC } from 'react';
import { IconType } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './InputLabel.css';

interface ValidationResult {
  isValid: boolean;
  msg?: string;
}

interface InputLabelProps {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validator?: (value: string) => ValidationResult | boolean;
  name?: string;
  error?: string | null;
  resetError?: () => void;
  leftIcon?: IconType;
  rightIcon?: IconType;
  className?: string;
}

const InputLabel: FC<InputLabelProps> = ({
  label,
  type,
  placeholder,
  required = false,
  onChange,
  value,
  validator = () => true,
  name,
  error,
  resetError,
  leftIcon,
  rightIcon,
  className,
}) => {
  const [validation, setValidation] = useState<ValidationResult>({
    isValid: true,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isTypePassword = type === 'password';

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      const result = validator(inputValue);

      if (typeof result === 'boolean') {
        setValidation({ isValid: result });
      } else {
        setValidation(result);
      }

      onChange(event);
    },
    [validator, onChange]
  );

  const renderIcon = (position: 'left' | 'right', Icon?: IconType) =>
    Icon && (
      <div className={`icon-container ${position}-icon`}>
        {React.createElement(Icon, { className: 'icon-input' })}
      </div>
    );

  const renderPasswordToggle = () =>
    isTypePassword && (
      <div
        className="icon-container right-icon password-toggle"
        onClick={() => setShowPassword((prev) => !prev)}
        title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      >
        {showPassword ? (
          <FaEyeSlash className="icon-input clickable" />
        ) : (
          <FaEye className="icon-input clickable" />
        )}
      </div>
    );

  return (
    <div className={`input-label-wrapper ${className}`}>
      <label className="input-label">{label}</label>
      <div className="input-container">
        {renderIcon('left', leftIcon)}

        <input
          onFocus={resetError}
          type={isTypePassword && showPassword ? 'text' : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`input-field ${error ? 'error' : ''} ${leftIcon ? 'with-left-icon' : ''}`}
        />

        {isTypePassword
          ? renderPasswordToggle()
          : renderIcon('right', rightIcon)}

        {(error || !validation.isValid) && (
          <span className="error-message">{error ?? validation.msg}</span>
        )}
      </div>
    </div>
  );
};

export default InputLabel;
