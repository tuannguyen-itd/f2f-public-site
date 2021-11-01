import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import { centerService, classRoomService, tutorService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { CenterItem as ListCenters } from '@components/centers';
import { ClassroomItem as ListClassRooms } from '@components/classRooms';
import { TutorItem as ListTutors } from '@components/tutors';
import { useRouter } from 'next/router';

declare type SearchProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search } }) => {
  const menus = [];
  const centerResponse = await centerService.getEntities(
    0, ITEMS_PER_PAGE, null, null,
    { 'name.contains': search as string },
  );

  const classRoomResponse = await classRoomService.getEntities(
    0, ITEMS_PER_PAGE, null, null,
    { 'name.contains': search as string },
  );

  const tutorsResponse = await tutorService.getEntities(
    0, ITEMS_PER_PAGE, null, null,
    { 'userFirstName.contains': search as string, 'userLastName.contains': search as string },
  );

  return {
    props: { menus, centerResponse, tutorsResponse, classRoomResponse },
  };
};

function Index({ menus, errorCode, centerResponse, classRoomResponse, tutorsResponse }: SearchProps) {
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

    return `/list${params ? `?${params}` : ''}`;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(url(0, search), undefined);
  };

  const { data: centers } = centerResponse;
  const { data: classRooms } = classRoomResponse;
  const { data: tutors } = tutorsResponse;

  return (
    // @ts-ignore
    <Layout menus={menus}>

      <form onSubmit={handleSearch}>
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

      <h1>Trung Tâm</h1>
      <ListCenters data={centers} />

      <h1>Lớp Học</h1>
      <ListClassRooms data={classRooms} />

      <h1>Gia Sư</h1>
      <ListTutors data={tutors} />
    </Layout>
  );
}

export default Index;
