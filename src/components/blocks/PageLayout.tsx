import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
}

export default function PageLayout({ children, title, actions }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-[218px] min-h-screen">
        {(title || actions) && (
          <header className="flex items-center justify-between px-8 py-6">
            {title && (
              <h1 className="text-2xl font-bold text-text">{title}</h1>
            )}
            {actions && (
              <div className="flex items-center gap-4">
                {actions}
              </div>
            )}
          </header>
        )}
        <div className="px-8 pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}
