import React, { useState } from 'react';
import { courseService, tutorService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import { CourseItem } from '@components/course-item';
import Map from '@components/map';
import { latLngDefault } from '../../../config/constants';

declare type TutorProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const menus = [];
  const tutor = await tutorService.getEntity(id);
  if (tutor === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  const coursesResponse = await courseService.getEntities(
    0, 99999, 'id', 'desc',
    { 'tutorId.equals': tutor.id },
  );
  return {
    props: { menus, tutor, coursesResponse },
  };
};

function Tutor({ menus, tutor, errorCode, coursesResponse }: TutorProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  const [location, setLocation] = useState({ lat: latLngDefault.lat, lng: latLngDefault.lng });
  const { data: courses } = coursesResponse;

  const onHandleCenterHover = (course) => {
    setLocation({ lat: course.roomTutorBooking.centerRoom.center.lat, lng: course.roomTutorBooking.centerRoom.center.lng });
  };

  return (
    // @ts-ignore
    <Layout menus={menus}>
      <section className="courses-page-section style-two overflow-auto">
        <section className="user-profile-section">
          <div className="pattern-layer-one" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-5.png)' }} />
          <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-6.png)' }} />
          <div className="pattern-layer-three" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-4.png)' }} />
          <div className="pattern-layer-four" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-8.png)' }} />
          <div className="auto-container">
            <ul className="page-breadcrumb">
              <li><a href="/">Trang chủ</a></li>
              <li>Hồ sơ gia sư</li>
            </ul>
            <div className="profile-box">
              <div className="box-inner">
                <div className="image">
                  <img src={`data:${tutor.userInfo.avatarContentType};base64,${tutor.userInfo.avatar}`} alt=""/>
                </div>
                <h4>{tutor.userInfo.user.firstName} {tutor.userInfo.user.lastName}</h4>
                <div className="text">{tutor.userInfo.note}</div>
                {tutor.totalRate > 0 ? (
                  <div className="rating">
                    <span className={`fa ${tutor.averageRate > 0 ? 'fa-star' : 'fa-star-o'}`} />
                    <span className={`fa ${tutor.averageRate > 1.5 ? 'fa-star' : 'fa-star-o'}`} />
                    <span className={`fa ${tutor.averageRate > 2.5 ? 'fa-star' : 'fa-star-o'}`} />
                    <span className={`fa ${tutor.averageRate > 3.5 ? 'fa-star' : 'fa-star-o'}`} />
                    <span className={`fa ${tutor.averageRate > 4.5 ? 'fa-star' : 'fa-star-o'}`} />
                    <strong>{Number(tutor.averageRate).toFixed(1)}</strong>
                    <i>({tutor.totalRate} Review)</i>
                  </div>
                ) : ''}
                <ul className="social-box">
                  <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter"></a>
                  </li>
                  <li className="pinterest"><a target="_blank" href="http://pinterest.com/"
                                               className="fa fa-pinterest-p"></a></li>
                  <li className="facebook"><a target="_blank" href="http://facebook.com/"
                                              className="fa fa-facebook-f"></a></li>
                  <li className="dribbble"><a target="_blank" href="http://dribbble.com/"
                                              className="fa fa-dribbble"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="courses-section-two">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row clearfix">

                <div className="course-block-two col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon flaticon-customer"></div>
                    <h5>Tổng Số Học Viên</h5>
                    <div className="numbers">{tutor.totalLearner}</div>
                  </div>
                </div>

                <div className="course-block-two col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon flaticon-homework"></div>
                    <h5>Tổng Số Khóa Học</h5>
                    <div className="numbers">{tutor.totalCourse}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <div className="outer-container">
          <div className="row clearfix">
            <div className="col-md-6">
              <div className="row clearfix">
                {courses.length > 0 ? courses.map((course, index) => (
                  <div onMouseEnter={() => onHandleCenterHover(course)} key={index}>
                    <CourseItem key={index} course={course} />
                  </div>
                )) : ''}
                { !courses?.length ? <h3 className="text-course text-error my-5">No course found!</h3> : '' }
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-sticky">
                <Map mapStyle={{ height: '95vh' }} location={location} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Tutor;
