import React from 'react';
import { roomService } from '@services/room.service';
import { userService } from '@services/user-info.service';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import Link from 'next/link';
import Map from '@components/map';
import { ratingService } from '@services/rating.service';
import { formatCurrency } from '../../../shared/util/string-utils';
import { RoomSlider } from '@components/room-carousel';

declare type RoomProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const room = await roomService.getEntity(id);
  const toproom = await roomService.getTopRoom();
  const rating = await  ratingService.getEntity(id);
  const userinfo = await userService.getEntity(room?.place?.landlord?.userId);
  if (room === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { room, rating, userinfo, toproom },
  };
};

function Room({ room, rating, userinfo, errorCode, toproom }: RoomProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  const location = room && room?.place ? { lat: room?.place?.lat, lng: room?.place?.lng } : null;
  return (
    <Layout>
      <section className="contact-banner-section event-detail-banner-section">
        <div className="pattern-layer-one" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-5.png)' }} />
        <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-6.png)' }} />
        <div className="pattern-layer-three" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-4.png)' }} />
        <div className="pattern-layer-four" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-8.png)' }} />
        <div className="auto-container">
          <ul className="page-breadcrumb">
            <li> <Link href={'/'}>
              <a href="/">
                Home
              </a>
            </Link>
            </li>
            <li>Room</li>
            <li>{room?.name}</li>
          </ul>
          <div className="content-box">
            <h1 className="text-dark">{room?.name}</h1>
          </div>
        </div>
      </section>
      <section className="course-detail-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* slider */}
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {room?.photos && Array?.isArray(room?.photos) && room?.photos?.length > 0 ? (
                      room?.photos?.map((photo, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={photo?.id} style={{ height:'100%', width: '100%' }}>
                          {photo?.imageContentType ? (
                            <img src={`data:${photo?.imageContentType};base64,${photo?.image}`} alt=""  style={{ height:'500px', width: '100%' }}/>
                          ) : null}
                        </div>
                      ))
                    ) : (
                      <div className="carousel-item active" style={{ height: '100%', width: '100%' }}>
                        <img
                          src="/theme/template/images/resource/course-34.jpg"
                          alt="Default"
                          style={{ height: '500px', width: '100%' }}
                        />
                      </div>
                    )}
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                {/* end slider */}
                <div className="learn-box mt-5">
                  <h2 className="text-dark mb-2">Thông tin phòng {room?.name}</h2>
                  <ul className="learn-list">
                    <li>
                      <p>Địa chỉ:
                        {room?.place?.ward ? `${room?.place?.ward?.name}, ` : ''}
                        {room?.place?.ward && room?.place?.ward?.district ? `${room?.place?.ward?.district?.name}` : ''}
                      </p>
                    </li>
                    <li>
                      <p>Vị trí:
                        {room?.location ? `${room?.location}, ` : ''}
                      </p>
                    </li>
                    <li className="text-nowrap">
                     {room?.status === 'OPEN' ? <p> Tình trạng: Đang mở</p> : <p> Tình trạng: Đóng cửa</p>}
                    </li>
                    <li>
                      {room?.priceRoom?.salePrice ? (
                        <span>
                          Giá: {formatCurrency(room?.priceRoom?.salePrice)} / Giờ
                        </span>
                      ) : (
                        <span>
                          Giá: {formatCurrency(room?.priceRoom?.basePrice)} / Giờ
                        </span>
                      )}
                    </li>
                    <li>
                      <span dangerouslySetInnerHTML={{ __html: room?.description }}/>
                    </li>
                  </ul>
                </div>
                <RoomSlider room={toproom?.data} size={3} />
                <h2>Vị trí</h2>
                <div className="map">
                  <Map mapStyle={{ height: '500px' }} location={location} />
                </div>
                {rating?.ratingRooms?.length > 0 ? (
                  <div className="comments-area mt-5">
                    <div className="group-title d-flex align-items-center mb-4">
                      <h4 className="text-dark">Đánh giá lớp học</h4>
                    </div>
                    <div className="comment-box">
                      {rating?.ratingRooms?.map((item, index) => (
                        <div className="comment" key={index}>
                          <div className="author-thumb">
                            <img src={`data:${item?.userInfo?.avatarContentType};base64,${item?.userInfo?.avatar}`} alt=""/>
                          </div>
                          <div className="comment-info clearfix">
                            <strong>{`${item?.userInfo?.user?.firstName} ${item?.userInfo?.user?.lastName}`}</strong>
                            {item?.rate >= 0 ? (
                              <div className="rating">
                                <span className={`fa ${item?.rate >= 0.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${item?.rate >= 1.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${item?.rate >= 2.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${item?.rate >= 3.5 ? 'fa-star' : 'fa-star-o'}`} />
                                <span className={`fa ${item?.rate >= 4.5 ? 'fa-star' : 'fa-star-o'}`} />
                              </div>
                            ) : ''}
                          </div>
                          <div className="text">{item?.comment}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : ''}
              </div>
            </div>
            <div className="info-column col-lg-4 col-md-12 col-sm-12" >
              <div className="inner-column mt-5">
                <h3 className="text-nowrap mb-3">Thông tin liên hệ</h3>
                <div className="image w-100 d-flex align-items-center justify-content-center mb-4">
                  <Link href="/landlord/[id]" as={`/landlord/${room?.place?.landlord?.id}`}>
                    <a>
                      {room?.place?.landlord?.logoContentType ? (
                        <img src={`data:${room?.place?.landlord?.logoContentType};base64,${room?.place?.landlord?.logo}`} alt="Thông tin liên hệ" style={{ width: '150px' }}/>
                      ) : null}
                    </a>
                  </Link>
                </div>
                <div className="d-flex flex-column">
                  <div className="d-flex mt-2">
                    <span className="font-weight-bold">Name:</span>
                    <span className="ml-2">{room?.place?.landlord?.name}</span>
                  </div>
                  <div className="d-flex mt-2">
                  <span className="font-weight-bold">Email:</span>
                  <span className="ml-2">{userinfo?.user?.email}</span>
                  </div>
                  <div className="d-flex mt-2">
                  <span className="font-weight-bold">Phone:</span>
                  <span className="ml-2">{userinfo?.phone}</span>
                  </div>

                </div>
                <div className="btns-box text-center">
                  <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/room/${room?.id}`} as={`${process.env.NEXT_PUBLIC_ADMIN_URL}/room/${room?.id}`}>
                  <a className="theme-btn enrol-btn ">Liên hệ</a>
                  </Link>
                  <Link href={'/landlord/{id}'} as={`/landlord/${room?.place?.landlord?.id}`}>
                   <a href="#" className="theme-btn wishlist-btn">Các phòng khác</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Room;
