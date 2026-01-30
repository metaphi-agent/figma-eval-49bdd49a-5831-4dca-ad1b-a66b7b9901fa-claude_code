import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="inline-flex items-center cursor-pointer group">
      <input
        type="checkbox"
        className={`w-4 h-4 rounded border-[#D1D3D8] text-[#5B5FFF] focus:ring-2 focus:ring-[#5B5FFF] focus:ring-offset-0 transition-colors ${className}`}
        {...props}
      />
      {label && (
        <span className="ml-2 text-sm text-[#202224] group-hover:text-[#5B5FFF] transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};
