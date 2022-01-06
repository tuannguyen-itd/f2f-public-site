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
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className="dropdown has-mega-menu">
                    <Link href={'/courses'}><a href="/courses"><span>Khóa học <i className="fa fa-arrow-down" /></span></a></Link>
                    <div className="mega-menu">
                      {/* Upper Box */}
                      <div className="upper-box">
                        <div className="page-links-box">
                          <a href="course.html" className="link"><span className="icon flaticon-bullhorn" />Marketing</a>
                          <a href="course-2.html" className="link"><span className="icon flaticon-cyclist" />Lifestyle</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-bar-chart" />Business</a>
                          <a href="course-4.html" className="link"><span className="icon flaticon-software" />Software</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-atom" />Science</a>
                          <a href="course.html" className="link"><span className="icon flaticon-webpage" />IT Management</a>
                          <a href="course-2.html" className="link"><span className="icon flaticon-language" />Language</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-team" />Human Resources</a>
                          <a href="course-4.html" className="link"><span className="icon flaticon-healthcare" />Health Care</a>
                        </div>
                      </div>
                      {/* Lower Box */}
                      <div className="lower-box">
                        <h3>Become an Instructor</h3>
                        <div className="text">Top instructors from around the Neque convallis a cras semper auctor. <br /> Libero id faucibus nisl tincidunt egetnvallis </div>
                        <div className="btn-box">
                          <a href="#" className="theme-btn btn-style-five">Start teaching today</a>
                        </div>
                        <div className="side-icon">
                          <img src="/theme/template/images/resource/mega-menu-icon.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown has-mega-menu">
                    <Link href={'/centers'}><a href="/centers"><span>Trung tâm <i className="fa fa-arrow-down" /></span></a></Link>
                    <div className="mega-menu">
                      {/* Upper Box */}
                      <div className="upper-box">
                        <div className="page-links-box">
                          <a href="course.html" className="link"><span className="icon flaticon-bullhorn" />Marketing</a>
                          <a href="course-2.html" className="link"><span className="icon flaticon-cyclist" />Lifestyle</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-bar-chart" />Business</a>
                          <a href="course-4.html" className="link"><span className="icon flaticon-software" />Software</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-atom" />Science</a>
                          <a href="course.html" className="link"><span className="icon flaticon-webpage" />IT Management</a>
                          <a href="course-2.html" className="link"><span className="icon flaticon-language" />Language</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-team" />Human Resources</a>
                          <a href="course-4.html" className="link"><span className="icon flaticon-healthcare" />Health Care</a>
                        </div>
                      </div>
                      {/* Lower Box */}
                      <div className="lower-box">
                        <h3>Become an Instructor</h3>
                        <div className="text">Top instructors from around the Neque convallis a cras semper auctor. <br /> Libero id faucibus nisl tincidunt egetnvallis </div>
                        <div className="btn-box">
                          <a href="#" className="theme-btn btn-style-five">Start teaching today</a>
                        </div>
                        <div className="side-icon">
                          <img src="/theme/template/images/resource/mega-menu-icon.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown has-mega-menu">
                    <Link href={'/tutors'}><a href="/tutors"><span>Gia sư <i className="fa fa-arrow-down" /></span></a></Link>
                    <div className="mega-menu">
                      {/* Upper Box */}
                      <div className="upper-box">
                        <div className="page-links-box">
                          <a href="course.html" className="link"><span className="icon flaticon-bullhorn" />Marketing</a>
                          <a href="course-2.html" className="link"><span className="icon flaticon-cyclist" />Lifestyle</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-bar-chart" />Business</a>
                          <a href="course-4.html" className="link"><span className="icon flaticon-software" />Software</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-atom" />Science</a>
                          <a href="course.html" className="link"><span className="icon flaticon-webpage" />IT Management</a>
                          <a href="course-2.html" className="link"><span className="icon flaticon-language" />Language</a>
                          <a href="course-3.html" className="link"><span className="icon flaticon-team" />Human Resources</a>
                          <a href="course-4.html" className="link"><span className="icon flaticon-healthcare" />Health Care</a>
                        </div>
                      </div>
                      {/* Lower Box */}
                      <div className="lower-box">
                        <h3>Become an Instructor</h3>
                        <div className="text">Top instructors from around the Neque convallis a cras semper auctor. <br /> Libero id faucibus nisl tincidunt egetnvallis </div>
                        <div className="btn-box">
                          <a href="#" className="theme-btn btn-style-five">Start teaching today</a>
                        </div>
                        <div className="side-icon">
                          <img src="/theme/template/images/resource/mega-menu-icon.png" alt="" />
                        </div>
                      </div>
                    </div>
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
