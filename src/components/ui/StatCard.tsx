import React from 'react';
import { Card } from './Card';

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconBgColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  iconBgColor = '#E5E7FF'
}) => {
  return (
    <Card className="flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#202224]">{value}</h3>
        <p className="text-sm text-[#8B8D97] mt-0.5">{label}</p>
      </div>
    </Card>
  );
};
