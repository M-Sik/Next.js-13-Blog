import React from 'react';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'DevSik 블로그',
    template: 'DevSik 블로그 | %s',
  },
  description: '프론트엔드 개발자 DevSik의 블로그',
  icons: {
    icon: 'favicon.ico',
  },
  keywords: '블로그, 제품, 키워드',
  robots: 'INDEX, FOLLOW',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      {/* <meta name="naver-site-verification" content="a0f90629cc177872e597b95fe41df907956e5dff" /> */}
      <body className="flex flex-col w-full max-w-screen-xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
