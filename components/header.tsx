import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="main-header">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="outer-container clearfix">
          <div className="pull-left logo-box">
            <div className="logo">
              <Link href={'/'}>
                <a href="/">
                  <img className="logo" src="/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler" onClick={handleMobileMenuToggle}>
              <span className="icon flaticon-menu" />
            </div>
            {/* Main Menu */}
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-header">
                {/* Toggle Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className="dropdown has-mega-menu">
                    <Link href={'/courses'}><a><span>COURSES<i className="fa fa-arrow-down" /></span></a></Link>
                  </li>
                  <li className="dropdown has-mega-menu">
                    <Link href={'/landlord'}><a><span>LANDLORDS<i className="fa fa-arrow-down" /></span></a></Link>
                  </li>
                  <li className="dropdown has-mega-menu">
                    <Link href={'/rooms'} as={'/rooms'}><a ><span>ROOMS<i className="fa fa-arrow-down" /></span></a></Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix  social-icon">
              {/* Social Box */}
              <ul className="social-box">
                <li className="instagram"><a target="_blank" href="http://instagram.com/" className="fa fa-instagram" /></li>
                <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f" /></li>
                <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter" /></li>
                <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu-popup shadow ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="box-menu-nav">
          <a href="/">
            <img className="menu-nav-img" src="/logo.png" alt="" />
          </a>
          <div className="close-btn-popup" onClick={handleMobileMenuToggle}>
            <span className="icon flaticon-multiply" />
          </div>
        </div>
        <nav className="menu-box">
          <div className="menu-link-page">
            <Link href={'/courses'}><a className="link-item"><span>COURSES</span></a></Link>
            <Link href={'/landlord'}><a className="link-item mt-2 mb-2"><span>LANDLORDS</span></a></Link>
            <Link href={'/rooms'} as={'/rooms'}><a className="link-item"><span>ROOMS</span></a></Link>
          </div>
        </nav>
        <div className="info-social">
          <ul className="social-item">
            <li className="instagram"><a target="_blank" href="http://instagram.com/" className="fa fa-instagram" /></li>
            <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f" /></li>
            <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter" /></li>
            <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p" /></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
