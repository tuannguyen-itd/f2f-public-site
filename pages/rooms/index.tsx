import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { courseService } from '@services';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { CourseItem } from '@components/course-item';
import { LandlordRoomItem } from '@components/landlord-room-item';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { latLngDefault } from '../../config/constants';
import Map from '@components/map';
import { roomService } from '@services/room.service';
import { RoomItem } from '@components/room-item';
import { AddressSelector } from '@components/address-selector/address-selector';

declare type RoomsProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search, page = 1 }, res }) => {
  const menus = [];
  const response = await roomService.getEntities(
    +page - 1, ITEMS_PER_PAGE, 'id', 'desc',
    { 'name.contains': search as string },
  );

  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return { props: { response, menus } };
};

export default function Rooms({ menus, response, errorCode }: RoomsProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  const { data: rooms, total } = response;

  const router = useRouter();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({ lat: latLngDefault.lat, lng: latLngDefault.lng });
  useEffect(() => {
    setLocation(location);
  }, [location]);

  useEffect(() => {
    setSearch(router.query.search as string || '');
  }, [router.query]);

  const url = (page, searchStr) => {
    const params = Object.entries({
      page: (page || 1) > 1 ? page : false,
      search: searchStr,
    })
      .map(([key, value]) => (value ? `${key}=${value}` : false))
      .filter(s => s)
      .join('&');

    return `/rooms${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value, search), undefined);

  const handleSearchCourses = (event) => {
    event.preventDefault();
    router.push(url(1, search), undefined);
  };

  const onHandleCenterHover = (lat, lng) => {
    setLocation({ lat, lng });
  };
  return (
    // @ts-ignore
    <Layout menus={menus}>
      <section className="courses-page-section style-two overflow-auto">
        <div className="auto-container">
          {/* Filter Box */}
          <div className="filter-box">
            <div className="box-inner">
              <div className="clearfix">
                <div className="pull-left clearfix">
                  <div className="dropdown-outer">
                    <div className="filter-dropdown">
                      <span className="icon flaticon-filter-filled-tool-symbol" /> Filter <span className="arrow fa fa-angle-down" />
                      {/* Filter Categories */}
                      <div className="filter-categories">
                        <div className="clearfix">
                          {/* Column */}
                          <div className="d-flex flex-column">
                            <h6>Lọc theo vị trí</h6>
                            <AddressSelector  />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form style={{ maxWidth: '600px', width: '100%' }} className="d-inline-block mt-1" onSubmit={handleSearchCourses}>
                  <Row>
                    <Col>
                      <InputGroup>
                        <Input
                          autoFocus={true}
                          value={search}
                          onChange={$event => setSearch($event.target.value)}
                          placeholder="Tìm lớp học" />
                        <InputGroupAddon addonType="append">
                          <Button color="secondary">Tìm</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                </form>
                <div className="pull-right">
                  <div className="total-course">Tìm thấy <span>{total}</span> kết quả</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-container">
          <h1 className="w-100 d-flex justify-content-center align-content-center my-5 lower-content">DANH SÁCH CÁC PHÒNG HỌC NỔI BẬT</h1>
          <div className="row clearfix d-flex justify-content-center">
            <div className="col-md-6">
              {rooms.length > 0 ? rooms.map((room, index) => (
                <div onClick={() => onHandleCenterHover(room.place.lat, room.place.lng)} key={index}>
                  <RoomItem room={room} />
                </div>
              )) : ''}
              {!rooms?.length ? <h3 className="text-room text-error my-5">No room found!</h3> : ''}
            </div>
            <div className="col-md-6">
              <div className="map-sticky">
                <Map mapStyle={{ height: '95vh' }} location={location} />
              </div>
            </div>
          </div>
          <Pagination
          visible={rooms?.length > 0 && total}
          activePage={+router.query.page || 1}
          onSelect={handlePaginateChange}
          maxButtons={7}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={+total}
        />
        </div>
      </section>
    </Layout>
  );
}
