import React, { useEffect, useState } from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Layout from '@components/layout';
import { centerService, menuService } from '@services';
import { Pagination } from '@components/pagination/pagination';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { Centers as ListCenters } from '@components/centers';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';

declare type CentersProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { search, page = 1 }, res }) => {
  const menus = [];
  const response = await centerService.getEntities(
    +page - 1, ITEMS_PER_PAGE, 'id', 'desc',
    { s: search as string },
  );

  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return { props: { response, menus } };
};

export default function Centers({ menus, response, errorCode }: CentersProps) {
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

    return `/centers${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value, search), undefined);

  const handleSearchCenters = (event) => {
    event.preventDefault();
    router.push(url(1, search), undefined);
  };

  const { data: centers, total } = response;

  return (
    <Layout menus={menus}>
      <form onSubmit={handleSearchCenters}>
        <div className="mb-4">
          <Row>
            <Col>
              <InputGroup>
                <Input
                  autoFocus={true}
                  value={search}
                  onChange={$event => setSearch($event.target.value)}
                  placeholder="Search center by name, tags and fields..." />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </form>

      <ListCenters data={centers} />

      <Pagination
        visible={centers?.length > 0 && total}
        activePage={+router.query.page || 1}
        onSelect={handlePaginateChange}
        maxButtons={7}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={+total}
      />

    </Layout>
  );
}
