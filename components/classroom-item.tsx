import React from 'react';
import { IClassRoom } from '@model/class-room.model';
import {Address} from "@components/address";
import Link from "next/link";

interface IClassroomItemProps {
  classRoom?: IClassRoom;
}

export const ClassroomItem = (props: IClassroomItemProps) => {
  const { classRoom } = props;
  return (
     <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
       <div className="inner-box">
         <div className="image">
           <Link href="/classes/[id]" as={`/classes/${classRoom.id}`}>
             <a><img src={`data:${classRoom.photoContentType};base64,${classRoom.photo}`} /></a>
           </Link>
         </div>
         <div className="lower-content">
           <h4>
             <Link href="/classes/[id]" as={`/classes/${classRoom.id}`}>
               <a>{classRoom.name}</a>
             </Link>
           </h4>
           {classRoom.center && classRoom.center.name ? (
             <div className="uni-name">
               <Link href="/centers/[id]" as={`/centers/${classRoom.centerId}`}>
                 <a>{classRoom.center.name}</a>
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
             <Link href="/classes/[id]" as={`/classes/${classRoom.id}`}>
               <a>{classRoom.name}</a>
             </Link>
           </h4>
           {classRoom.center && classRoom.center.name ? (
             <div className="uni-name">{classRoom.center.name}</div>
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
           {classRoom.center && classRoom.center.ward ? (
             <div className="text">
               <Address ward={classRoom.center.ward}/>
             </div>
           ) : ''}
           {classRoom.description ? (
             <div className="text">{classRoom.description}</div>
           ) : ''}
           <div className="btns-box">
             <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
           </div>
         </div>
         {/* End Overlay Content Box */}
       </div>
     </div>
  );
};
