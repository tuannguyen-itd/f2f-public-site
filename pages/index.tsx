import React from 'react';
import Layout from '@components/layout';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home(props) {
  const { menus } = props;

  return (
    <Layout>
      <div className="page-wrapper">
        {/* Main Header / Header Style Two */}
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
        {/* End Main Header */}
        {/* Sidebar Cart Item */}
        <div className="xs-sidebar-group info-group">
          <div className="xs-overlay xs-bg-black" />
          <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
              <div className="widget-heading">
                <a href="#" className="close-side-widget">
                  X
                </a>
              </div>
              <div className="sidebar-textwidget">
                {/* Sidebar Info Content */}
                <div className="sidebar-info-contents">
                  <div className="content-inner">
                    <div className="logo">
                      <a href="index.html"><img src="/theme/template/images/logo-2.png" alt="" /></a>
                    </div>
                    <div className="content-box">
                      <h2>About Us</h2>
                      <p className="text">The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                      <a href="#" className="theme-btn btn-style-two"><span className="txt">Consultation</span></a>
                    </div>
                    <div className="contact-info">
                      <h2>Contact Info</h2>
                      <ul className="list-style-two">
                        <li><span className="icon fa fa-location-arrow" />Chicago 12, Melborne City, USA</li>
                        <li><span className="icon fa fa-phone" />(111) 111-111-1111</li>
                        <li><span className="icon fa fa-envelope" />lebari@gmail.com</li>
                        <li><span className="icon fa fa-clock-o" />Week Days: 09.00 to 18.00 Sunday: Closed</li>
                      </ul>
                    </div>
                    {/* Social Box */}
                    <ul className="social-box">
                      <li className="facebook"><a href="#" className="fa fa-facebook-f" /></li>
                      <li className="twitter"><a href="#" className="fa fa-twitter" /></li>
                      <li className="linkedin"><a href="#" className="fa fa-linkedin" /></li>
                      <li className="instagram"><a href="#" className="fa fa-instagram" /></li>
                      <li className="youtube"><a href="#" className="fa fa-youtube" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END sidebar widget item */}
        {/* Banner Section Three */}
        <section className="banner-section-three style-two">
          <div className="pattern-layer-two" style={{backgroundImage: 'url(theme/template/images/background/pattern-21.png)'}} />
          <div className="auto-container">
            {/* Page Breadcrumb */}
            <ul className="page-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>Courses v1</li>
            </ul>
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="pattern-layer-one" style={{backgroundImage: 'url(theme/template/images/main-slider/pattern-1.png)'}} />
                  <div className="icon-layer" style={{backgroundImage: 'url(theme/template/images/icons/icon-2.png)'}} />
                  <div className="icon-layer-two" style={{backgroundImage: 'url(theme/template/images/icons/icon-5.png)'}} />
                  <h2> Explore <br /> Featured Courses</h2>
                </div>
              </div>
              {/* Images Column */}
              <div className="image-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="icon-layer-three" style={{backgroundImage: 'url(theme/template/images/icons/icon-3.png)'}} />
                  <div className="icon-layer-four" style={{backgroundImage: 'url(theme/template/images/icons/icon-2.png)'}} />
                  <div className="icon-layer-five" style={{backgroundImage: 'url(theme/template/images/icons/icon-4.png)'}} />
                  <div className="image">
                    <img src="/theme/template/images/resource/page-title-3.jpg" alt="" />
                  </div>
                  <div className="image-two">
                    <img src="/theme/template/images/resource/page-title-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Banner Section Three */}
        {/* Courses Page Section */}
        <section className="courses-page-section style-two">
          <div className="pattern-layer" style={{backgroundImage: 'url(theme/template/images/background/pattern-22.png)'}} />
          <div className="pattern-layer-two" style={{backgroundImage: 'url(theme/template/images/background/pattern-6.png)'}} />
          <div className="pattern-layer-three" style={{backgroundImage: 'url(theme/template/images/background/pattern-19.png)'}} />
          <div className="pattern-layer-four" style={{backgroundImage: 'url(theme/template/images/background/pattern-23.png)'}} />
          <div className="auto-container">
            {/* Filter Box */}
            <div className="filter-box">
              <div className="box-inner">
                <div className="clearfix">
                  <div className="pull-left clearfix">
                    <div className="dropdown-outer">
                      <div className="filter-dropdown">
                        <span className="icon flaticon-filter-filled-tool-symbol" /> Filter <span className="arrow fa fa-angle-down" />
                        {/* Filter Categories */}
                        <div className="filter-categories">
                          <div className="clearfix">
                            {/* Column */}
                            <div className="column">
                              <h6>Categories</h6>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-one" />
                                  <label htmlFor="radio-one">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Digital Marketing
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-two" />
                                  <label htmlFor="radio-two">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Business
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-three" />
                                  <label htmlFor="radio-three">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Social Media Marketing
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-four" />
                                  <label htmlFor="radio-four">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Design
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-five" />
                                  <label htmlFor="radio-five">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    User experience
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-six" />
                                  <label htmlFor="radio-six">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    User interface
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-seven" />
                                  <label htmlFor="radio-seven">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    IT &amp; Software Courses
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* Column */}
                            <div className="column">
                              <h6>Instructor</h6>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-eight" />
                                  <label htmlFor="radio-eight">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Mahfuz Riad (15)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-nine" />
                                  <label htmlFor="radio-nine">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Siful islam
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-ten" />
                                  <label htmlFor="radio-ten">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Foqrul Munna (12)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-eleven" />
                                  <label htmlFor="radio-eleven">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Mahadi Shopnil (16)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twelve" />
                                  <label htmlFor="radio-twelve">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Instructor (8)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-thirteen" />
                                  <label htmlFor="radio-thirteen">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Alex Saim (04)
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* Column */}
                            <div className="column">
                              <h6>Sort by</h6>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-fourteen" />
                                  <label htmlFor="radio-fourteen">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    New Courses
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-fifteen" />
                                  <label htmlFor="radio-fifteen">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Old Courses
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-sixteen" />
                                  <label htmlFor="radio-sixteen">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Course 2019
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-seventeen" />
                                  <label htmlFor="radio-seventeen">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Course 2018
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-eighteen" />
                                  <label htmlFor="radio-eighteen">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Course 2017
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* Column */}
                            <div className="column">
                              <h6>Language</h6>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-nineteen" />
                                  <label htmlFor="radio-nineteen">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    English (10)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twenty" />
                                  <label htmlFor="radio-twenty">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    French (4)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentyone" />
                                  <label htmlFor="radio-twentyone">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    German (5)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentytwo" />
                                  <label htmlFor="radio-twentytwo">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Japanese (4)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentythree" />
                                  <label htmlFor="radio-twentythree">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Russian (1)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentyfour" />
                                  <label htmlFor="radio-twentyfour">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Spanish (6)
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* Column */}
                            <div className="column">
                              <h6>Price</h6>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentyfive" />
                                  <label htmlFor="radio-twentyfive">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    All (90)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentysix" />
                                  <label htmlFor="radio-twentysix">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Paid (70)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentyseven" />
                                  <label htmlFor="radio-twentyseven">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Free (12)
                                  </label>
                                </div>
                              </div>
                              <br />
                              <h6>Level</h6>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentyeight" />
                                  <label htmlFor="radio-twentyeight">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Beginner (21)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-twentynine" />
                                  <label htmlFor="radio-twentynine">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Intermediate (10)
                                  </label>
                                </div>
                              </div>
                              {/* Form Group */}
                              <div className="form-group">
                                <div className="select-box">
                                  <input type="checkbox" name="payment-group" id="radio-thirty" />
                                  <label htmlFor="radio-thirty">
                                    <span className="default-check" />
                                    <span className="check-icon fa fa-check" />
                                    Expert (4)
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="view-list">
                      <li className="active"><a href="course.html"><span className="icon flaticon-grid" /></a></li>
                      <li><a href="course-4.html"><span className="icon flaticon-list-1" /></a></li>
                    </ul>
                  </div>
                  <div className="pull-right">
                    <div className="total-course">We found <span>39</span> courses available for you</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outer-container">
            <div className="row clearfix">
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-4.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Growth Mindsets for Teachers and Learners</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-5.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Confidence and Develop Confident Bo</a></h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-6.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Introduction to Probability and Statistics</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-7.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">UX &amp; Web Design Master Course</a></h4>
                    <div className="uni-name">UX &amp; Web Design</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-14.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Diploma in Human Resources (HR)</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-15.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Diploma in Project Management - Revised 2017</a></h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-16.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Problem Solving and Critical Thinking Skills</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-17.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">ISO Environmental Management Systems </a></h4>
                    <div className="uni-name">UX &amp; Web Design</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-18.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Professional Bookkeeping and Accounting 2</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-19.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Accounting - Control and Monitoring of Cash</a></h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-20.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Accounting - Understanding Receivables and Payables</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-21.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Food Safety Training - Safe Practices and Procedures </a></h4>
                    <div className="uni-name">UX &amp; Web Design</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-14.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Diploma in Human Resources (HR)</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-15.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Diploma in Project Management - Revised 2017</a></h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-16.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">Problem Solving and Critical Thinking Skills</a></h4>
                    <div className="uni-name">University of Roehampton</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
              {/* Course Column */}
              <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="/theme/template/images/resource/course-17.jpg" alt="" /></a>
                    <div className="tag">ENROL NOW</div>
                  </div>
                  <div className="lower-content">
                    <h4><a href="course-detail.html">ISO Environmental Management Systems </a></h4>
                    <div className="uni-name">UX &amp; Web Design</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                  </div>
                  {/* Overlay Content Box */}
                  <div className="overlay-content-box">
                    <h4>Confidence and Develop Confident Bo</h4>
                    <div className="uni-name">Development courses</div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                      <strong>4.9</strong>
                      <i>(70 Review)</i>
                    </div>
                    <div className="clearfix">
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="text">There are many variations of Lorem Ipsum available, but the majority have suffered.</div>
                    <ul className="lists">
                      <li>The majority have suffered alteration</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et commodo ut,</li>
                      <li>The majority have suffered alteration in somePhasellus enim magna, varius et</li>
                    </ul>
                    <div className="btns-box">
                      <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                      <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                    </div>
                  </div>
                  {/* End Overlay Content Box */}
                </div>
              </div>
            </div>
            {/* Post Share Options */}
            <div className="styled-pagination text-center">
              <ul className="clearfix">
                <li><a href="#">01</a></li>
                <li><a href="#">02</a></li>
                <li className="active"><a href="#">03</a></li>
                <li><a href="#">04</a></li>
                <li><a href="#">05</a></li>
                <li className="next"><a href="#"><span className="fa fa-angle-double-right" /> </a></li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Courses Page Section */}
        {/* Main Footer */}
        <footer className="main-footer">
          <div className="circle-layer" />
          <div className="pattern-layer-one" style={{backgroundImage: 'url(theme/template/images/background/pattern-12.png)'}} />
          <div className="pattern-layer-two" style={{backgroundImage: 'url(theme/template/images/background/pattern-13.png)'}} />
          <div className="pattern-layer-three" style={{backgroundImage: 'url(theme/template/images/background/pattern-14.png)'}} />
          <div className="pattern-layer-four" style={{backgroundImage: 'url(theme/template/images/background/pattern-13.png)'}} />
          <div className="auto-container">
            {/*Widgets Section*/}
            <div className="widgets-section">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-column col-lg-5 col-md-12 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <a href="index.html"><img src="/theme/template/images/logo.png" alt="" /></a>
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
      </div>
    </Layout>
  );
}
