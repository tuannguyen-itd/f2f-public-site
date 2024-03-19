import React from 'react';
import { CategoryService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import { CourseOfCategoryItem } from '@components/course-of-category';

declare type CategoryProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { slug }, res }) => {
  const category = await CategoryService.getCourseByCategory(slug);
  if (category === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { category },
  };
};

function Category({ category, errorCode }: CategoryProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <Layout>
      <section className="courses-page-section style-two overflow-auto">
        <div className="auto-container">
          <h4 className="d-flex my-2 lower-content text-dark" style={{ fontWeight: 'bold' }}>DANH SÁCH CÁC KHÓA HỌC CỦA {category[0]?.name}</h4>
          <div className="row">
            {category?.length > 0 ? category?.map((courses, index) => (
              <CourseOfCategoryItem key={index} course={courses} />
            )) : ''}
            { !category?.length ? <h3 className="text-course text-error my-5 text-center">Không tìm thấy khóa học!</h3> : '' }
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Category;
