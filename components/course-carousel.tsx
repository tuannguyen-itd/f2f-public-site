import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ICourse } from '@model/course.model';
import { formatCurrency, limitText } from '../shared/util/string-utils';
import { Badge } from 'reactstrap';
import StatusComponent from '@components/course-status';

interface ICourseSliderProps {
  suggests: ICourse[];
}

export const CourseSlider = (props: ICourseSliderProps) => {
  const { suggests } = props;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
      {suggests?.map((course, index) => (
        <div key={index} className="iq-card pl-2 pr-2">
          <div className="iq-card-body text-center box-shadow-course">
            <div className="doc-profile">
              <img className="img-fluid" style={{ maxHeight: '126px', minHeight: '126px', width: '100%', objectFit: 'cover' }}
                   src={
                     course?.image
                       ? `data:${course?.imageContentType};base64,${course?.image}`
                       : '/content/images/default-image-1.jpg'
                   }
              />
            </div>
            <div className="iq-doc-info text-left p-2">
              <div className="iq-doc-info text-sm-left">
                <h6 className="text-dark title-course-name">{course?.name}</h6>
              </div>
              {course.categories.length > 0 && (
                <div className="box-tag-category">
                  #{course.categories[0]?.name}
                </div>
              )}
              <div className="d-flex justify-content-between">
                <div className="m-0 p-0">
                  <span className="mr-2 title-status">Số lượng:</span>
                  {course?.learners?.length < course?.amount ? (
                    <Badge className="slide-status" color="success">
                      {course?.learners.length}/{course?.amount}
                    </Badge>
                  ) : (
                    <Badge color="danger">
                      Full
                    </Badge>
                  )}
                </div>
                <div className="m-0 p-0">
                  <span className="mr-2 title-status">Trạng thái:</span>
                  <StatusComponent status={course?.status}/>
                </div>
              </div>
              <div className="iq-doc-description mt-2 text-left">
                {limitText(course?.description, 60)}
              </div>
              <div className="d-flex justify-content-end">
                <div className="iq-doc-description" style={{ textDecoration: course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 ? 'line-through' : 'none' }}>
                <span>
                  <b style={{ color: course?.priceCourse?.salePrice && course?.priceCourse?.salePrice > 0 ? '#a09e9e' : '#43b97e' }}>
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
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
