import React from 'react';
import Layout from '@components/layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';
import { CategoryService } from '@services/category.service';
import Link from 'next/link';

declare type CategoryProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ query: { page = 1 }, res }) => {
  const response = await CategoryService.getEntities(+page - 1, ITEMS_PER_PAGE, 'id', 'desc');
  if (response === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return { props: {  response } };
};

export default function Category({ response, errorCode }: CategoryProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  return (
    <Layout>
      <section className="courses-page-section style-two overflow-auto">
        <div className="auto-container">
          <h4 className="d-flex my-2 lower-content text-dark font-weight-bold">DANH SÁCH CÁC DANH MỤC</h4>
          <div className="d-flex flex-wrap">
            {response?.data?.length > 0 ? response?.data?.map((category, index) => (
              <Link href={`/category${category.slug}`} as={`/category${category?.slug}`}>
                <span key={index} className="category-name">{category?.name}</span>
              </Link>
            )) : ''}
            { !response?.data?.length ? <h3 className="text-course text-error my-5 text-center">Không tìm thấy khóa học!</h3> : '' }
          </div>
        </div>
      </section>
    </Layout>
  );
}
