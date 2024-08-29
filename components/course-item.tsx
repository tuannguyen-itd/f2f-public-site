import React, { useEffect, useState } from 'react';
import { ICourse } from '@model/course.model';
import { Address } from '@components/address';
import Link from 'next/link';
import { formatCurrency, limitText } from '../shared/util/string-utils';

interface ICourseItemProps {
  course?: ICourse;
}

export const CourseItem = (props: ICourseItemProps) => {
  const { course } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="col-md-12 w-100">
      <div className="row shadow bg-white rounded">
        <div className="col-md-6 col-ms-12 w-100 p-0">
          {course?.image ? (
              <a><img className="w-100 h-100" style={{ objectFit: 'cover' }} src={`data:${course?.imageContentType};base64,${course?.image}`} /></a>
          ) : (
              <a><img className="w-100 h-100" style={{ objectFit: 'cover' }} src="/theme/template/images/resource/course-34.jpg" /></a>
          )}
        </div>
        <div className="col-md-6 col-ms-12 d-flex flex-column">
          <a className="text-dark mt-2" style={{  paddingTop: '-5px', fontSize: '25px' }} ><strong>{course?.name}</strong></a>
          {course?.tutor && course?.tutor?.userInfo?.ward ? (
            <div className="text">
              <Address ward={course?.tutor?.userInfo?.ward}/>
            </div>
          ) : ''}
          {isClient && (
            <span dangerouslySetInnerHTML={{ __html: limitText(course?.description, 160) }}/>
          )}
          <div className="float-right d-flex justify-content-end">
            <div className="iq-doc-description text-danger" style={{ textDecoration: course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 ? 'line-through' : 'none' }}>
              <span>
                <b className="text-danger" style={{ color: course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 ? '#a09e9e' : '#089bab' }}>
                  {formatCurrency(course?.priceCourse?.basePrice)}
                </b>
              </span>
            </div>
            {course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 ? (
              <div className="iq-doc-description ml-4 color-f2f">
                <b>{formatCurrency(course?.priceCourse?.salePrice)}</b>
              </div>
            ) : null}
          </div>
          <div className="justify-content-end">
            {course?.id ? (
              <div className="pull-right">
                <Link href="/courses/[id]" as={`/courses/${course?.id}`}>
                  <a className="theme-btn btn-style-one mt-2 py-1 px-5">
                    <span className="txt">Chi Tiết</span>
                  </a>
                </Link>
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
