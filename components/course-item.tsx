import React from 'react';
import { ICourse } from '@model/course.model';
import { Address } from '@components/address';
import Link from 'next/link';

interface ICourseItemProps {
  course?: ICourse;
}

export const CourseItem = (props: ICourseItemProps) => {
  const { course } = props;
  return (
    <div className="course-block-three col-lg-12">
      <div className="inner-box">
        <div className="image">
          <Link href="/courses/[id]" as={`/courses/${course.id}`}>
            <a><img src={`data:${course.photoContentType};base64,${course.photo}`} /></a>
          </Link>
        </div>
        <div className="content">
          <h4>
            <Link href="/courses/[id]" as={`/courses/${course.id}`}>
              <a>{course.name}</a>
            </Link>
          </h4>
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
            <div className="text">{course.description}</div>
          ) : ''}
          <div className="clearfix">
            <div className="price">$12 <span>$100.99</span></div>
            <div className="hovers">11.5 total hours . All Levels</div>
          </div>
          <Link href="/courses/[id]" as={`/courses/${course.id}`}>
            <a className="theme-btn btn-style-one"><span className="txt">Tham gia</span></a>
          </Link>
        </div>
      </div>
    </div>
  );
};
