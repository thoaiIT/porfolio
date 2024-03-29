'use client';
import React, { type ReactNode } from 'react';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[100% -16px] mx-16 px-6">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
