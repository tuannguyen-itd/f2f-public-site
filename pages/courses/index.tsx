import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { courseService } from '@services';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { CourseItem } from '@components/course-item';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { latLngDefault } from '../../config/constants';
import Map from '@components/map';

declare type CoursesProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search, page = 1 }, res }) => {
  const menus = [];
  const response = await courseService.getEntities(
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

export default function Courses({ menus, response, errorCode }: CoursesProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  const { data: courses, total } = response;

  const router = useRouter();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({ lat: latLngDefault.lat, lng: latLngDefault.lng });

  useEffect(() => {
    setLocation({ lat: courses[0]?.lat, lng: courses[0]?.lng });
  }, [courses]);

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

    return `/courses${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value, search), undefined);

  const handleSearchCourses = (event) => {
    event.preventDefault();
    router.push(url(1, search), undefined);
  };

  const onHandleCenterHover = (course) => {
    setLocation({ lat: course.roomTutorBooking.centerRoom.center.lat, lng: course.roomTutorBooking.centerRoom.center.lng });
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
                          <div className="column">
                            <h6>Categories</h6>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-one" />
                                <label htmlFor="radio-one">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Digital Marketing
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-two" />
                                <label htmlFor="radio-two">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Business
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-three" />
                                <label htmlFor="radio-three">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Social Media Marketing
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-four" />
                                <label htmlFor="radio-four">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Design
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-five" />
                                <label htmlFor="radio-five">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  User experience
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-six" />
                                <label htmlFor="radio-six">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  User interface
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-seven" />
                                <label htmlFor="radio-seven">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  IT &amp; Software Courses
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="column">
                            <h6>Instructor</h6>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-eight" />
                                <label htmlFor="radio-eight">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Mahfuz Riad (15)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-nine" />
                                <label htmlFor="radio-nine">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Siful islam
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-ten" />
                                <label htmlFor="radio-ten">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Foqrul Munna (12)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-eleven" />
                                <label htmlFor="radio-eleven">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Mahadi Shopnil (16)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twelve" />
                                <label htmlFor="radio-twelve">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Instructor (8)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-thirteen" />
                                <label htmlFor="radio-thirteen">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Alex Saim (04)
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="column">
                            <h6>Sort by</h6>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-fourteen" />
                                <label htmlFor="radio-fourteen">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  New Courses
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-fifteen" />
                                <label htmlFor="radio-fifteen">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Old Courses
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-sixteen" />
                                <label htmlFor="radio-sixteen">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Course 2019
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-seventeen" />
                                <label htmlFor="radio-seventeen">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Course 2018
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-eighteen" />
                                <label htmlFor="radio-eighteen">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Course 2017
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="column">
                            <h6>Language</h6>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-nineteen" />
                                <label htmlFor="radio-nineteen">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  English (10)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twenty" />
                                <label htmlFor="radio-twenty">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  French (4)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentyone" />
                                <label htmlFor="radio-twentyone">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  German (5)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentytwo" />
                                <label htmlFor="radio-twentytwo">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Japanese (4)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentythree" />
                                <label htmlFor="radio-twentythree">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Russian (1)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentyfour" />
                                <label htmlFor="radio-twentyfour">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Spanish (6)
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="column">
                            <h6>Price</h6>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentyfive" />
                                <label htmlFor="radio-twentyfive">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  All (90)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentysix" />
                                <label htmlFor="radio-twentysix">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Paid (70)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentyseven" />
                                <label htmlFor="radio-twentyseven">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Free (12)
                                </label>
                              </div>
                            </div>
                            <br />
                            <h6>Level</h6>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentyeight" />
                                <label htmlFor="radio-twentyeight">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Beginner (21)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-twentynine" />
                                <label htmlFor="radio-twentynine">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Intermediate (10)
                                </label>
                              </div>
                            </div>
                            {/* Form Group */}
                            <div className="form-group">
                              <div className="select-box">
                                <input type="checkbox" name="payment-group" id="radio-thirty" />
                                <label htmlFor="radio-thirty">
                                  <span className="default-check" />
                                  <span className="check-icon fa fa-check" />
                                  Expert (4)
                                </label>
                              </div>
                            </div>
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
          <div className="row clearfix">
            <div className="col-md-6">
              <div className="row clearfix">
                {courses.length > 0 ? courses.map((course, index) => (
                  <div onMouseEnter={() => onHandleCenterHover(course)} key={index}>
                    <CourseItem key={index} course={course} />
                  </div>
                )) : ''}
                { !courses?.length ? <h3 className="text-course text-error my-5">No course found!</h3> : '' }
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-sticky">
                <Map mapStyle={{ height: '95vh' }} location={location} />
              </div>
            </div>
          </div>
        </div>
        <Pagination
          visible={courses?.length > 0 && total}
          activePage={+router.query.page || 1}
          onSelect={handlePaginateChange}
          maxButtons={7}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={+total}
        />
      </section>
    </Layout>
  );
}
