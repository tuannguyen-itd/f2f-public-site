import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from './header';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
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
      <Header />
      {children}
      <footer className="main-footer">
        <div className="circle-layer" />
        <div className="pattern-layer-one" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-12.png)' }} />
        <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-13.png)' }} />
        <div className="pattern-layer-three" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-14.png)' }} />
        <div className="pattern-layer-four" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-13.png)' }} />
        <div className="auto-container">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Footer Column */}
              <div className="footer-column col-lg-5 col-md-12 col-sm-12">
                <div className="footer-widget logo-widget">
                  <div className="logo">
                    <a href="index.html">
                      <img className="logo" src="/logo.png" alt="" />
                    </a>
                  </div>
                  <ul className="info-list">
                    <li>Tel:<a href="tel:+0845-371-02-02"> 0845 371 02 02</a></li>
                    <li>Email:<a href="mailto:info@yoursite.co.uk"> info@yoursite.co.uk</a></li>
                  </ul>
                  {/* Social Box */}
                  <ul className="social-box">
                    <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter" /></li>
                    <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p" /></li>
                    <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f" /></li>
                    <li className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble" /></li>
                  </ul>
                  <div className="text">Get started now and take advantage of <br /> our 30 day free trial today.</div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="footer-column col-lg-7 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/* Column */}
                  <div className="column col-lg-4 col-md-4 col-sm-12">
                    <h5>About</h5>
                    <ul className="list">
                      <li><a href="#">About</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Impact</a></li>
                      <li><a href="#">Our team</a></li>
                      <li><a href="#">Our interns</a></li>
                    </ul>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-4 col-md-4 col-sm-12">
                    <h5>Need some help?</h5>
                    <ul className="list">
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">Child safety</a></li>
                      <li><a href="#">Help Centre</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Academy</a></li>
                    </ul>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-4 col-md-4 col-sm-12">
                    <h5>Courses</h5>
                    <ul className="list">
                      <li><a href="#">Khan Kids app</a></li>
                      <li><a href="#">Science &amp; engineering</a></li>
                      <li><a href="#">Computing</a></li>
                      <li><a href="#">Arts &amp; humanities</a></li>
                      <li><a href="#">Economics &amp; finance</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Lower Box */}
          <div className="lower-box">
            <div className="row clearfix">
              <div className="col-lg-6 col-lg-6 col-sm-12">
                {/* Subscribe Form */}
                <div className="subscribe-form">
                  <h6>Newsletter</h6>
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Your email" required />
                      <button type="submit" className="submit-btn"><span className="icon flaticon-right-arrow-2" /></button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-lg-6 col-sm-12">
                <div className="text">Need to train your team? We offer flexible, cost-effective <br /> group memberships for your business, school,</div>
                <a href="#" className="singup">Free Singup</a>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="row clearfix">
              {/* Copyright Column */}
              <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
                <div className="copyright">Copyright 2020, All Right Reserved</div>
              </div>
              {/* Nav Column */}
              <div className="nav-column col-lg-6 col-md-12 col-sm-12">
                <ul>
                  <li><a href="about.html">SiteMap</a></li>
                  <li><a href="about.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
