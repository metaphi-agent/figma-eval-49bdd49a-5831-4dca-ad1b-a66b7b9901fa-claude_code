import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'complete' | 'pending' | 'cancel' | 'low' | 'medium' | 'high' | 'onTrack' | 'atRisk' | 'male' | 'female';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'complete',
  size = 'md',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full whitespace-nowrap';

  const variantClasses = {
    complete: 'bg-[#D4F5EC] text-[#00C48C]',
    pending: 'bg-[#FFF0E0] text-[#FFA043]',
    cancel: 'bg-[#FFE5E5] text-[#FF5B5B]',
    low: 'bg-[#FF7C7C] text-white',
    medium: 'bg-[#FF9F7C] text-white',
    high: 'bg-[#00C4DB] text-white',
    onTrack: 'bg-[#FFC043] text-white',
    atRisk: 'bg-[#D9534F] text-white',
    male: 'bg-[#E5E7FF] text-[#5B5FFF]',
    female: 'bg-[#FFE5F1] text-[#FF5B8D]'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
};
