import { NavLink, useLocation } from 'react-router-dom';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

const navigation = [
  { name: 'Dashboard', path: '/', icon: 'dashboard' },
  { name: 'Analytics', path: '/analytics', icon: 'analytics' },
  { name: 'Invoice', path: '/invoices', icon: 'invoice' },
  { name: 'Schedule', path: '/schedule', icon: 'schedule' },
  { name: 'Calendar', path: '/calendar', icon: 'calendar' },
  { name: 'Messages', path: '/messages', icon: 'messages', badge: 49 },
  { name: 'Notification', path: '/notifications', icon: 'notification' },
  { name: 'Settings', path: '/settings', icon: 'settings' },
] as const;

export function Sidebar() {
  const location = useLocation();

  const checkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-[220px] h-screen bg-white flex flex-col fixed left-0 top-0 border-r border-border">
      <div className="px-6 py-6 flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C4 12 6 8 12 8M12 8C18 8 20 12 20 12M12 8V4M8 6L12 8L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-xl font-bold text-text">Base</span>
      </div>

      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const active = checkActive(item.path);
            const baseClass = 'flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)] text-sm font-medium transition-colors duration-150';
            const activeClass = active ? 'text-primary bg-primary-bg' : 'text-text-light hover:bg-background-alt';
            const iconClass = active ? 'text-primary' : 'text-text-muted';
            return (
              <li key={item.name}>
                <NavLink to={item.path} className={baseClass + ' ' + activeClass}>
                  <span className={iconClass}>
                    {Icons[item.icon as keyof typeof Icons]}
                  </span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="success" size="sm" className="ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 pb-4">
        <div className="relative bg-gradient-to-b from-blue-light to-transparent rounded-[var(--radius-lg)] p-4 pt-20 flex flex-col items-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10L55 50L65 30L75 70L50 90L25 70L35 30L45 50L50 10Z" fill="url(#ug)" fillOpacity="0.5"/>
              <defs>
                <linearGradient id="ug" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5EC3FF"/>
                  <stop offset="1" stopColor="#605BFF" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Button size="sm" className="w-full relative z-10">
            Upgrade Now
          </Button>
        </div>
      </div>

      <div className="px-4 py-4 border-t border-border">
        <div className="flex items-center gap-3">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            name="Easin Arafat"
            size="md"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-text truncate">Easin Arafat</p>
            <p className="text-xs text-text-muted">Free Account</p>
          </div>
          <button className="text-text-muted hover:text-text transition-colors">
            {Icons.logout}
          </button>
        </div>
      </div>
    </aside>
  );
}
