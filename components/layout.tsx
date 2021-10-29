import React from 'react';
import Head from 'next/head';
import Header from './header';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" />
        <meta name="author" />
        <link rel="icon" href="/favicon.ico" />
        <title>FacetoFace</title>

        <link href="/theme/template/css/bootstrap.css" rel="stylesheet" />
        <link href="/theme/template/css/style.css" rel="stylesheet" />
        <link href="/theme/template/css/responsive.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

        <script src="/theme/template/js/jquery.js"></script>
        <script src="/theme/template/js/popper.min.js"></script>
        <script src="/theme/template/js/bootstrap.min.js"></script>
        <script src="/theme/template/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="/theme/template/js/jquery.fancybox.js"></script>
        <script src="/theme/template/js/appear.js"></script>
        <script src="/theme/template/js/parallax.min.js"></script>
        <script src="/theme/template/js/tilt.jquery.min.js"></script>
        <script src="/theme/template/js/jquery.paroller.min.js"></script>
        <script src="/theme/template/js/owl.js"></script>
        <script src="/theme/template/js/wow.js"></script>
        <script src="/theme/template/js/nav-tool.js"></script>
        <script src="/theme/template/js/jquery-ui.js"></script>
        <script src="/theme/template/js/script.js"></script>
      </Head>
      {children}
    </div>
  );
}
