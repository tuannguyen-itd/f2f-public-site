import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import HeaderMenu from './header-menu';
import { IMenus } from '@services';

interface ILayout {
  children: React.ReactNode;
  menus: IMenus;
}

export default function Layout({ children, menus }: ILayout) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" />
        <meta name="author" />
        <link rel="icon" href="/favicon.ico" />
        <title>Papers</title>
      </Head>
      <div className="container">
        <Header />
        <HeaderMenu menus={menus.header} />
        {children}
        <Footer menus={menus.footers} />
      </div>
    </div>
  );
}
