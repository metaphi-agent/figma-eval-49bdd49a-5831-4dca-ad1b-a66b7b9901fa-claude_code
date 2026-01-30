import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'social';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-[#5B5FFF] text-white hover:bg-[#4B4FEF] active:bg-[#3B3FDF] shadow-md',
    secondary: 'bg-[#F7F8FA] text-[#202224] hover:bg-[#E8EAED] active:bg-[#D9DDE0]',
    outline: 'border border-[#D1D3D8] bg-white text-[#202224] hover:bg-[#F7F8FA] active:bg-[#E8EAED]',
    text: 'text-[#5B5FFF] hover:bg-[#F0F1FF] active:bg-[#E5E7FF]',
    social: 'bg-white border border-[#D1D3D8] text-[#202224] hover:bg-[#F7F8FA] transition-colors'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};
