import React from 'react';
import Link from 'next/link';
import { IClassRoom } from '@model/class-room.model';
import {Address} from "@components/address";

interface IClassRooms {
  data?: IClassRoom[];
}

export const ClassRooms = ({ data }: IClassRooms) => {
  return (
   <>
     {data?.map((classRoom, index) => (
       <div key={index} className="course-block style-two col-lg-3 col-md-6 col-sm-12">
         <div className="inner-box">
           <div className="image">
             <a href="#">
               <img src={`data:${classRoom.photoContentType};base64,${classRoom.photo}`} />
             </a>
           </div>
           <div className="lower-content">
             <h4><a href="#">{classRoom.name}</a></h4>
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
           </div>
           {/* Overlay Content Box */}
           <div className="overlay-content-box">
             <h4>{classRoom.name}</h4>
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
     ))}
     { !data?.length ? <h3 className="text-classRoom text-error my-5">No classRoom found!</h3> : '' }
   </>
  );
};
