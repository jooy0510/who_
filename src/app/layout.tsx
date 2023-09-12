// "use client";

import { Providers } from './Providers';
import './globals.css';
import styles from './layout.module.scss';
import cx from 'classnames';
import type { Metadata } from 'next';

import NavBar from 'src/components/layout/NavBar';

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
      <body className="w-screen">
        <Providers>
          <NavBar></NavBar>
          {/* <main className={styles.main}> */}
          {children}
          {/* </main> */}
        </Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer
      className={cx(
        styles.footer,
        'flex justify-center w-full  px-8 py-12 bg-gray-200'
      )}
    >
      <div className="max-w-[78rem] w-full flex flex-col justify-start items-start row-gap-4">
        <p className={styles.footerHeader}>WHO</p>
        <p className={cx(styles.footerBody, 'flex flex-col')}>
          <span>인스타 : who_insta | 연락처 : 010-0000-0000</span>
          <span>주소 : 경기도 수원시 영통구 영통동 123456789</span>
        </p>
        <p className={styles.footerFooter}>
          Copyright ⓒ Penguin Coding. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
