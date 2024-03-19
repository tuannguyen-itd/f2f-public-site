import React from 'react';
import { ICourse } from '@model/course.model';
import { Address } from '@components/address';
import Link from 'next/link';
import { formatCurrency, limitText } from '../shared/util/string-utils';

interface ICourseItemProps {
  course?: ICourse;
}

export const CourseOfCategoryItem = (props: ICourseItemProps) => {
  const { course } = props;
  return (
    <div className="col-lg-4 col-md-4 p-1">
      <div className="shadow p-3">
        <div className="img" style={{ overflow: 'hidden' }} >
          {course?.image ? (
            <img className="w-100" style={{ objectFit: 'cover', height: '250px', minHeight: '250px', maxHeight: '250px' }} src={`data:${course?.image_content_type};base64,${course?.image}`} />
          ) : (
            <img className="w-100" style={{ objectFit: 'cover' }} src="/theme/template/images/resource/course-34.jpg" />
          )}
        </div>
        <div className="content-item">
          <div className="description">
            <h4>
              <a className="text-dark mt-2" style={{  paddingTop: '-5px', fontSize: '25px' }} ><strong>{course?.name}</strong></a>
            </h4>
            {course?.tutor && course?.tutor?.userInfo?.ward ? (
              <div className="text">
                <Address ward={course?.tutor?.userInfo?.ward}/>
              </div>
            ) : ''}
            {course?.description?.length > 0 ? (
              <p className="mt-2">{limitText(course?.description, 160)}</p>
            ) : null}
            <div className="float-right d-flex justify-content-end">
              <div className="iq-doc-description text-danger" style={{ textDecoration: course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 ? 'line-through' : 'none' }}>
                <span>
                  <b className="text-danger" style={{ color: course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 ? '#a09e9e' : '#089bab' }}>
                    {formatCurrency(course?.priceCourse?.basePrice)}
                  </b>
                </span>
              </div>
              {course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 && (
                <div className="iq-doc-description ml-4 color-f2f">
                  <b>{formatCurrency(course?.priceCourse?.salePrice)}</b>
                </div>
              )}
            </div>
          </div>
          <div className="w-100 d-flex justify-content-end">
            <Link href="/courses/[id]" as={`/courses/${course?.id}`}>
              <a className="theme-btn btn-style-one mt-2 py-1 px-5">
                <span className="txt">Chi Tiết</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
