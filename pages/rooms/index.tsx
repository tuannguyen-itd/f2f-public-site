import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { latLngDefault } from '../../config/constants';
import Map from '@components/map';
import { roomService } from '@services/room.service';
import { RoomItem } from '@components/room-item';
import AddressSelector, { IAddressState } from '@components/address-selector/address-selector';

declare type RoomsProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search, page = 1, provinceId, districtId,  wardId }, res }) => {
  const menus = [];
  const response = await roomService.getAllRooms(+page - 1, ITEMS_PER_PAGE, 'id', 'desc', search, provinceId || null , districtId || null , wardId || null);
  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return { props: { menus, response } };
};

export default function Rooms({ menus, errorCode, response }: RoomsProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({ lat: latLngDefault.lat, lng: latLngDefault.lng });
  const [address, setAddress] = useState({} as IAddressState);
  const [wardId, setWardId] = useState<number>();
  const [districtId, setDistrictId] = useState<number>();
  const [provinceId, setProvinceId] = useState<number>();

  useEffect(() => {
    setLocation(location);
  }, [location]);

  useEffect(() => {
    setWardId(address.wardId);
    setDistrictId(address.districtId);
    setProvinceId(address.provinceId);

    router.push(url(1, null, address.provinceId, address.districtId, address.wardId), undefined);
  }, [address, provinceId, districtId, wardId]);

  const url = (page, searchStr, provinceId, districtId, wardId) => {
    const params = Object.entries({
      provinceId,
      districtId,
      wardId,
      page: (page || 1) > 1 ? page : false,
      search: searchStr,
    })
      .map(([key, value]) => (value ? `${key}=${value}` : false))
      .filter(s => s)
      .join('&');
    return `/rooms${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value, search, provinceId, districtId, wardId), undefined);

  const handleSearchCourses = (event) => {
    event.preventDefault();
    router.push(url(1, search, null, null, null), undefined);
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
                      <div className="filter-categories" style={{ zIndex: '999' }}>
                        <div className="clearfix">
                          {/* Column */}
                          <h6 className="d-block">Lọc theo vị trí</h6>
                          <div className="d-flex">
                            <AddressSelector onSelect={setAddress} values={address} col="4" className="form-control" />
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
                          onChange={$event => setSearch($event.target.value || '')}
                          placeholder="Tìm lớp học" />
                        <InputGroupAddon addonType="append">
                          <Button color="secondary">Tìm</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                </form>
                <div className="pull-right">
                  <div className="total-course">Tìm thấy <span>{+response?.totalElements}</span> kết quả</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-container">
          <h1 className="w-100 d-flex justify-content-center align-content-center my-5 lower-content">DANH SÁCH CÁC PHÒNG HỌC NỔI BẬT</h1>
          <div className="row clearfix d-flex justify-content-center">
            <div className="col-md-6">
              {response && response?.content?.length > 0 ? response?.content?.map((room, index) => (
                <div onClick={() => onHandleCenterHover(room.place.lat, room.place.lng)} key={index}>
                  <RoomItem room={room} />
                </div>
              )) : ''}
              {!response?.content?.length ? <h3 className="text-room text-error my-5">No room found!</h3> : ''}
            </div>
            <div className="col-md-6">
              <div className="map-sticky">
                <Map mapStyle={{ height: '95vh' }} location={location} />
              </div>
            </div>
          </div>
          <Pagination
          visible={response?.content?.length > 0 && response?.content?.length}
          activePage={+router.query.page || 1}
          onSelect={handlePaginateChange}
          maxButtons={7}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={+response?.totalElements}
        />
        </div>
      </section>
    </Layout>
  );
}
