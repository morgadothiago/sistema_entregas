import React from 'react';
import { auth } from '../api/auth/[...nextauth]/route';
import { redirect, RedirectType } from 'next/navigation';

// import { Container } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const session = await auth()
  
  if(session){
    redirect('/dashboard', RedirectType.push)
  }

  return <>{children}</>;
}

export default Layout;