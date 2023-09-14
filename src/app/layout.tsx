import { Providers } from './Providers';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'WHO',
  description: ' 응원단 WHO',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="w-screen">
        <Providers>
          <NavBar></NavBar>
          {children}
        </Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
