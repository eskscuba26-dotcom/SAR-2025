import React from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from '@/components/ui/toaster';

export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
      <Toaster />
    </div>
  );
};