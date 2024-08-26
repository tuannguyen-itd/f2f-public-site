import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { latLngDefault } from '../../config/constants';
import { roomService } from '@services/room.service';
import { RoomItem } from '@components/room-item';
import AddressSelector, { IAddressState } from '@components/address-selector/address-selector';
import FilterRange from '@components/filters/filter-range';
import { RoomSlider } from '@components/room-carousel';
import dynamic from 'next/dynamic';

declare type RoomsProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search, page = 1, provinceId, districtId,  wardId,
  minPrice, maxPrice, lat, lng, areaRange }, res }) => {
  const menus = [];
  const response = await roomService.getAllRooms(+page - 1, ITEMS_PER_PAGE, 'id', 'desc', search, provinceId || null,
    districtId || null, wardId || null, minPrice || null, maxPrice || null, lat || null, lng || null, areaRange || null);
  const topRoomseller = await roomService.getTopRoomseller();
  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return { props: { menus, response, topRoomseller } };
};

export default function Rooms({ menus, errorCode, response, topRoomseller }: RoomsProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({ lat: latLngDefault.lat, lng: latLngDefault.lng });
  const [address, setAddress] = useState({} as IAddressState);
  const [wardId, setWardId] = useState<number>();
  const [districtId, setDistrictId] = useState<number>();
  const [provinceId, setProvinceId] = useState<number>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterValues, setFilterValues] = useState({
    minPrice: 0,
    maxPrice: 0,
  });
  const [areaRange, setAreaRange] = useState<string>();

  useEffect(() => {
    setWardId(address.wardId);
    setDistrictId(address.districtId);
    setProvinceId(address.provinceId);

    router.push(url(1, null, address.provinceId, address.districtId, address.wardId, filterValues.minPrice, filterValues.maxPrice, null, null, areaRange), undefined);
  }, [address, provinceId, districtId, wardId, filterValues, areaRange]);

  const url = (page, searchStr, provinceId, districtId, wardId, minPrice, maxPrice, lat, lng, areaRange) => {
    const params = Object.entries({
      provinceId,
      districtId,
      wardId,
      minPrice,
      maxPrice,
      lat,
      lng,
      areaRange,
      page: (page || 1) > 1 ? page : false,
      search: searchStr,
    })
      .map(([key, value]) => (value ? `${key}=${value}` : false))
      .filter(s => s)
      .join('&');
    return `/rooms${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value =>
    +value && router.push(url(+value, search, provinceId, districtId, wardId, filterValues.minPrice, filterValues.maxPrice, location.lat, location.lng, areaRange), undefined);

  const handleSearchCourses = (event) => {
    event.preventDefault();
    router.push(url(1, search, null, null, null, null, null, null, null, null), undefined);
  };

  const onHandleCenterHover = (lat, lng) => {
    setLocation({ lat, lng });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleMapClick = (newLocation) => {
    setLocation(newLocation);
    router.push(url(1, null, address.provinceId, address.districtId, address.wardId, filterValues.minPrice, filterValues.maxPrice, newLocation.lat, newLocation.lng, areaRange), undefined);
  };

  const MapLeaflet = dynamic(() => import('@components/map-leaflet'), { ssr: false });

  const handleAreaRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAreaRange(e.target.value);
  };

  return (
    // @ts-ignore
    <Layout menus={menus}>
      <section className="courses-page-section style-two overflow-auto">
        <div className="auto-container">
          {/* Filter Box */}
          <div className="filter-box">
            <div className="box-inner d-flex box-filter-search">
              <div className="d-flex w-100 position-relative">
                <div className="btn mr-2" style={{ border: '1px solid #43b97e', color: '#43b97e' }} onClick={toggleFilter} >
                  <span className="icon flaticon-filter-filled-tool-symbol" />
                    &nbsp; Lọc &nbsp;
                  <span className="arrow fa fa-angle-down" />
                </div>
                <form style={{ maxWidth: '600px', width: '100%' }} className="d-inline-block mt-1" onSubmit={handleSearchCourses}>
                  <Row>
                    <Col>
                      <InputGroup>
                        <Input
                          autoFocus={true}
                          value={search}
                          onChange={$event => setSearch($event.target.value || '')}
                          placeholder="Tìm lớp học"
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="secondary">Tìm</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                </form>
              </div>
              <div className="pull-right text-nowrap">
                <div className="total-course">Tìm thấy <span>{+response?.totalElements}</span> kết quả</div>
              </div>
            </div>
            {isFilterOpen && (
              <div className="position-absolute bg-white shadow p-4 w-100" style={{ zIndex: 1001 }} >
                <h5 className="font-weight-bold text-dark">Lọc theo vị trí</h5>
                <div className="row">
                  <AddressSelector onSelect={setAddress} values={address} col="4" className="form-control" />
                </div>
                <FilterRange onFilterChange={(minPrice, maxPrice) => setFilterValues({ minPrice, maxPrice })} />
                <h5 className="font-weight-bold text-dark mt-3 mb-3">Lọc theo diện tích</h5>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="areaUnder20"
                          name="areaRange"
                          value="0-20"
                          checked={areaRange === '0-20'}
                          onChange={handleAreaRangeChange}
                        />
                        <label htmlFor="areaUnder20" className="form-check-label">Dưới 20 m²</label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="area20to30"
                          name="areaRange"
                          value="20-30"
                          checked={areaRange === '20-30'}
                          onChange={handleAreaRangeChange}
                        />
                        <label htmlFor="area20to30" className="form-check-label">Từ 20 - 30 m²</label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="area30to50"
                          name="areaRange"
                          value="30-50"
                          checked={areaRange === '30-50'}
                          onChange={handleAreaRangeChange}
                        />
                        <label htmlFor="area30to50" className="form-check-label">Từ 30 - 50 m²</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="area50to70"
                          name="areaRange"
                          value="50-70"
                          checked={areaRange === '50-70'}
                          onChange={handleAreaRangeChange}
                        />
                        <label htmlFor="area50to70" className="form-check-label">Từ 50 - 70 m²</label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="area70to90"
                          name="areaRange"
                          value="70-90"
                          checked={areaRange === '70-90'}
                          onChange={handleAreaRangeChange}
                        />
                        <label htmlFor="area70to90" className="form-check-label">Từ 70 - 90 m²</label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="areaOver90"
                          name="areaRange"
                          value="90"
                          checked={areaRange === '90'}
                          onChange={handleAreaRangeChange}
                        />
                        <label htmlFor="areaOver90" className="form-check-label">Trên 90 m²</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="outer-container">
          <h4 className="d-flex mb-4 lower-content list-item-title justify-content-center">DANH SÁCH CÁC PHÒNG NỔI BẬT</h4>
          <div>
            <RoomSlider room={topRoomseller?.data} size={4} />
          </div>
          <h4 className="d-flex mb-4 lower-content list-item-title mt-5">DANH SÁCH PHÒNG</h4>
          <div className="row clearfix d-flex justify-content-center">
            <div className="col-lg-6 col-md-12">
              {response && response?.content?.length > 0 ? response?.content?.map((room, index) => (
                <div className="row mb-3 pl-2 pr-2" onClick={() => onHandleCenterHover(room?.lat, room?.lng)} key={index}>
                  <RoomItem room={room} />
                </div>
              )) : ''}
              {!response?.content?.length ? <h3 className="text-room text-error my-5">No room found!</h3> : ''}
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="map-sticky">
                {/*<Map mapStyle={{ height: '95vh' }} location={location} />*/}
                <MapLeaflet location={location} onMapClick={handleMapClick}/>
              </div>
            </div>
          </div>
          {response.totalPages > 1 ?
            <Pagination
            visible={response?.content?.length > 0 && response?.content?.length}
            activePage={+router.query.page || 1}
            onSelect={handlePaginateChange}
            maxButtons={7}
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={+response?.totalElements}
            />
          : ''}
        </div>
      </section>
    </Layout>
  );
}
