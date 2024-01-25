import React, { useEffect, useState, useRef } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { CourseItem } from '@components/course-item';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { latLngDefault } from '../../config/constants';
import Map from '@components/map';
import AddressSelector, { IAddressState } from '@components/address-selector/address-selector';
import { courseService } from '@services';
import FilterRange from "@components/filters/filter-range";

declare type CoursesProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { page = 1, search, provinceId, districtId,  wardId, minPrice, maxPrice }, res }) => {
  const menus = [];
  const response = await courseService.getAllCourse(
    +page - 1, ITEMS_PER_PAGE, 'id', 'desc', search, provinceId || null , districtId || null , wardId || null, minPrice || null , maxPrice || null);
  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return { props: { response, menus } };
};

export default function Courses({ menus, response, errorCode }: CoursesProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  const router = useRouter();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({ lat: latLngDefault.lat, lng: latLngDefault.lng });
  const [address, setAddress] = useState({} as IAddressState);
  const [wardId, setWardId] = useState<number>();
  const [districtId, setDistrictId] = useState<number>();
  const [provinceId, setProvinceId] = useState<number>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isInitialLoad = useRef(true);
  const [filterValues, setFilterValues] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  useEffect(() => {
    if (!isInitialLoad.current) {
      setWardId(address.wardId);
      setDistrictId(address.districtId);
      setProvinceId(address.provinceId);
      router.push(url(1, null, address.provinceId, address.districtId, address.wardId, filterValues.minPrice, filterValues.maxPrice), undefined);
    } else {
      isInitialLoad.current = false;
    }
  }, [address, provinceId, districtId, wardId, filterValues]);

  const url = (page, searchStr, provinceId, districtId, wardId, minPrice, maxPrice) => {
    const params = Object.entries({
      provinceId,
      districtId,
      wardId,
      minPrice,
      maxPrice,
      page: (page || 1) > 1 ? page : false,
      search: searchStr,
    })
      .map(([key, value]) => (value ? `${key}=${value}` : false))
      .filter(s => s)
      .join('&');
    return `/courses${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value, search, provinceId, districtId, wardId, filterValues.minPrice, filterValues.maxPrice), undefined);

  const handleSearchCourses = (event) => {
    event.preventDefault();
    router.push(url(1, search, null, null, null, null, null), undefined);
  };
  const handlelocation = (lat, lng) => {
    setLocation({ lat, lng });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    // @ts-ignore
    <Layout menus={menus}>
      <section className="courses-page-section style-two overflow-auto">
        <div className="auto-container">
          {/* Filter Box */}
          <div className="filter-box">
            <div className="box-inner d-flex">
              <div className="d-flex w-100 position-relative">
                <div className="btn mr-2" style={{ border: '1px solid #43b97e', color: '#43b97e' }} onClick={toggleFilter} >
                  <span className="icon flaticon-filter-filled-tool-symbol" />
                  &nbsp; Filter &nbsp;
                  <span className="arrow fa fa-angle-down" /></div>
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
              </div>
              <div className="pull-right text-nowrap">
                <div className="total-course">Tìm thấy <span>{+response?.totalElements}</span> kết quả</div>
              </div>
            </div>
            {isFilterOpen && (
              <div className="position-absolute bg-white shadow p-4 w-100" style={{ zIndex: 100 }} >
                <h5 className="font-weight-bold text-dark">Lọc theo vị trí</h5>
                <div className="d-flex">
                  <AddressSelector onSelect={setAddress} values={address} col="4" className="form-control" />
                </div>
                <FilterRange onFilterChange={(minPrice, maxPrice) => setFilterValues({ minPrice, maxPrice })} />
              </div>
            )}
          </div>
        </div>
        <div className="outer-container">
          <h1 className="w-100 d-flex justify-content-center align-content-center my-5 lower-content">DANH SÁCH CÁC KHÓA HỌC NỔI BẬT</h1>
          <div className="row clearfix d-flex justify-content-center">
            <div className="col-lg-6 col-md-12">
              {response?.content?.length > 0 ? response?.content?.map((courses, index) => (
                <div className="row mb-3 pl-2 pr-2" key={index}  onClick={() => handlelocation(courses?.bookings[0]?.room?.place?.lat, courses?.bookings[0]?.room?.place?.lng)}>
                  <CourseItem course={courses} />
                </div>
              )) : ''}
              { !response?.content?.length ? <h3 className="text-course text-error my-5">No course found!</h3> : '' }
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="map-sticky">
                <Map mapStyle={{ height: '95vh' }} location={location} />
              </div>
            </div>
          </div>
          <Pagination
            visible={response?.content?.length > 0 }
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
