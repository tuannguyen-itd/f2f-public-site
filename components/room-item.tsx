import React from 'react';
import Link from 'next/link';
import { IRoom } from '@model/room.model';
import { formatDate } from '../config/constants';
import { formatCurrency } from '../shared/util/string-utils';

interface IRoomItemProps {
  room?: IRoom;
}

export const RoomItem = (props: IRoomItemProps) => {
  const { room } = props;
  return (
    <div className="col-md-12 w-100" >
      <div className="row shadow bg-white rounded">
        <div className="col-md-6 col-ms-12 w-100 p-0" style={{ width: '100%' }}>
          <div className="h-100">
            {room?.image ? (
              <img className="w-100 h-100" style={{ objectFit: 'cover' }} src={`data:${room?.imageContentType};base64,${room?.image}`} alt={room?.description} />
            ) :
              <img className="w-100 h-100" style={{ objectFit: 'cover' }} src="/theme/template/images/resource/course-34.jpg" />
            }
          </div>
        </div>
        <div className="col-md-6 col-ms-12 mt-2">
          <a className="text-dark" style={{ fontSize: '20px' }} ><strong>{room?.name}</strong></a>
          {room?.description ? (
            <div className="text">
              {room?.description?.length > 150 ? (
                <p>{room?.description?.slice(0, 150)}...</p>
              ) : (
                <p>{room?.description}</p>
              )}
            </div>
          ) : ''}
          {room?.avgRating >= 0 && room?.countRating >= 0 ? (
            <div className="rating d-flex">
              <span className="text-dark">Đánh giá:&nbsp;</span>
              <div style={{ color: '#fbb039' }}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className={`fa fa-star${index < room?.avgRating ? '' : '-o'}`}></span>
                ))}
              </div>
              {room.avgRating > 0 ?
                <strong>&nbsp;{Math.round(room.avgRating)}</strong>
                : null}
              <i>({room.countRating} Review{room.countRating !== 1 ? 's' : ''})</i>
            </div>
          ) : null}
          {room?.location  ? (
            <div className="text-dark">
              Vị trí: <span className=" font-weight-bold">{ room?.location }</span>
            </div>
          ) : ''}
          {room?.wardName || room?.districtName || room?.provinceName ? (
            <div className="text-dark">
              Địa chỉ: <span className=" font-weight-bold">{ room?.wardName }, { room?.districtName }, { room?.provinceName }</span>
            </div>
          ) : ''}
          <div className="date"><span>{formatDate(room?.date)}</span></div>
          <div className="float-right mt-2 mb-2 d-flex w-100 justify-content-end">
            {room?.salePrice && room?.salePrice > 0 ? (
              <>
                <div className="iq-doc-description text-danger line-through">
                  <span>{formatCurrency(room?.basePrice)} / Giờ</span>
                </div>
                <div className="iq-doc-description ml-4 green-color">
                  <b>{formatCurrency(room?.salePrice)} / Giờ</b>
                </div>
              </>
            ) : (
              <div className="text-sm-right w-100 green-color">
                <b>{formatCurrency(room?.basePrice)} / Giờ</b>
              </div>
            )}
          </div>
          <div className="clearfix">
            {room?.id ? (
              <div className="text">
                <div className="pull-right">
                  <Link href="/rooms/[id]" as={`/rooms/${room?.id}`}>
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
  );
};
