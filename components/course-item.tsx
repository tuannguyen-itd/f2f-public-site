import React from 'react';
import { ICourse } from '@model/course.model';
import {Address} from "@components/address";
import Link from "next/link";

interface ICourseItemProps {
  course?: ICourse;
}

export const CourseItem = (props: ICourseItemProps) => {
  const { course } = props;
  return (
     <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
       <div className="inner-box">
         <div className="image">
           <Link href="/courses/[id]" as={`/courses/${course.id}`}>
             <a><img src={`data:${course.photoContentType};base64,${course.photo}`} /></a>
           </Link>
         </div>
         <div className="lower-content">
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
           <div className="rating">
             <span className="fa fa-star" />
             <span className="fa fa-star" />
             <span className="fa fa-star" />
             <span className="fa fa-star" />
             <span className="fa fa-star-o" />
             <strong>4.9</strong>
             <i>(70 Review)</i>
           </div>
         </div>
         {/* Overlay Content Box */}
         <div className="overlay-content-box">
           <h4>
             <Link href="/courses/[id]" as={`/courses/${course.id}`}>
               <a>{course.name}</a>
             </Link>
           </h4>
           {course.tutor && course.tutor.userInfo.user.login ? (
             <div className="uni-name">{course.tutor.userInfo.user.login}</div>
           ) : ''}
           <div className="rating">
             <span className="fa fa-star" />
             <span className="fa fa-star" />
             <span className="fa fa-star" />
             <span className="fa fa-star" />
             <span className="fa fa-star-o" />
             <strong>4.9</strong>
             <i>(70 Review)</i>
           </div>
           {course.tutor && course.tutor.userInfo.ward ? (
             <div className="text">
               <Address ward={course.tutor.userInfo.ward}/>
             </div>
           ) : ''}
           {course.description ? (
             <div className="text">{course.description}</div>
           ) : ''}
           <div className="btns-box">
             <Link href="/courses/[id]" as={`/courses/${course.id}`}>
              <a className="theme-btn enrol-btn">Tham gia</a>
             </Link>
           </div>
         </div>
         {/* End Overlay Content Box */}
       </div>
     </div>
  );
};
