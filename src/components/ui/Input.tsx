import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-text">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full h-11 px-4 ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} bg-background-alt rounded-[10px] text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${error ? 'ring-2 ring-red/30' : ''} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted cursor-pointer hover:text-text transition-colors">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-xs text-red">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
