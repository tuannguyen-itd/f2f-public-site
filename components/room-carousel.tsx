import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { formatCurrency, limitText } from '../shared/util/string-utils';
import StatusComponent from '@components/course-status';
import { IRoom } from '@model/room.model';
import Link from 'next/link';

interface ICourseSliderProps {
  room: IRoom[];
  size: number;
}

export const RoomSlider = (props: ICourseSliderProps) => {
  const { room, size } = props;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: size,
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
  // @ts-ignore
  return (
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
      {room?.map((item, index) => (
        <div key={index} className="iq-card pl-2 pr-2">
          <div className="iq-card-body text-center box-shadow-course w-100">
            <div className="doc-profile">
                <img className="img-fluid" style={{ width: '100%', height: '215px', maxHeight: '215px', minHeight: '126px', objectFit: 'cover' }}
                   src={
                     item?.photos[0]?.image
                       ? `data:${item?.photos[0]?.imageContentType};base64,${item?.photos[0]?.image}`
                       : '/content/images/default-image-1.jpg'
                   }
              />
            </div>
            <div className="iq-doc-info text-left p-2">
              <div className="iq-doc-info text-sm-left ">
                <Link href={`/rooms/${item?.id}`} as={`/rooms/${item?.id}`}>
                  <h6 className="text-dark title-course-name cursor-pointer"><strong>{item?.name}</strong></h6>
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <div className="m-0 p-0">
                  <span className="mr-2 title-status">Trạng thái:</span>
                  <StatusComponent status={item?.status}/>
                </div>
              </div>
              {item?.averageRating >= 0 && item?.countRating >= 0 ? (
                <div className="rating d-flex">
                  <span className="text-dark">Đánh giá:&nbsp;</span>
                  <div style={{ color: '#fbb039' }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className={`fa fa-star${index < item?.averageRating ? '' : '-o'}`}></span>
                    ))}
                  </div>
                  {item.averageRating > 0 ?
                    <strong>&nbsp;{Math.round(item.averageRating)}</strong>
                    : null}
                  <i>({item.countRating} Review{item.countRating !== 1 ? 's' : ''})</i>
                </div>
              ) : null}
              <div className="iq-doc-description mt-2 text-left">
                {limitText(item?.description, 60)}
              </div>
              <div className="d-flex justify-content-end">
                <div className="iq-doc-description" style={{ textDecoration: item?.priceRoom?.salePrice && item?.priceRoom?.salePrice > 0 ? 'line-through' : 'none' }}>
                <span>
                  <b style={{ color: item?.priceRoom?.salePrice && item?.priceRoom?.salePrice > 0 ? '#a09e9e' : '#43b97e' }}>
                    {formatCurrency(item?.priceRoom?.basePrice)}
                  </b>
                </span>
                </div>
                {item?.priceRoom?.salePrice && item?.priceRoom?.salePrice > 0 ? (
                  <div className="iq-doc-description ml-4 color-f2f">
                    <b>{formatCurrency(item?.priceRoom?.salePrice)}</b>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
