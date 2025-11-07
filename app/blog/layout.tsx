import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 min-w-0">{children}</div>
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
