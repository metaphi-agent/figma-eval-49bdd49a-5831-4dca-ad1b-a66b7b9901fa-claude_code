import { Card } from '../ui';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg?: string;
}

export default function StatsCard({ title, value, icon, iconBg = 'bg-blue-light' }: StatsCardProps) {
  return (
    <Card className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-full ${iconBg} flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-text">{value}</p>
        <p className="text-sm text-text-muted">{title}</p>
      </div>
    </Card>
  );
}
