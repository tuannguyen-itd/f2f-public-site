import React from 'react';
import Link from 'next/link';
import styles from '@styles/home.module.scss';

export default function Header() {
  return (
    // <header className="bg-light">
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <Link href={'/'}>
    //         <a className="blog-header-logo text-dark">
    //           <img src="/logo.png" alt="my image" className={styles.logo}/>
    //         </a>
    //       </Link>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
    //               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    //               aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"/>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //           <li className="nav-item active">
    //             <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
    //           </li>
    //           <li className="nav-item">
    //             <Link href={'/centers'}>
    //               <a className="nav-link">
    //                 Trung Tâm
    //               </a>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link href={'/classes'}>
    //               <a className="nav-link">
    //                 Lớp học
    //               </a>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link href={'/tutors'}>
    //               <a className="nav-link">
    //                 Giáo Viên
    //               </a>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header className="main-header header-style-two">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="outer-container clearfix">
          <div className="pull-left logo-box">
            <div className="logo"><a href="index.html"><img src="/theme/template/images/logo-2.png" alt="" /></a></div>
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
                  <li className="dropdown has-mega-menu"><a href="#"><span>Courses <i className="fa fa-arrow-down" /></span></a>
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
                  <li className="dropdown"><a href="#">Home</a>
                    <ul>
                      <li><a href="index.html">Home page 01</a></li>
                      <li><a href="index-2.html">Home page 02</a></li>
                      <li><a href="index-3.html">Home page 03</a></li>
                      <li><a href="index-4.html">Home page 04 <span className="new-page">New</span></a></li>
                      <li className="dropdown"><a href="#">Header styles</a>
                        <ul>
                          <li><a href="index.html">Header Style 01</a></li>
                          <li><a href="index-2.html">Header Style 02</a></li>
                          <li><a href="index-3.html">Header Style 03</a></li>
                          <li><a href="index-4.html">Header Style 04 <span className="new-page">New</span></a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="#">About</a>
                    <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="faq.html">Faq</a></li>
                      <li><a href="teacher.html">Teacher</a></li>
                      <li><a href="profile.html">User Profile</a></li>
                      <li><a href="membership.html">Membership</a></li>
                      <li className="dropdown"><a href="#">Events</a>
                        <ul>
                          <li><a href="event.html">Events</a></li>
                          <li><a href="event-detail.html">Events Detail</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="current dropdown"><a href="#">Courses</a>
                    <ul>
                      <li><a href="course.html">Courses</a></li>
                      <li><a href="course-2.html">Courses 02</a></li>
                      <li><a href="course-3.html">Courses 03</a></li>
                      <li><a href="course-4.html">Courses 04</a></li>
                      <li><a href="course-detail.html">Courses Detail</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="#">Blog</a>
                    <ul>
                      <li><a href="blog.html">Our Blog</a></li>
                      <li><a href="blog-list.html">Blog List</a></li>
                      <li><a href="blog-detail.html">Blog Detail</a></li>
                      <li><a href="not-found.html">Not Found</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="donation.html">Donation</a></li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Search */}
              <div className="search-box">
                <form method="post" action="contact.html">
                  <div className="form-group">
                    <input type="search" name="search-field" placeholder="Online course" required />
                    <button type="submit"><span className="icon fa fa-search" /></button>
                  </div>
                </form>
              </div>
              {/* Cart Box */}
              <div className="cart-box">
                <div className="dropdown">
                  <button className="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flaticon-shopping-bag-1" /><span className="total-cart">2</span></button>
                  <div className="dropdown-menu pull-right cart-panel" aria-labelledby="dropdownMenu1">
                    <div className="cart-product">
                      <div className="inner">
                        <div className="cross-icon"><span className="icon fa fa-remove" /></div>
                        <div className="image"><img src="/theme/template/images/resource/post-thumb-1.jpg" alt="" /></div>
                        <h3><a href="shop-single.html">Product 01</a></h3>
                        <div className="quantity-text">Quantity 1</div>
                        <div className="price">$99.00</div>
                      </div>
                    </div>
                    <div className="cart-product">
                      <div className="inner">
                        <div className="cross-icon"><span className="icon fa fa-remove" /></div>
                        <div className="image"><img src="/theme/template/images/resource/post-thumb-2.jpg" alt="" /></div>
                        <h3><a href="shop-single.html">Product 02</a></h3>
                        <div className="quantity-text">Quantity 1</div>
                        <div className="price">$99.00</div>
                      </div>
                    </div>
                    <div className="cart-total">Sub Total: <span>$198</span></div>
                    <ul className="btns-boxed">
                      <li><a href="shoping-cart.html">View Cart</a></li>
                      <li><a href="checkout.html">CheckOut</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Nav Btn */}
              <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-4" /></div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="auto-container clearfix">
          {/*Logo*/}
          <div className="logo pull-left">
            <a href="index.html"><img src="/theme/template/images/logo.png" alt="" /></a>
          </div>
          {/*Right Col*/}
          <div className="pull-right">
            {/* Main Menu */}
            <nav className="main-menu">
              {/*Keep This Empty / Menu will come through Javascript  */}
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
                  <li className="dropdown has-mega-menu"><a href="#"><span>Courses <i className="fa fa-arrow-down" /></span></a>
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
                          <img src="images/resource/mega-menu-icon.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div></li>
                  <li className="dropdown"><a href="#">Home</a>
                    <ul>
                      <li><a href="index.html">Home page 01</a></li>
                      <li><a href="index-2.html">Home page 02</a></li>
                      <li><a href="index-3.html">Home page 03</a></li>
                      <li><a href="index-4.html">Home page 04 <span className="new-page">New</span></a></li>
                      <li className="dropdown"><a href="#">Header styles</a>
                        <ul>
                          <li><a href="index.html">Header Style 01</a></li>
                          <li><a href="index-2.html">Header Style 02</a></li>
                          <li><a href="index-3.html">Header Style 03</a></li>
                          <li><a href="index-4.html">Header Style 04 <span className="new-page">New</span></a></li>
                        </ul>
                        <div className="dropdown-btn"><span className="fa fa-angle-down" /></div></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div></li>
                  <li className="dropdown"><a href="#">About</a>
                    <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="faq.html">Faq</a></li>
                      <li><a href="teacher.html">Teacher</a></li>
                      <li><a href="profile.html">User Profile</a></li>
                      <li><a href="membership.html">Membership</a></li>
                      <li className="dropdown"><a href="#">Events</a>
                        <ul>
                          <li><a href="event.html">Events</a></li>
                          <li><a href="event-detail.html">Events Detail</a></li>
                        </ul>
                        <div className="dropdown-btn"><span className="fa fa-angle-down" /></div></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div></li>
                  <li className="current dropdown"><a href="#">Courses</a>
                    <ul>
                      <li><a href="course.html">Courses</a></li>
                      <li><a href="course-2.html">Courses 02</a></li>
                      <li><a href="course-3.html">Courses 03</a></li>
                      <li><a href="course-4.html">Courses 04</a></li>
                      <li><a href="course-detail.html">Courses Detail</a></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div></li>
                  <li className="dropdown"><a href="#">Blog</a>
                    <ul>
                      <li><a href="blog.html">Our Blog</a></li>
                      <li><a href="blog-list.html">Blog List</a></li>
                      <li><a href="blog-detail.html">Blog Detail</a></li>
                      <li><a href="not-found.html">Not Found</a></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="donation.html">Donation</a></li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn"><span className="icon flaticon-multiply" /></div>
        <nav className="menu-box">
          <div className="nav-logo"><a href="index.html"><img src="/theme/template/images/logo.png" alt="" /></a></div>
          <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
        </nav>
      </div>{/* End Mobile Menu */}
    </header>
  );
}
