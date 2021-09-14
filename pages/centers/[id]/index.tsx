import React from 'react';
import { Col, Row } from 'reactstrap';
import Comment from '@components/comment';
import Share from '@components/share';
import { centerService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';

declare type CenterProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const menus = [];
  const center = await centerService.getEntity(id);
  if (center === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { menus, center },
  };
};

function Center({ menus, center, errorCode }: CenterProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    // @ts-ignore
    <Layout menus={menus}>
      <div className="container-fluid view-container">
        {center === null ? (
          <span className="badge badge-danger">error while fetch centers!</span>
        ) : (
          <Row className="mt-4">
            <Col md="8">
              <h1 className="h2">{center.name}</h1>
              <div className="row mb-2">
                <div className="col-md-12">
                  <span className="mr-5">Address: {center.address}</span>
                </div>
                <div className="col-md-12">
                  <span>Note: {center.note}</span>
                </div>
              </div>

              <Share url={`/centers/${center.id}`} title={center.name}/>
              <div className="mt-4" />
              <Comment url={`/centers/${center.id}`} />
            </Col>
          </Row>
        )}
      </div>
    </Layout>
  );
}

export default Center;
