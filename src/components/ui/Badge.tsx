import { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary';
  size?: 'sm' | 'md';
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', size = 'md', children, className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-background-alt text-text-light',
    success: 'bg-green-light text-green',
    warning: 'bg-yellow-light text-yellow',
    error: 'bg-red-light text-red',
    info: 'bg-blue-light text-blue',
    primary: 'bg-primary-bg text-primary',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-[var(--radius-sm)] ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
