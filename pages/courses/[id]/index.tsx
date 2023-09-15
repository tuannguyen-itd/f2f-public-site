import React from 'react';
import { courseService, ratingService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import Link from 'next/link';
import RatingItem from '@components/rating-item';
import { formatDate } from '../../../config/constants';

declare type CourseProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const course = await courseService.getEntity(id);
  const rating = await ratingService.getRatingByCourse(id);
  if (course === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }
  return {
    props: { course, rating },
  };
};

function Course({ course, errorCode, rating }: CourseProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  console.log(rating);
  console.log(course);
  return (
    // @ts-ignore
    <Layout>
      <div>
        <section className="contact-banner-section">
            <div className="pattern-layer-one" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-5.png)' }} />
            <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-6.png)' }} />
            <div className="pattern-layer-three" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-4.png)' }} />
            <div className="pattern-layer-four" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-8.png)' }} />
          <div className="auto-container">
            <ul className="page-breadcrumb">
              <Link href="/" as={'/'}>
                <li><a >Home</a></li>
              </Link>
              <Link href="/courses" as={'/courses'}>
              <li><a>Courses</a></li>
              </Link>
              <li>{course.name}</li>
            </ul>
            <div className="content-box">
              <h1 className="text-dark box-cource-name"><strong>{course.name}</strong></h1>
              <div className="box-descrip">
                <ul className="course-info">
                  <li><span className="icon fa fa-clock-o mr-2" />Last Update : {formatDate(course.date)}</li>
                  <li><span className="icon fa fa-language mr-2" />English</li>
                  <li><span className="icon fa fa-user mr-2" />{course.amount} học viên</li>
                </ul>
                {course && course.status && (
                  <div>
                    Trạng thái:{' '}
                    <span className={course.status === 'CLOSE' ? 'text-danger' : 'text-success'}>
                      {course.status}
                    </span>
                  </div>
                )}
                <div className="development">Development courses</div>
                {/*{course.totalRate > 0 ? (*/}
                {/*  <div className="rating">*/}
                {/*    <span className={`fa ${course.averageRate > 0 ? 'fa-star' : 'fa-star-o'}`} />*/}
                {/*    <span className={`fa ${course.averageRate > 1.5 ? 'fa-star' : 'fa-star-o'}`} />*/}
                {/*    <span className={`fa ${course.averageRate > 2.5 ? 'fa-star' : 'fa-star-o'}`} />*/}
                {/*    <span className={`fa ${course.averageRate > 3.5 ? 'fa-star' : 'fa-star-o'}`} />*/}
                {/*    <span className={`fa ${course.averageRate > 4.5 ? 'fa-star' : 'fa-star-o'}`} />*/}
                {/*    <strong>{Number(course.averageRate).toFixed(1)}</strong>*/}
                {/*    <i>({course.totalRate} Đánh giá)</i>*/}
                {/*  </div>*/}
                {/*) : ''}*/}
                <div className="hovers">11.5 total hours . All Levels</div>
                {/* Social Box */}
              </div>
              <ul className="social-box d-flex ">
                <li className="twitter bg-primary"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter text-white" /></li>
                <li className="pinterest bg-danger"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p text-white" /></li>
                <li className="facebook bg-primary"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f text-white" /></li>
                <li className="dribbble custom-pink"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble text-white" /></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="course-detail-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2 className="detail-course text-dark">Chi tiết lớp học</h2>
                  <div className="py-4">
                    {course.image ? (
                      <img className="w-100" src={`data:${course.image_content_type};base64,${course.image}`} />

                    ) : (
                      <a><img src="/theme/template/images/resource/news-25.jpg" /></a>
                      )}
                  </div>
                  <p>{course.description}</p>
                  <div className="learn-box">
                    <h2>Nội dung lớp học</h2>
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
                  {course && course.roomTutorBooking && course.roomTutorBooking.centerRoom.photoCenterRooms &&
                  course.roomTutorBooking.centerRoom.photoCenterRooms.length > 0 ? (
                    <div className="mt-5">
                      <h5>Hình ảnh lớp học</h5>
                      <div className="row">
                        {course.roomTutorBooking.centerRoom.photoCenterRooms.map((photo, index) => (
                          <div className="col-lg-2 col-sm-3" key={index}>
                            <img src={`data:${photo.imageContentType};base64,${photo.image}`} alt=""/>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {course.center ? (
                    <div className="mt-5">
                      <h5>Trung tâm</h5>
                      <div className="author-box">
                        <div className="box-inner">
                          {course.center && course.center.logo ? (
                            <div className="image">
                              <img src={`data:${course.center.logoContentType};base64,${course.center.logo}`} />
                            </div>
                          ) : ''}
                          <h6>{course.center.name}
                            <Link href="/centers/[id]" as={`/centers/${course.centerId}`}>
                              <a className="icon fa fa-plus" />
                            </Link>
                          </h6>
                          <ul className="list">
                            <li><span className="icon fa fa-play-circle-o" />44 Course</li>
                            <li><span className="icon fa fa-star-o" />4.6 Instructor Rating</li>
                            <li><span className="icon fa fa-user" />6,073 Students</li>
                          </ul>
                          <div className="text">{course.center.note}</div>
                        </div>
                      </div>
                    </div>
                  ) : ''}
                  {course.tutor ? (
                    <div className="mt-5">
                      <h5>Gia sư</h5>
                      <div className="author-box">
                        <div className="box-inner">
                          {course.tutor.userInfo.avatar ? (
                            <div className="image">
                              <img src={`data:${course.tutor.userInfo.avatarContentType};base64,${course.tutor.userInfo.avatar}`} />
                            </div>
                          ) : ''}
                          <h6>{course.tutor.userInfo.user.firstName} {course.tutor.userInfo.user.lastName}
                            <Link href="/tutors/[id]" as={`/tutors/${course.tutorId}`}>
                              <a className="icon fa fa-plus" />
                            </Link>
                          </h6>
                          <ul className="list">
                            <li><span className="icon fa fa-play-circle-o" />44 Course</li>
                            <li><span className="icon fa fa-star-o" />4.6 Instructor Rating</li>
                            <li><span className="icon fa fa-user" />6,073 Students</li>
                          </ul>
                          <div className="text">{course.tutor.userInfo.note}</div>
                        </div>
                      </div>
                    </div>
                  ) : ''}
                  {rating.length > 0 ? (
                    <div className="comments-area mt-5">
                      <div className="group-title">
                        <h2>Đánh giá lớp học</h2>
                      </div>

                      <div className="comment-box">
                        {rating.map((item, index) => (
                          <div className="comment" key={index}>
                            <div className="author-thumb">
                              <img src={`data:${item.userInfo.avatarContentType};base64,${item.userInfo.avatar}`} alt=""/>
                            </div>
                            <div className="comment-info clearfix">
                              <strong>{`${item.userInfo.user.firstName} ${item.userInfo.user.lastName}`}</strong>
                              {item.rate >= 0 ? (
                                <div className="rating">
                                  <span className={`fa ${item.rate >= 0.5 ? 'fa-star' : 'fa-star-o'}`} />
                                  <span className={`fa ${item.rate >= 1.5 ? 'fa-star' : 'fa-star-o'}`} />
                                  <span className={`fa ${item.rate >= 2.5 ? 'fa-star' : 'fa-star-o'}`} />
                                  <span className={`fa ${item.rate >= 3.5 ? 'fa-star' : 'fa-star-o'}`} />
                                  <span className={`fa ${item.rate >= 4.5 ? 'fa-star' : 'fa-star-o'}`} />
                                </div>
                              ) : ''}
                            </div>
                            <div className="text">{item.comment}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : ''}
                </div>
              </div>
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
                    <a target="_blank" href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/course/${course.id}`} className="theme-btn enrol-btn" >Tham gia lớp học</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Course;
