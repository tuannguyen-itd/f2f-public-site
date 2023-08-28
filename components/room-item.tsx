import React from 'react';
import { ICenterRoom } from '@model/center-room.model';
import { Address } from '@components/address';
import Link from 'next/link';

interface ICenterRoomProps {
  room?: ICenterRoom;
}

export const RoomItem = (props: ICenterRoomProps) => {
  const { room } = props;
  return (
    <div className="course-block col-lg-4 col-md-6 col-sm-12">
      <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div className="image" style={{ height: '436px', width: '370px' }}>
          <a href="course-detail.html"><img src={`data:${room?.photos[0]?.logoContentType};base64,${room?.photos[0]?.image}`} alt={room?.name}/></a>
        </div>
        <div className="lower-content">
          <h4 className="room-name"><a href="course-detail.html">{room?.name}</a></h4>
          <div className="uni-name">University of Roehampton</div>
          <div className="rating">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star-o"></span>
            <strong>4.9</strong>
            <i>(70 Review)</i>
          </div>
          <div className="price">$12 <span>$100.99</span></div>
          <div className="clearfix">
            <div className="pull-left">
              <div className="hovers">11.5 total hours . All Levels</div>
            </div>
            <div className="pull-right">
              <Link href="/room/[id]" as={`/room/${room.id}`}>
                <a className="theme-btn btn-style-one mt-2"><span className="txt">Chi Tiết</span></a>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
