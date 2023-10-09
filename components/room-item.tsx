import React from 'react';
import Link from 'next/link';
import { IRoom } from '@model/room.model';

interface IRoomItemProps {
  room?: IRoom;
}

export const RoomItem = (props: IRoomItemProps) => {
  const { room } = props;
  return (
    <div className="row">
    <div className="course-block-three col-lg-12" >
      <div className="inner-box d-flex overflow-hidden pl-0 pt-0" style={{ minHeight: '10px' }}>
        <div className="image d-flex align-items-center justify-content-center position-relative"  style={{ width: '100%' }}>
            <a>
              {room.photos && Array.isArray(room.photos) && room.photos.length > 0 ? (
                <div>
                  {room.photos[0].imageContentType ? (
                    <img src={`data:${room.photos[0].imageContentType};base64,${room.photos[0].image}`} alt={room.photos[0].description} />
                  ) : null}
                </div>
              ) : null}
            </a>
        </div>
        <div className="content w-100">
          <h1 className="d-flex justify-content-center text-dark" style={{  paddingTop: '-10px', fontSize: '30px' }} >{room.name}</h1>
          {room.place  ? (
            <div className="uni-name text-dark d-flex justify-content-center">
              Địa chỉ: { room?.place?.ward?.name }, { room?.place?.ward?.district?.name }, { room?.place?.ward?.district?.province?.name }
            </div>
          ) : ''}
          {room.location  ? (
            <div className="uni-name text-dark d-flex justify-content-center">
              Vị trí: { room.location }
            </div>
          ) : ''}
          {/*{room.totalRate > 0 ? (*/}
          {/*  <div className="rating">*/}
          {/*    <span className={`fa ${course.averageRate > 0 ? 'fa-star' : 'fa-star-o'}`} />*/}
          {/*    <span className={`fa ${course.averageRate > 1 ? 'fa-star' : 'fa-star-o'}`} />*/}
          {/*    <span className={`fa ${course.averageRate > 2 ? 'fa-star' : 'fa-star-o'}`} />*/}
          {/*    <span className={`fa ${course.averageRate > 3 ? 'fa-star' : 'fa-star-o'}`} />*/}
          {/*    <span className={`fa ${course.averageRate > 4 ? 'fa-star' : 'fa-star-o'}`} />*/}
          {/*    <strong>{Number(course.averageRate).toFixed(1)}</strong>*/}
          {/*    <i>({course.ratingCourses.length} Đánh giá)</i>*/}
          {/*  </div>*/}
          {/*) : ''}*/}

          <div className="clearfix">
            {room.id ? (
              <div className="text">
                <div className="pull-right">
                  <Link href="/rooms/[id]" as={`/rooms/${room.id}`}>
                    <a className="theme-btn btn-style-one mt-2 py-1 px-5">
                      <span className="txt">Chi Tiết</span>
                    </a>
                  </Link>
                </div>
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
