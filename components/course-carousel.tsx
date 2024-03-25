import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ICourse } from '@model/course.model';

interface ICourseSliderProps {
  topCourse: ICourse[];
}

export const CourseSlider = (props: ICourseSliderProps) => {
  const { topCourse } = props;
  console.log(topCourse);
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
    <Carousel responsive={responsive} autoPlay={false} autoPlaySpeed={3000} infinite={true}>
      {topCourse?.map((course, index) => (
        <div key={index} style={{ height: '100%', padding: '5px' }}>
          <div className="shadow h-100" >
            <div style={{ height: '200px' }}>
              <img className="h-100 w-100" style={{ objectFit: 'cover' }} src={`data:${course?.image_content_type};base64,${course?.image}`} alt={course?.name} />
            </div>
            <div className="d-flex flex-column">
              <h4 style={{ fontSize: '16px', height: '18px', color: '#000000' }}><strong>{course?.name}</strong></h4>
              <div><span  style={{ backgroundColor: '#d1d0d0', padding: '0 2px', borderRadius: '5px', fontSize: '11px' }}>#{course?.categories[0]?.name}</span></div>
              <span><strong className="testbg" style={{ backgroundColor: 'green', borderRadius: '5px', color: '#ffffff', fontSize: '10px', lineHeight: '14px', padding: '0 5px' }}>{course?.status}</strong></span>
              <div className="">
                <span>{course?.priceCourse?.basePrice}</span>
                <span>{course?.priceCourse?.salePrice}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
