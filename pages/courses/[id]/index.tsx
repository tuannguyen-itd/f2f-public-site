import React from 'react';
import { courseService, ratingService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import Link from 'next/link';
import { formatDate } from '../../../config/constants';
import { formatCurrency } from '../../../shared/util/string-utils';
import { CourseSlider } from '@components/course-carousel';

declare type CourseProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const course = await courseService.getEntity(id);
  const suggests = await courseService.getSuggestCourses(id);
  const rating = await ratingService.getRatingByCourse(id);
  const ratingAVG = await ratingService.getRatingByCourseAVG(id);
  if (course === null && suggests === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }
  return {
    props: { course, rating, ratingAVG, suggests },
  };
};

function Course({ course, errorCode, rating, ratingAVG, suggests }: CourseProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
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
                <li><a>Home</a></li>
              </Link>
              <Link href="/courses" as={'/courses'}>
              <li><a>Courses</a></li>
              </Link>
              <li>{course?.name}</li>
            </ul>
            <div className="content-box">
              <h1 className="text-dark box-cource-name"><strong>{course?.name}</strong></h1>
              <div className="box-descrip">
                <ul className="course-info">
                  <li><span className="icon fa fa-clock-o mr-2" />Last Update : {formatDate(course?.date)}</li>
                  <li><span className="icon fa fa-language mr-2" />English</li>
                  <li><span className="icon fa fa-user mr-2" />{course?.learners?.length}/{course?.amount} học viên</li>
                </ul>
                {course && course.status && (
                  <div>
                    Trạng thái:{' '}
                    <span className={course.status === 'CLOSE' ? 'text-danger' : 'text-success'}>
                      {course.status}
                    </span>
                  </div>
                )}
              </div>
              {course?.priceCourse?.salePrice > 0 ? (
                <span>
                  Giá: {formatCurrency(course?.priceCourse?.salePrice)}
                </span>
              ) : (
                <span>
                  Giá: {formatCurrency(course?.priceCourse?.basePrice)}
                </span>
              )}
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
                  <span dangerouslySetInnerHTML={{ __html: course.description }}/>
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
                  <div>
                    <h2 className="detail-course text-dark">Các Lớp học liên quan</h2>
                    <CourseSlider suggests={suggests?.data} />
                  </div>
                  <h5>Yêu cầu</h5>
                  <ul className="learn-list-two">
                    <li>Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada Cum sociis natoque penatibus et magnis </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                  </ul>
                  {rating.length > 0 ? (
                    <div className="comments-area mt-5">
                      <div className="group-title d-flex align-items-center">
                        <h4 className="text-dark">Đánh giá lớp học</h4>
                        <div className="total-star ml-4">
                          {ratingAVG.ratingCourseAvg >= 0 ? (
                            <>
                              <div className="rating text-warning">
                                <span className={`fa ${ratingAVG.ratingCourseAvg >= 0.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${ratingAVG.ratingCourseAvg >= 1.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${ratingAVG.ratingCourseAvg >= 2.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${ratingAVG.ratingCourseAvg >= 3.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${ratingAVG.ratingCourseAvg >= 4.5 ? 'fa-star' : 'fa-star-o'}`} />
                              </div>
                              ({ratingAVG.ratingCourseCount})
                            </>
                          ) : ''}
                        </div>
                      </div>

                      <div className="comment-box mt-3">
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
                  <h5 className="mt-0 d-flex justify-content-center">Thông Tin Gia Sư</h5>
                  {course?.bookings[0]?.tutor ?
                    <>
                      <div className="image w-100 d-flex align-items-center justify-content-center mt-3">
                        <Link href="/" as={'/'}>
                          <a>
                            {course?.bookings[0]?.tutor?.userInfo?.avatar ? (
                              <img src={`data:${course?.bookings[0]?.tutor?.userInfo?.avatarContentType};base64,${course?.bookings[0]?.tutor?.userInfo?.avatar}`} alt="Thông tin liên hệ"
                                   style={{ width: '150px' }}/>
                            ) : <img src="/theme/template/images/img-logo-default.png"/>}
                          </a>
                        </Link>
                      </div>
                      <h5 className="text-center mt-4 mb-1">{course?.bookings[0]?.tutor?.userInfo?.user?.firstName}&nbsp;{course?.bookings[0]?.tutor?.userInfo?.user?.lastName}</h5>
                        {ratingAVG.ratingTutorCourseAvg >= 0 ? (
                          <div className="d-flex justify-content-center align-items-center mb-2">
                            <span className="text-dark">Đánh Giá:</span>
                            <div className="rating text-warning ml-2">
                              <span className={`fa ${ratingAVG.ratingTutorCourseAvg >= 0.5 ? 'fa-star' : 'fa-star-o'}`} />
                              <span className={`fa ${ratingAVG.ratingTutorCourseAvg >= 1.5 ? 'fa-star' : 'fa-star-o'}`} />
                              <span className={`fa ${ratingAVG.ratingTutorCourseAvg >= 2.5 ? 'fa-star' : 'fa-star-o'}`} />
                              <span className={`fa ${ratingAVG.ratingTutorCourseAvg >= 3.5 ? 'fa-star' : 'fa-star-o'}`} />
                              <span className={`fa ${ratingAVG.ratingTutorCourseAvg >= 4.5 ? 'fa-star' : 'fa-star-o'}`} />
                            </div>
                            ({ratingAVG.ratingTutorCourseCount ? ratingAVG.ratingTutorCourseCount : 0})
                          </div>
                          )
                          : <h5 className="mb-2">Chưa có đánh giá nào</h5>
                        }
                      <ul className="level-list">
                        <li>Bằng cấp: <span>{course?.bookings[0]?.tutor?.degree}</span></li>
                        <li>Phone :<span>{course?.bookings[0]?.tutor?.userInfo?.phone}</span></li>
                        <li>Email :<span>{course?.bookings[0]?.tutor?.userInfo?.user?.email}</span></li>
                        <li>Ngày Sinh :<span>{course?.bookings[0]?.tutor?.userInfo?.dob}</span></li>
                      </ul>
                    </>
                    : <h4 className="mt-5 mb-5">Hiện Chưa Có Gia Sư</h4>
                  }
                  <div className="btns-box">
                    <a target="_blank" href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/course/${course?.id}`} className="theme-btn enrol-btn" >Tham gia lớp học</a>
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
