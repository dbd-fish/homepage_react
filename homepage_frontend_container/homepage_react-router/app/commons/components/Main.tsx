// mainタグの基本レイアウト
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className = '' }: MainLayoutProps) {
  return (
    <main
      className={`flex-grow flex items-center justify-center pt-12 bg-cover bg-center ${className}`}
    >
      {children}
    </main>
  );
}
