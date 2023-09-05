import React from 'react';
import Link from 'next/link';
import { IRoom } from '@model/room.model';

interface IRoomItemProps {
  room?: IRoom;
}

export const RoomItem = (props: IRoomItemProps) => {
  const { room } = props;
  // const location = room.place != null && room.place.ward != null && room.place.ward.district != null && room.place.ward.district.province != null
  //   ? room.place.ward.name + ', ' + room.place.ward.district.name + ', ' + room.place.ward.district.province.name
  //   : room.location;
  const location = null;

  return (
    <div className="course-block col-lg-12 col-md-6 col-12">
      <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms"
           style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInLeft' }}>
        <div className="image d-flex align-items-center" style={{ width: '555px', height: '435px' }}>
          <Link href="/rooms/[id]" as={`/rooms/${room.id}`}>
            <a>
              {room.photos && Array.isArray(room.photos) && room.photos.length > 0 ? (
                <div>
                  {room.photos[0].imageContentType ? (
                    <img src={`data:${room.photos[0].imageContentType};base64,${room.photos[0].image}`} alt={room.photos[0].description} />
                  ) : room.place}
                </div>
              ) : null}
            </a>
          </Link>
        </div>
        <div className="lower-content">
          <h4> <Link href="/rooms/[id]" as={`/rooms/${room.id}`}>
            <a>{room.name}</a>
          </Link></h4>
          <div className="uni-name">
            {location}
          </div>
          <div className="clearfix">
            <div className="pull-left">
            </div>
            <div className="pull-right">
              <Link href="/rooms/[id]" as={`/rooms/${room.id}`}>
                <a className="enroll-now">Chi tiết</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
