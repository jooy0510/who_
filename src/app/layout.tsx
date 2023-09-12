// "use client";

import './globals.css';
import styles from './layout.module.scss';
import type { Metadata } from 'next';

import NavBar from 'src/components/NavBar';
import { Providers } from './Providers';

export const metadata: Metadata = {
  title: 'WHO',
  description: '대학생 응원단 WHO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <NavBar></NavBar>
          <main className={styles.main}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
