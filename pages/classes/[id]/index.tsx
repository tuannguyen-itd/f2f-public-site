import React from 'react';
import { classRoomService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import Link from "next/link";

declare type ClassRoomProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const classRoom = await classRoomService.getEntity(id);
  if (classRoom === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { classRoom },
  };
};

function ClassRoom({ classRoom, errorCode }: ClassRoomProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    // @ts-ignore
    <Layout>
      {/*<div className="container-fluid view-container">*/}
      {/*  {classRoom === null ? (*/}
      {/*    <span className="badge badge-danger">error while fetch classRooms!</span>*/}
      {/*  ) : (*/}
      {/*    <Row className="mt-4">*/}
      {/*      <Col md="8">*/}
      {/*        <h1 className="h2">{classRoom.name}</h1>*/}

      {/*        <Share url={`/class-rooms/${classRoom.id}`} title={classRoom.name}/>*/}
      {/*        <div className="mt-4" />*/}
      {/*        <Comment url={`/class-rooms/${classRoom.id}`} />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  )}*/}
      {/*</div>*/}
      <div>
        {/* Cource Detail Banner Section */}
        <section className="cource-detail-banner-section">
          <div className="pattern-layer-one" style={{backgroundImage: 'url(theme/template/images/icons/icon-5.png)'}} />
          <div className="pattern-layer-two" style={{backgroundImage: 'url(theme/template/images/icons/icon-6.png)'}} />
          <div className="pattern-layer-three" style={{backgroundImage: 'url(theme/template/images/icons/icon-4.png)'}} />
          <div className="pattern-layer-four" style={{backgroundImage: 'url(theme/template/images/icons/icon-8.png)'}} />
          <div className="auto-container">
            {/* Page Breadcrumb */}
            <ul className="page-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>Courses Single</li>
            </ul>
            <div className="content-box">
              <h2>{classRoom.name}</h2>
              <ul className="course-info">
                <li><span className="icon fa fa-clock-o" />Last Update : November 23, 2020</li>
                <li><span className="icon fa fa-language" />English</li>
                <li><span className="icon fa fa-user" />{classRoom.amount} học viên</li>
              </ul>
              <div className="development">Development courses</div>
              <div className="rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star-o" />
                <strong>4.9</strong>
                <i>(70 Review)</i>
              </div>
              <div className="hovers">11.5 total hours . All Levels</div>
              {/* Social Box */}
              <ul className="social-box">
                <span className="fa fa-share-alt" />
                <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter" /></li>
                <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p" /></li>
                <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f" /></li>
                <li className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble" /></li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Cource Detail Banner Section */}
        {/* Course Detail Section */}
        <section className="course-detail-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h5>Chi tiết lớp học</h5>
                  <p>{classRoom.description}</p>
                  <div className="learn-box">
                    <h5>Nội dung lớp học</h5>
                    <ul className="learn-list">
                      <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                      <li>Become job-ready by understanding how JavaScript really works behind the scenes</li>
                      <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                      <li>Modern tools for 2020 and beyond: NPM, Parcel, Babel and ES6 modules</li>
                      <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                      <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                    </ul>
                  </div>
                  <h5>Yêu cầu</h5>
                  <ul className="learn-list-two">
                    <li>Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada Cum sociis natoque penatibus et magnis </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                  </ul>
                  {classRoom.center ? (
                    <>
                      <h5>Trung tâm</h5>
                      <div className="author-box">
                        <div className="box-inner">
                          {classRoom.center && classRoom.center.logo ? (
                            <div className="image">
                              <img src={`data:${classRoom.center.logoContentType};base64,${classRoom.center.logo}`} />
                            </div>
                          ) : ''}
                          <h6>{classRoom.center.name}
                            <Link href="/centers/[id]" as={`/centers/${classRoom.centerId}`}>
                              <a className="icon fa fa-plus" />
                            </Link>
                          </h6>
                          <ul className="list">
                            <li><span className="icon fa fa-play-circle-o" />44 Course</li>
                            <li><span className="icon fa fa-star-o" />4.6 Instructor Rating</li>
                            <li><span className="icon fa fa-user" />6,073 Students</li>
                          </ul>
                          <div className="text">{classRoom.center.note}</div>
                        </div>
                      </div>
                    </>
                  ) : ''}
                  {classRoom.tutor ? (
                    <>
                      <h5>Gia sư</h5>
                      <div className="author-box">
                        <div className="box-inner">
                          {classRoom.tutor.userInfo.avatar ? (
                            <div className="image">
                              <img src={`data:${classRoom.tutor.userInfo.avatarContentType};base64,${classRoom.tutor.userInfo.avatar}`} />
                            </div>
                          ) : ''}
                          <h6>{classRoom.tutor.userInfo.user.firstName} {classRoom.tutor.userInfo.user.lastName}
                            <Link href="/tutors/[id]" as={`/tutors/${classRoom.tutorId}`}>
                              <a className="icon fa fa-plus" />
                            </Link>
                          </h6>
                          <ul className="list">
                            <li><span className="icon fa fa-play-circle-o" />44 Course</li>
                            <li><span className="icon fa fa-star-o" />4.6 Instructor Rating</li>
                            <li><span className="icon fa fa-user" />6,073 Students</li>
                          </ul>
                          <div className="text">{classRoom.tutor.userInfo.note}</div>
                        </div>
                      </div>
                    </>
                  ) : ''}
                  {/* Comment Area */}
                  <div className="comments-area">
                    <div className="group-title">
                      <h5>Course Review</h5>
                    </div>
                    <div className="comment-box">
                      {/* Comment */}
                      <div className="comment">
                        <div className="author-thumb"><img src="theme/template/images/resource/author-5.jpg" alt="" /></div>
                        <div className="comment-info clearfix">
                          <strong>Shopnil Mahadi</strong>
                          <div className="rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star-o" />
                          </div>
                          <div className="comment-time">3 weeks ago</div>
                          <ul className="like-dislike">
                            <li><a href="#" className="flaticon-like-1" /></li>
                            <li><a href="#" className="flaticon-dislike" /></li>
                          </ul>
                        </div>
                        <div className="text"> I have been identified as one of LebariTop Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.</div>
                      </div>
                      {/* Comment */}
                      <div className="comment">
                        <div className="author-thumb"><img src="theme/template/images/resource/author-6.jpg" alt="" /></div>
                        <div className="comment-info clearfix">
                          <strong>Shopnil Mahadi</strong>
                          <div className="rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star-o" />
                          </div>
                          <div className="comment-time">3 weeks ago</div>
                          <ul className="like-dislike">
                            <li><a href="#" className="flaticon-like-1" /></li>
                            <li><a href="#" className="flaticon-dislike" /></li>
                          </ul>
                        </div>
                        <div className="text"> I have been identified as one of LebariTop Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.</div>
                      </div>
                      {/* Comment */}
                      <div className="comment">
                        <div className="author-thumb"><img src="theme/template/images/resource/author-7.jpg" alt="" /></div>
                        <div className="comment-info clearfix">
                          <strong>Shopnil Mahadi</strong>
                          <div className="rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star-o" />
                          </div>
                          <div className="comment-time">3 weeks ago</div>
                          <ul className="like-dislike">
                            <li><a href="#" className="flaticon-like-1" /></li>
                            <li><a href="#" className="flaticon-dislike" /></li>
                          </ul>
                        </div>
                        <div className="text"> I have been identified as one of LebariTop Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.</div>
                      </div>
                    </div>
                  </div>
                  {/* End Comment Area */}
                  <div className="comment-form">
                    <div className="group-title"><h5>Leave A Comment</h5></div>
                    {/*Comment Form*/}
                    <form method="post" action="blog.html">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="username" placeholder="Full Name" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input type="text" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea className="darma" name="message" placeholder="Your Message" defaultValue={""} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button className="theme-btn btn-style-five" type="submit" name="submit-form">Write A Review</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Info Column */}
              <div className="info-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h5>Khóa học này bao gồm:</h5>
                  <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered </div>
                  <ul className="level-list">
                    <li>Level :<span>Beginner</span></li>
                    <li>Topic :<span>Java Script</span></li>
                    <li>Class :<span>32 articles</span></li>
                    <li>Access :<span>Mobile and TV</span></li>
                  </ul>
                  <h5>Bao gồm khác:</h5>
                  <ul className="level-list-two">
                    <li>Full lifetime access</li>
                    <li>19 downloadable resources</li>
                    <li>Certificate of completion</li>
                  </ul>
                  <div className="btns-box">
                    <a href="#" className="theme-btn enrol-btn">Tham gia lớp học</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Course Detail Section */}
      </div>
    </Layout>
  );
}

export default ClassRoom;
