'use client';
import React, { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full">
      <Header />
      <div className="w-full border-b border-solid border-border">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
