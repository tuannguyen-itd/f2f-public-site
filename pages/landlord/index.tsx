import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { landlordService } from '@services';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { LandlordItem } from '@components/landlord-item';

declare type CoursesProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search, page = 1 }, res }) => {
  const menus = [];
  const response = await landlordService.getEntities(
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

export default function Landlord({ menus, response, errorCode }: CoursesProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  const { data: landlord, total } = response;

  const router = useRouter();
  const [search, setSearch] = useState('');

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

    return `/landlord${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value, search), undefined);

  const handleSearchCourses = (event) => {
    event.preventDefault();
    router.push(url(1, search), undefined);
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
                      <span className="icon flaticon-filter-filled-tool-symbol" />Lọc<span className="arrow fa fa-angle-down" />
                      {/* Filter Categories */}
                      <div className="filter-categories w-50">
                        <div className="clearfix">
                          {/* Column */}
                          <div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="d-inline-block mt-1 leanlord-search" onSubmit={handleSearchCourses}>
                  <Row>
                    <Col>
                      <InputGroup>
                        <Input
                          autoFocus={true}
                          value={search}
                          onChange={$event => setSearch($event.target.value)}
                          placeholder="Tìm Người Cho Thuê" />
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
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="row clearfix">
                {landlord.length > 0 ? landlord.map((landlord, index) => (
                  <div /*onMouseEnter={() => onHandleCenterHover(course)}*/ key={index}>
                    <LandlordItem key={index} landlord={landlord} />
                  </div>
                )) : ''}
                { !landlord?.length ? <h3 className="text-course text-error my-5">No course found!</h3> : '' }
              </div>
            </div>
          </div>
        </div>
        <Pagination
          visible={landlord?.length > 0 && total}
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
