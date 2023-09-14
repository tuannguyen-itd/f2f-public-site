import React from 'react';
import Link from 'next/link';

export default function Header() {
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
            <div className="mobile-nav-toggler"><span className="icon flaticon-menu" /></div>
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
                    <Link href={'/rooms'} as={'/rooms'}><a ><span>ROOMS </span></a></Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Search */}
              <div className="search-box">
                <form method="post" action="contact.html">
                  <div className="form-group">
                    <input type="search" name="search-field" placeholder="What do we want learn" required />
                    <button type="submit"><span className="icon fa fa-search" /></button>
                  </div>
                </form>
              </div>
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
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn"><span className="icon flaticon-multiply" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img className="logo" src="/logo.png" alt="" />
           </a>
          </div>
          <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
        </nav>
      </div>
    </header>
  );
}
