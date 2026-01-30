import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className="w-5 h-5 rounded-md border-2 border-primary text-primary focus:ring-2 focus:ring-primary/30 cursor-pointer"
          {...props}
        />
        {label && (
          <label htmlFor={checkboxId} className="text-sm text-text cursor-pointer">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
