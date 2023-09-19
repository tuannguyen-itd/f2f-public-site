import React from 'react';
import { ICourse } from '@model/course.model';
import { Address } from '@components/address';
import Link from 'next/link';
import { formatDate } from '../config/constants';

interface ICourseItemProps {
  course?: ICourse;
}

export const CourseItem = (props: ICourseItemProps) => {
  const { course } = props;
  return (
    <div className="col-md-12 w-100">
      <div className="row shadow bg-white rounded">
        <div className="col-md-6 col-ms-12 w-100 p-0">
          {course.image ? (
              <a><img className="w-100" src={`data:${course.image_content_type};base64,${course.image}`} /></a>
          ) : (
              <a><img className="w-100" src="/theme/template/images/resource/course-34.jpg" /></a>
          )}
        </div>
        <div className="col-md-6 col-ms-12 pt-3">
          <a className="text-dark" style={{  paddingTop: '-10px', fontSize: '30px' }} >{course.name}</a>
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
          <div className="clearfix">
            {course.id ? (
              <div className="text">
                <div className="pull-right">
                  <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                    <a className="theme-btn btn-style-one mt-2 py-1 px-5">
                      <span className="txt">Chi Tiết</span>
                    </a>
                  </Link>
                </div>
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
