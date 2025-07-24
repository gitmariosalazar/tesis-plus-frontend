import React from 'react';
import { IconType } from 'react-icons';
import './Button.css';
import { ImSpinner } from 'react-icons/im';
import { ColorBtn, TypeHtml, VariantBtn } from '@/shared/types/button.types';
import { Tooltip } from 'antd';

interface CustomButtonProps {
  title?: string;
  icon?: IconType;
  typeHtml?: TypeHtml;
  loading?: boolean;
  color?: ColorBtn;
  variant?: VariantBtn;
  className?: string;
  tooltip?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  icon: Icon,
  loading = false,
  color,
  variant,
  className,
  tooltip,
  typeHtml = 'button',
  onClick,
  disabled = false,
  ...props
}) => {
  const colorClass = `btn-color-${color}`;
  const variantClass = `btn-variant-${variant}`;

  const classCircle: string =
    !title || title.trim().length === 0 ? 'btn-circle' : '';

  return (
    <Tooltip title={tooltip} color={color}>
      <button
        className={`custom-button ${classCircle} ${colorClass} ${variantClass} ${className} ${
          loading ? 'loading' : ''
        } ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled}
        type={typeHtml}
        {...props}
      >
        {loading ? (
          <>
            <span className="spinner">
              <ImSpinner />
            </span>
            {title ? 'Loading...' : ''}
          </>
        ) : (
          <>
            {Icon && <Icon className="button-icon" />}
            {title}
          </>
        )}
      </button>
    </Tooltip>
  );
};
