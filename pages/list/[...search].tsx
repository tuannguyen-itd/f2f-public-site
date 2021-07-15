import React from 'react';
import { centerService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import Layout from '@components/layout';
import { Pagination } from '@components/pagination/pagination';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { Centers as ListCenters } from '@components/centers';

declare type SearchProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  const menus = [];
  const response = await centerService.getEntities(
    0, ITEMS_PER_PAGE, null, null,
    { advancedQuery: encodeURI((query.search as string[]).join('/')) },
  );

  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { menus, response, query },
  };
};

function Search({ menus, errorCode, response }: SearchProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  const router = useRouter();

  const url = (page) => {
    const params = Object.entries({
      page: (page || 1) > 1 ? page : false,
    })
      .map(([key, value]) => (value ? `${key}=${value}` : false))
      .filter(s => s)
      .join('&');

    return `/list/${(router.query.search as string[]).join('/')}${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(+value), undefined);

  const { data: centers, total } = response;

  return (
    <Layout menus={menus}>
      <ListCenters data={centers} />

      <Pagination
        visible={centers.length > 0}
        activePage={+router.query.page || 1}
        onSelect={handlePaginateChange}
        maxButtons={5}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={total}
      />
    </Layout>
  );
}

export default Search;
