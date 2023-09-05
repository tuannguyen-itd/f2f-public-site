import React from 'react';
import { IRoom } from '@model/room.model';
import { Address } from '@components/address';
import Link from 'next/link';

interface IRoomProps {
  room?: IRoom;
}

export const LandlordRoomItem = (props: IRoomProps) => {
  const { room } = props;
  return (
    <div className="course-block col-lg-4 col-md-6 col-sm-12">
      <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div className="image roomLandlord-img">
          {room?.photos[0]?.image ? (
            <a href="#"><img src={`data:${room?.photos[0]?.imageContentType};base64,${room?.photos[0]?.image}`} alt={room?.name}/></a>
          ) : (
            <a href="#"><img src="/theme/template/images/resource/course-1.jpg" /></a>
          )}
        </div>
        <div className="lower-content">
          <h4 className="room-name "><a href="course-detail.html">{room?.name}</a></h4>
          <div className="uni-name">Địa chỉ: {room?.location}</div>
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
            <div className="pull-right">
              <Link href="/rooms/[id]" as={`/rooms/${room.id}`}>
                <a className="theme-btn btn-style-one mt-2"><span className="txt">Chi Tiết</span></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
