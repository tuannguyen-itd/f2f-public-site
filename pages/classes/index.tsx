import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { classRoomService, menuService } from '@services';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { ClassRooms as ListClassRooms } from '@components/classRooms';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';

declare type ClassRoomsProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search, page = 1 }, res }) => {
  const menus = [];
  const response = await classRoomService.getEntities(
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

export default function ClassRooms({ menus, response, errorCode }: ClassRoomsProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

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

    return `/class-rooms${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value, search), undefined);

  const handleSearchClassRooms = (event) => {
    event.preventDefault();
    router.push(url(1, search), undefined);
  };

  const { data: classRooms, total } = response;

  return (
    <Layout menus={menus}>
      <form onSubmit={handleSearchClassRooms}>
        <div className="mb-4">
          <Row>
            <Col>
              <InputGroup>
                <Input
                  autoFocus={true}
                  value={search}
                  onChange={$event => setSearch($event.target.value)}
                  placeholder="Search classRoom by name, tags and fields..." />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </form>

      <ListClassRooms data={classRooms} />

      <Pagination
        visible={classRooms?.length > 0 && total}
        activePage={+router.query.page || 1}
        onSelect={handlePaginateChange}
        maxButtons={7}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={+total}
      />

    </Layout>
  );
}
