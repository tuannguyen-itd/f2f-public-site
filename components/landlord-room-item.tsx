import React, {useEffect, useState} from 'react';
import { IRoom } from '@model/room.model';
import { Address } from '@components/address';
import Link from 'next/link';
import { ratingService } from '@services';
interface IRoomProps {
  room?: IRoom;
}

export const LandlordRoomItem = (props: IRoomProps) => {
  const { room } = props;
  const [rating, setRating] = useState<any | null>(null);
  useEffect(() => {
    async function fetchRating() {
      try {
        const rating = await ratingService.getRatingByRoomId(room.id);
        setRating(rating);
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    }
    fetchRating();
  }, [room.id]);
  return (
    <div className="course-block col-md-4">
      <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div className="image roomLandlord-img" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {room?.photos[0]?.image ? (
            <img
              src={`data:${room?.photos[0]?.imageContentType};base64,${room?.photos[0]?.image}`}
              alt={room?.name}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          ) : (
            <img src="/theme/template/images/resource/course-1.jpg" alt={room?.name} />
          )}
        </div>
        <div className="lower-content">
          <h4 className="room-name "><a href="course-detail.html">{room?.name}</a></h4>
          <div className="mt-2 mb-2">Địa chỉ: {room?.place?.ward?.name}, {room?.place?.ward?.district?.name}</div>
          <div className="mt-2 mb-2">Vị trí: {room?.location} </div>
          <div className="rating">
            {rating?.ratingRoomAvg >= 0 ? (
              <>
                <div className="d-flex align-items-center">
                  <span className="">Đánh giá:</span>
                  <h6 className="text-dark ml-2">
                    <b>{rating.ratingRoomAvg ? rating.ratingRoomAvg?.toFixed(1) : 0}</b>
                  </h6>
                  <div className="pl-2 d-flex align-items-center">
                    <div className="rating text-warning">
                      <span className={`fa ${rating?.ratingRoomAvg >= 0.5 ? 'fa-star' : 'fa-star-o'}`} />
                      <span className={`fa ${rating?.ratingRoomAvg >= 1.5 ? 'fa-star' : 'fa-star-o'}`} />
                      <span className={`fa ${rating?.ratingRoomAvg >= 2.5 ? 'fa-star' : 'fa-star-o'}`} />
                      <span className={`fa ${rating?.ratingRoomAvg >= 3.5 ? 'fa-star' : 'fa-star-o'}`} />
                      <span className={`fa ${rating?.ratingRoomAvg >= 4.5 ? 'fa-star' : 'fa-star-o'}`} />
                    </div>
                      <span className="text-dark">({rating.ratingRoomCount ? rating.ratingRoomCount : 0} review)</span>
                  </div>
                </div>
              </>
            ) : ''}
          </div>
          <div className="clearfix">
            <div className="pull-right">
              <Link href="/rooms/[id]" as={`/rooms/${room?.id}`}>
                <a className="theme-btn btn-style-one mt-2 py-1 px-5"><span className="txt">Chi Tiết</span></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
