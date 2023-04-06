'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathName = usePathname();
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{'DevSik Blog'}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/" className={pathName === '/' ? ` font-semibold` : `text-gray-500`}>
          home
        </Link>
        <Link href="/about" className={pathName === '/about' ? ` font-semibold` : `text-gray-500`}>
          about
        </Link>
        <Link href="/posts" className={pathName === '/posts' ? ` font-semibold` : `text-gray-500`}>
          posts
        </Link>
        <Link
          href="/contact"
          className={pathName === '/contact' ? ` font-semibold` : `text-gray-500`}
        >
          contact
        </Link>
      </nav>
    </header>
  );
}
