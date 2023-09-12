import React from 'react';
import { ICourse } from '@model/course.model';
import { Address } from '@components/address';
import Link from 'next/link';
import { formatDate } from "../config/constants";

interface ICourseItemProps {
  course?: ICourse;
}

export const CourseItem = (props: ICourseItemProps) => {
  const { course } = props;
  return (
      <div className="course-block-three col-lg-12" >
        <div className="inner-box d-flex overflow-hidden pl-0 pt-0" style={{ minHeight: '10px' }}>
            <div className="image d-flex align-items-center justify-content-center position-relative mr-2"  style={{ width: '368px' }}>
            <Link href="/courses/[id]" as={`/courses/${course.id}`}>
              {course.image ? (
                <a><img src={`data:${course.image_content_type};base64,${course.image}`} /></a>
              ) : (
                <a><img src="/theme/template/images/resource/course-34.jpg" /></a>
              )}
            </Link>
          </div>
          <div className="content">
            <h2 style={{  paddingTop: '-10px', fontSize: '30px' }}>
              <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                <a className="text-dark">{course.name}</a>
              </Link>
            </h2>
            {course.tutor && course.tutor.userInfo.user.login ? (
              <div className="uni-name">
                <Link href="/tutors/[id]" as={`/tutors/${course.tutorId}`}>
                  <a>{course.tutor.userInfo.user.login}</a>
                </Link>
              </div>
            ) : ''}
            {course.totalRate > 0 ? (
              <div className="rating">
                <span className={`fa ${course.averageRate > 0 ? 'fa-star' : 'fa-star-o'}`} />
                <span className={`fa ${course.averageRate > 1 ? 'fa-star' : 'fa-star-o'}`} />
                <span className={`fa ${course.averageRate > 2 ? 'fa-star' : 'fa-star-o'}`} />
                <span className={`fa ${course.averageRate > 3 ? 'fa-star' : 'fa-star-o'}`} />
                <span className={`fa ${course.averageRate > 4 ? 'fa-star' : 'fa-star-o'}`} />
                <strong>{Number(course.averageRate).toFixed(1)}</strong>
                <i>({course.ratingCourses.length} Đánh giá)</i>
              </div>
            ) : ''}
            {course.tutor && course.tutor.userInfo.ward ? (
              <div className="text">
                <Address ward={course.tutor.userInfo.ward}/>
              </div>
            ) : ''}
            {course.description ? (
              <div className="text">
                {course.description.length > 150 ? (
                  <p>{course.description.slice(0, 150)}...</p>
                ) : (
                  <p>{course.description}</p>
                )}
              </div>
            ) : ''}
            <div className="date"><span>{formatDate(course.date)}</span></div>
            {/*<div className="clearfix">*/}
            {/*  <div className="price">$12 <span>$100.99</span></div>*/}
            {/*  <div className="hovers">11.5 total hours . All Levels</div>*/}
            {/*</div>*/}
            {/*<Link href="/courses/[id]" as={`/courses/${course.id}`}>*/}
            {/*  <a className="theme-btn btn-style-one"><span className="txt">Tham gia</span></a>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
  );
};
