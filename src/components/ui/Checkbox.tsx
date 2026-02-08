import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className={`inline-flex items-center gap-2 cursor-pointer ${className}`}>
        <input
          type="checkbox"
          ref={ref}
          className="w-4 h-4 rounded-[var(--radius-sm)] border border-border-medium text-primary focus:ring-primary/20 focus:ring-2 checked:bg-primary checked:border-primary cursor-pointer"
          {...props}
        />
        {label && <span className="text-sm text-text">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
