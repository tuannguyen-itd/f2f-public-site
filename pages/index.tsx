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
        <div>
          {/* Banner Section */}
          <section className="banner-section">
            <div className="auto-container">
              <div className="pattern-layer-six" style={{ backgroundImage: 'url(/theme/template/images/main-slider/pattern-4.png)' }} />
              <div className="pattern-layer-seven" style={{ backgroundImage: 'url(/theme/template/images/main-slider/pattern-5.png)' }} />
              <div className="pattern-layer-eight" style={{ backgroundImage: 'url(/theme/template/images/main-slider/icon-2.png)' }} />
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="pattern-layer-one" style={{ backgroundImage: 'url(/theme/template/images/main-slider/pattern-1.png)' }} />
                    <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/main-slider/pattern-2.png)' }} />
                    <div className="pattern-layer-three" style={{ backgroundImage: 'url(/theme/template/images/main-slider/icon-1.png)' }} />
                    <div className="pattern-layer-four" style={{ backgroundImage: 'url(/theme/template/images/main-slider/pattern-3.png)' }} />
                    <div className="pattern-layer-five" style={{ backgroundImage: 'url(/theme/template/images/main-slider/icon-2.png)' }} />
                    <div className="image">
                      <img src="/theme/template/images/main-slider/image-1.png" alt="" />
                    </div>
                    <div className="image-two">
                      <img src="/theme/template/images/main-slider/image-4.png" alt="" />
                    </div>
                    <div className="image-content" style={{ backgroundImage: 'url(/theme/template/images/main-slider/pattern-6.png)' }}>
                      <p>87% of people <br /> learning</p>
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="title">Learn the latest skills</div>
                    <h1>Build skills with <br /> courses flexible online <br /> courses</h1>
                    <div className="btns-box">
                      <a href="about.html" className="theme-btn btn-style-one"><span className="txt">Join For free</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Banner Section */}
          {/* Instructor Section */}
          <section className="instructor-section">
            <div className="background-layer" style={{ backgroundImage: 'url(/theme/template/images/background/1.png)' }} />
            <div className="background-layer-one" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-1.png)' }} />
            <div className="background-layer-two" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-2.png)' }} />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Blocks Column */}
                <div className="blocks-column col-lg-8 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="row clearfix">
                      {/* Service Block */}
                      <div className="service-block col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div className="border-layer" />
                          <div className="icon-box">
                            <div className="icon flaticon-verify" />
                          </div>
                          <h4><a href="course-detail.html">Trusted content</a></h4>
                          <div className="text">Online learning is as easy and natural as chatting with a group of friends.</div>
                        </div>
                      </div>
                      {/* Service Block */}
                      <div className="service-block col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                          <div className="border-layer" />
                          <div className="icon-box">
                            <div className="icon flaticon-heart-box" />
                          </div>
                          <h4><a href="course-detail.html">Flexible courses</a></h4>
                          <div className="text">We provide online learning solutions for secondary education, from structured content to courses fully taught </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor Column */}
                <div className="instructor-column col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <h4>Become an instructor</h4>
                    <p>Top instructors from around the world teach millions of students  Duis aute irure dolor in reprehenderit in </p>
                    <p>voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                    <a className="click-here" href="membership.html">Click here for apply</a>
                    <div className="image titlt" data-tilt data-tilt-max={4}>
                      <img src="/theme/template/images/resource/instructor.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Instructor Section */}
          {/* Benefit Section */}
          <section className="benefit-section">
            <div className="background-layer-one" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-5.png)' }} />
            <div className="background-layer-two" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-6.png)' }} />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Images Column */}
                <div className="images-column col-lg-7 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="pattern-layer" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-3.png)' }} />
                    <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-4.png)' }} />
                    <div className="color-layer" />
                    <div className="image">
                      <img src="/theme/template/images/resource/benefit-1.jpg" alt="" />
                    </div>
                    <div className="image-two">
                      <img src="/theme/template/images/resource/benefit-3.jpg" alt="" />
                    </div>
                    <div className="image-three">
                      <img src="/theme/template/images/resource/benefit-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Learn anything</div>
                      <h2>Benefit from our <br /> online learning expertise <br /> Earn professional </h2>
                    </div>
                    <ul className="list-style-one">
                      <li><span className="icon flaticon-double-check" /><strong>Online degrees</strong>Vendors, suppliers and companies with online access to your technology can be your weakest link</li>
                      <li><span className="icon flaticon-double-check" /><strong>Short courses</strong>Vendors, suppliers and companies with online access to your technology can be your weakest link</li>
                      <li><span className="icon flaticon-double-check" /><strong>Learn with experts</strong>Vendors, suppliers and companies with online access to your technology can be your weakest link</li>
                    </ul>
                    <div className="btn-box">
                      <a href="about.html" className="theme-btn btn-style-two"><span className="txt">Join For free</span></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Lower Text */}
              <div className="lower-text">
                <p>Lebari is built for people like you. With useful features, your dream and idea can <br /> become a reality. Lebari helps you to achieve big things!</p>
              </div>
            </div>
          </section>
          {/* End Benefit Section */}
          {/* Feature Section */}
          <section className="feature-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-7.png)' }} />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-7 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Explore featured courses</div>
                      <h2>Fundamentals of Digital <br /> Health in Hospitals National <br /> University</h2>
                      <div className="text">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod but laboris incididunt ut labore et dolore magna <br /> aliqua.sed do eiusmod but laboris incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="btn-box">
                      <a href="about.html" className="theme-btn btn-style-two"><span className="txt">Short courses</span></a>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="color-layer" />
                    <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <img src="/theme/template/images/resource/feature.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="content">
                          <h2>How a degree on <br /> FutureLearn <br /> works</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod but laboris incididunt ut labore et dolore magna </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                          <a href="#" className="learn">Learn 3 Class</a>
                        </div>
                      </div>
                    </div>
                    <div className="feature-icon wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <img src="/theme/template/images/resource/feature-icon.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Benefit Section */}
          {/* Courses Section */}
          <section className="courses-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-2.png)' }} />
            <div className="circle-one paroller" data-paroller-factor="-0.20" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
            <div className="circle-two paroller" data-paroller-factor="0.20" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
            <div className="auto-container">
              <div className="sec-title centered">
                <h2>You can learn anything, Explore <br /> featured courses</h2>
                <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur Duis aute irure dolor in reprehenderit in</div>
              </div>
              <div className="row clearfix">
                {/* Course Column */}
                <div className="course-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="image">
                      <a href="course-detail.html"><img src="/theme/template/images/resource/course-1.jpg" alt="" /></a>
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
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="clearfix">
                        <div className="pull-left">
                          <div className="hovers">11.5 total hours . All Levels</div>
                        </div>
                        <div className="pull-right">
                          <a href="course-detail.html" className="enroll-now">ENROL NOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Course Column */}
                <div className="course-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="image">
                      <a href="course-detail.html"><img src="/theme/template/images/resource/course-2.jpg" alt="" /></a>
                    </div>
                    <div className="lower-content">
                      <h4><a href="course-detail.html">Programming for Everybody Getting Started with Python</a></h4>
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
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="clearfix">
                        <div className="pull-left">
                          <div className="hovers">11.5 total hours . All Levels</div>
                        </div>
                        <div className="pull-right">
                          <a href="course-detail.html" className="enroll-now">ENROL NOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Course Column */}
                <div className="course-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="image">
                      <a href="course-detail.html"><img src="/theme/template/images/resource/course-3.jpg" alt="" /></a>
                    </div>
                    <div className="lower-content">
                      <h4><a href="course-detail.html">Introduction to Forensic Science</a></h4>
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
                      <div className="price">$12 <span>$100.99</span></div>
                      <div className="clearfix">
                        <div className="pull-left">
                          <div className="hovers">11.5 total hours . All Levels</div>
                        </div>
                        <div className="pull-right">
                          <a href="course-detail.html" className="enroll-now">ENROL NOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Courses Section */}
          {/* Career Section */}
          <section className="career-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title">
                <h2>Change careers courses <br /> Thinking about a career change?</h2>
              </div>
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt data-tilt-max={4}>
                      <img src="/theme/template/images/resource/career.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-7 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h5>The International Admissions Bulletin</h5>
                    <div className="text">
                      <p>Ut enim ad minim veniam aliquip amet, nostrud exercitation ullamco. Pharetra massaultricies mi quis hendrerit. Elit eget gravida cum sociis.Ut enim ad minim veniam aliquip amet, </p>
                      <p>nostrud exercitation ullamco. Pharetra massaultricies mi quis hendrerit. Elit eget gravida cum sociis.</p>
                    </div>
                    <a href="about.html" className="theme-btn btn-style-three">Read it now <span className="fa fa-caret-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Career Section */}
          {/* Skill Section */}
          <section className="skill-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-8.png)' }} />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Skill Column */}
                <div className="skill-column col-lg-7 col-md-12 col-sm-12">
                  <div className="inner-column">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <div className="title">Our Status valu</div>
                      <h2>Differentiate your classroom <br /> What makes us special?</h2>
                      <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                    </div>
                    {/* Skills */}
                    <div className="skills">
                      {/* Skill Item */}
                      <div className="skill-item">
                        <div className="skill-header clearfix">
                          <div className="skill-title">Joyful</div>
                          <div className="skill-percentage">
                            <div className="count-box">
                              <span className="count-text" data-speed={2000} data-stop={90}>0</span>%
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner"><div className="bar progress-line" data-width={90} /></div>
                        </div>
                      </div>
                      {/* Skill Item */}
                      <div className="skill-item">
                        <div className="skill-header clearfix">
                          <div className="skill-title">Case Study success </div>
                          <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed={2000} data-stop={95}>0</span>%</div></div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner"><div className="bar progress-line" data-width={95} /></div>
                        </div>
                      </div>
                      {/* Skill Item */}
                      <div className="skill-item">
                        <div className="skill-header clearfix">
                          <div className="skill-title">Engaging</div>
                          <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed={2000} data-stop={75}>0</span>%</div></div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner"><div className="bar progress-line" data-width={75} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="circle-one" />
                    <div className="circle-two" />
                    <div className="image titlt" data-tilt data-tilt-max={4}>
                      <img src="/theme/template/images/resource/skill.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Skill Section */}
          {/* Testimonial Section */}
          <section className="testimonial-section">
            <div className="circle-one paroller" data-paroller-factor="-0.20" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
            <div className="circle-two paroller" data-paroller-factor="0.20" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
            <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-10.png)' }} />
            <div className="auto-container">
              <div className="inner-container">
                <div className="pattern-layer" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-9.png)' }} />
                {/* Sec Title */}
                <div className="sec-title centered">
                  <div className="title">Testimonial</div>
                  <h2>Words From Customers</h2>
                  <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure dolor in reprehenderit in</div>
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme">
                  {/* Testimonial Block */}
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                      <div className="author-info">
                        <div className="info-inner">
                          <div className="author-image">
                            <img src="/theme/template/images/resource/author-1.jpg" alt="" />
                          </div>
                          <h6>Mahfuz Riad</h6>
                          <div className="designation">Online Teacher</div>
                        </div>
                      </div>
                      <div className="quote-icon flaticon-quote-2" />
                    </div>
                  </div>
                  {/* Testimonial Block */}
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                      <div className="author-info">
                        <div className="info-inner">
                          <div className="author-image">
                            <img src="/theme/template/images/resource/author-1.jpg" alt="" />
                          </div>
                          <h6>Mahfuz Riad</h6>
                          <div className="designation">Online Teacher</div>
                        </div>
                      </div>
                      <div className="quote-icon flaticon-quote-2" />
                    </div>
                  </div>
                  {/* Testimonial Block */}
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                      <div className="author-info">
                        <div className="info-inner">
                          <div className="author-image">
                            <img src="/theme/template/images/resource/author-1.jpg" alt="" />
                          </div>
                          <h6>Mahfuz Riad</h6>
                          <div className="designation">Online Teacher</div>
                        </div>
                      </div>
                      <div className="quote-icon flaticon-quote-2" />
                    </div>
                  </div>
                  {/* Testimonial Block */}
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                      <div className="author-info">
                        <div className="info-inner">
                          <div className="author-image">
                            <img src="/theme/template/images/resource/author-1.jpg" alt="" />
                          </div>
                          <h6>Mahfuz Riad</h6>
                          <div className="designation">Online Teacher</div>
                        </div>
                      </div>
                      <div className="quote-icon flaticon-quote-2" />
                    </div>
                  </div>
                  {/* Testimonial Block */}
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                      <div className="author-info">
                        <div className="info-inner">
                          <div className="author-image">
                            <img src="/theme/template/images/resource/author-1.jpg" alt="" />
                          </div>
                          <h6>Mahfuz Riad</h6>
                          <div className="designation">Online Teacher</div>
                        </div>
                      </div>
                      <div className="quote-icon flaticon-quote-2" />
                    </div>
                  </div>
                  {/* Testimonial Block */}
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                      <div className="author-info">
                        <div className="info-inner">
                          <div className="author-image">
                            <img src="/theme/template/images/resource/author-1.jpg" alt="" />
                          </div>
                          <h6>Mahfuz Riad</h6>
                          <div className="designation">Online Teacher</div>
                        </div>
                      </div>
                      <div className="quote-icon flaticon-quote-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Testimonial Section */}
          {/* News Section */}
          <section className="news-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(/theme/template/images/background/pattern-11.png)' }} />
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Our Blogs</div>
                <h2>Latest articles &amp; news</h2>
                <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure dolor in reprehenderit in</div>
              </div>
              <div className="inner-container">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-1.png)' }} />
                <div className="icon-layer-two" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-2.png)' }} />
                <div className="icon-layer-three" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-2.png)' }} />
                <div className="row clearfix">
                  {/* News Block */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="image">
                        <a href="#"><img src="/theme/template/images/resource/news-1.jpg" alt="" /></a>
                      </div>
                      <div className="lower-content">
                        <div className="border-layer" />
                        <ul className="post-info">
                          <li>Technology</li>
                          <li>Updated  Sep 26, 2020</li>
                        </ul>
                        <h4><a href="#">All The Security &amp; Privacy <br /> Updates From Amazon’s</a></h4>
                        <a href="#" className="more">More <span className="fa fa-angle-double-right" /></a>
                      </div>
                    </div>
                  </div>
                  {/* News Block */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="image">
                        <a href="#"><img src="/theme/template/images/resource/news-2.jpg" alt="" /></a>
                      </div>
                      <div className="lower-content">
                        <div className="border-layer" />
                        <ul className="post-info">
                          <li>Education</li>
                          <li>Updated  Sep 26, 2020</li>
                        </ul>
                        <h4><a href="#">All The Security &amp; Privacy Updates From Amazon’s</a></h4>
                        <a href="#" className="more">More <span className="fa fa-angle-double-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End News Section */}
          {/* Clients Section */}
          <section className="clients-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <h2>Key supporters</h2>
                <div className="text">These leading universities are currently offering online degree <br /> courses on FutureLearn:</div>
              </div>
              <div className="sponsors-outer">
                {/*Sponsors Carousel*/}
                <ul className="sponsors-carousel owl-carousel owl-theme">
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/1.png" alt="" /></a></figure></li>
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/2.png" alt="" /></a></figure></li>
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/3.png" alt="" /></a></figure></li>
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/4.png" alt="" /></a></figure></li>
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/5.png" alt="" /></a></figure></li>
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/1.png" alt="" /></a></figure></li>
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/2.png" alt="" /></a></figure></li>
                  <li className="slide-item"><figure className="image-box"><a href="#"><img src="/theme/template/images/clients/3.png" alt="" /></a></figure></li>
                </ul>
              </div>
            </div>
          </section>
          {/* End Clients Section */}
        </div>
      </div>
    </Layout>
  );
}
