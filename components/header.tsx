import React from 'react';
import styles from '@styles/home.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-10 col-sm-11 text-center">
          <Link href={'/'}>
            <a className="blog-header-logo text-dark">
              <img src="/logo.png" alt="my image" className={styles.logo}/>
            </a>
          </Link>
        </div>
        <div className="col-2 col-sm-1 d-flex justify-content-end">
          <Link href="/documents?search=">
            <a className="text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-3">
                <circle cx="10.5" cy="10.5" r="7.5"/>
                <line x1={21} y1={21} x2="15.8" y2="15.8"/>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
