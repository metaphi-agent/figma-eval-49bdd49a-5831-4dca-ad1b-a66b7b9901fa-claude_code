import React from 'react';
import { Card } from '../components/ui';

interface PlaceholderProps {
  title: string;
  description?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#202224] mb-8">{title}</h1>
      <Card>
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#F0F1FF] flex items-center justify-center">
            <svg className="w-12 h-12 text-[#5B5FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#202224] mb-2">{title}</h2>
          <p className="text-[#8B8D97] max-w-md mx-auto">
            {description || 'This page is under construction. Check out the working pages like Dashboard, Invoice List, and Customer List!'}
          </p>
        </div>
      </Card>
    </div>
  );
};
