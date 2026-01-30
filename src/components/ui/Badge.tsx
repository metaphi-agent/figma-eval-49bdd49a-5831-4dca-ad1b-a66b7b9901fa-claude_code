import { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple';
  size?: 'sm' | 'md';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-background-alt text-text-muted',
      success: 'bg-green-light text-green',
      warning: 'bg-yellow-light text-yellow',
      danger: 'bg-red-light text-red',
      info: 'bg-blue-light text-blue',
      purple: 'bg-primary-bg text-primary',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-[10px]',
      md: 'px-3 py-1 text-xs',
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center justify-center font-semibold rounded-[7px] ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
