import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, iconRight, className = '', ...props }, ref) => {
    const hasIcon = Boolean(icon);
    const hasIconRight = Boolean(iconRight);
    const hasError = Boolean(error);
    
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-text">{label}</label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={[
              'w-full px-4 py-3 text-sm bg-background-alt border-none rounded-[var(--radius-md)]',
              'placeholder:text-text-muted',
              'focus:outline-none focus:ring-2 focus:ring-primary/20',
              hasIcon ? 'pl-10' : '',
              hasIconRight ? 'pr-10' : '',
              hasError ? 'ring-2 ring-red/20' : '',
              className,
            ].join(' ')}
            {...props}
          />
          {iconRight && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted cursor-pointer">
              {iconRight}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-red">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
