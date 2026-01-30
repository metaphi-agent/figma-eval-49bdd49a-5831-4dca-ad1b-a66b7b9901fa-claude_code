import { NavLink } from 'react-router-dom';
import { Avatar } from '../ui';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/' },
  { icon: 'analytics', label: 'Analytics', path: '/analytics' },
  { icon: 'invoice', label: 'Invoice', path: '/invoices' },
  { icon: 'schedule', label: 'Schedule', path: '/schedule' },
  { icon: 'calendar', label: 'Calendar', path: '/calendar' },
  { icon: 'messages', label: 'Messages', path: '/messages', badge: 49 },
  { icon: 'notification', label: 'Notification', path: '/notifications' },
  { icon: 'settings', label: 'Settings', path: '/settings' },
];

interface SidebarProps {
  collapsed?: boolean;
}

export default function Sidebar({ collapsed = false }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-0 h-screen bg-surface flex flex-col transition-all duration-300 ${collapsed ? 'w-[72px]' : 'w-[218px]'}`}>
      {/* Logo */}
      <div className={`flex items-center gap-3 px-6 py-5 ${collapsed ? 'justify-center px-3' : ''}`}>
        <img src="./assets/icons/logo.svg" alt="Base" className="w-[42px] h-[42px]" />
        {!collapsed && <span className="text-2xl font-semibold text-text">Base</span>}
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 px-3 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-r-[5px] transition-all ${collapsed ? 'justify-center' : ''} ${
                isActive
                  ? 'bg-gradient-to-r from-primary-lighter/20 to-transparent text-primary'
                  : 'text-text-muted hover:bg-background-alt hover:text-text'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={`./assets/icons/${item.icon}.svg`}
                  alt=""
                  className={`w-6 h-6 ${isActive ? '' : 'opacity-40'}`}
                  style={isActive ? {} : { filter: 'grayscale(100%)' }}
                />
                {!collapsed && (
                  <span className="font-semibold text-base flex-1">{item.label}</span>
                )}
                {!collapsed && item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold text-red bg-red-light rounded-[7px]">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Upgrade Card */}
      {!collapsed && (
        <div className="mx-4 mb-4 p-4 bg-blue-light/10 rounded-[20px] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 text-blue/20" viewBox="0 0 128 128" fill="none">
              <path d="M64 16L80 48L116 52L88 80L96 116L64 98L32 116L40 80L12 52L48 48L64 16Z" fill="currentColor" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="w-[150px] h-[150px] mx-auto mb-2 flex items-center justify-center">
              <img src="./assets/icons/logo.svg" alt="" className="w-24 h-24 opacity-80" />
            </div>
            <button className="w-full py-2 bg-primary text-white text-xs font-semibold rounded-[10px] hover:bg-primary/90 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      )}

      {/* User Profile */}
      <div className={`flex items-center gap-3 px-4 py-4 border-t border-border ${collapsed ? 'justify-center px-3' : ''}`}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Easin Arafat"
          size="md"
        />
        {!collapsed && (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text truncate">Easin Arafat</p>
              <p className="text-xs text-text-muted truncate">Free Account</p>
            </div>
            <img
              src="./assets/icons/logout.svg"
              alt="Logout"
              className="w-5 h-5 opacity-40 cursor-pointer hover:opacity-70 transition-opacity"
            />
          </>
        )}
      </div>
    </aside>
  );
}
