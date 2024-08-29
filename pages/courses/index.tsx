import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { CourseItem } from '@components/course-item';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { latLngDefault } from '../../config/constants';
import dynamic from 'next/dynamic';
import AddressSelector, { IAddressState } from '@components/address-selector/address-selector';
import { courseService } from '@services';
import FilterRange from '@components/filters/filter-range';
import { CategoryService } from '@services/category.service';
import CategoryItem from '@components/category/category-item';

declare type CoursesProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { page = 1, search, provinceId, districtId, wardId, minPrice, maxPrice }, res }) => {
  const menus = [];
  const response = await courseService.getAllCourse(
    +page - 1, ITEMS_PER_PAGE, 'id', 'desc', search, provinceId || null, districtId || null, wardId || null, minPrice || null, maxPrice || null);
  const responseCategory = await CategoryService.getEntities(+page - 1, ITEMS_PER_PAGE, 'id', 'desc');
  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return { props: { response, menus, responseCategory } };
};

export default function Courses({ menus, response, responseCategory, errorCode }: CoursesProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  const router = useRouter();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({ lat: latLngDefault.lat, lng: latLngDefault.lng });
  const [address, setAddress] = useState({} as IAddressState);
  const [wardId, setWardId] = useState<number>();
  const [districtId, setDistrictId] = useState<number>();
  const [provinceId, setProvinceId] = useState<number>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const isInitialLoad = useRef(true);
  const [filterValues, setFilterValues] = useState({
    minPrice: 0,
    maxPrice: 0,
  });
  const filterRef = useRef<HTMLDivElement>(null);
  const filterCategoryRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
        setAddress({} as IAddressState);
      }
      if (filterCategoryRef.current && !filterCategoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };

    if (isFilterOpen || isCategoryOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen, isCategoryOpen]);

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
  const handleLocationChange = (lat, lng) => {
    setLocation({ lat, lng });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleMapClick = (newLocation) => {
    setLocation(newLocation);
  };

  const MapLeaflet = dynamic(() => import('@components/map-leaflet'), { ssr: false });

  return (
    // @ts-ignore
    <Layout menus={menus}>
      <section className="courses-page-section style-two overflow-auto">
        <div className="auto-container">
          {/* Filter Box */}
          <div className="filter-box">
            <div className="box-inner d-flex box-filter-search">
              <div className="d-flex w-100 position-relative">
                <div className="btn mr-2" style={{ border: '1px solid #43b97e', color: '#43b97e' }} onClick={toggleCategory} >
                  &nbsp; Danh Mục &nbsp;
                  <span className="arrow fa fa-angle-down" />
                </div>
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
            {isCategoryOpen && (
              <div ref={filterCategoryRef} className="position-absolute bg-white shadow p-3" style={{ zIndex: 100 }} >
                <h5 className="font-weight-bold text-dark">Danh Mục</h5>
                <div className="d-flex">
                  <CategoryItem category={responseCategory.data} />
                </div>
              </div>
            )}
            {isFilterOpen && (
              <div ref={filterRef} className="position-absolute bg-white shadow p-4 w-100" style={{ zIndex: 100 }} >
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
          <h4 className="d-flex my-2 lower-content">DANH SÁCH CÁC KHÓA HỌC NỔI BẬT</h4>
          <div className="row clearfix d-flex justify-content-center">
            <div className="col-lg-6 col-md-12">
              {response?.content?.length > 0 ? response?.content?.map((courses, index) => (
                <div className="row mb-3 pl-2 pr-2" key={index}  onClick={() => handleLocationChange(courses?.bookings[0]?.room?.place?.lat, courses?.bookings[0]?.room?.place?.lng)}>
                  <CourseItem course={courses} />
                </div>
              )) : ''}
              { !response?.content?.length ? <h3 className="text-course text-error my-5">Không tìm thấy khóa học!</h3> : '' }
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="map-sticky">
                <MapLeaflet location={location} onMapClick={handleMapClick}/>
              </div>
            </div>
          </div>
          {response.totalPages > 1 ?
            <Pagination
              visible={response?.content?.length > 0 }
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
