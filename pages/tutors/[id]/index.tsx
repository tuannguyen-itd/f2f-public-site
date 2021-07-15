import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import Comment from '@components/comment';
import Share from '@components/share';
import { tutorService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';

declare type TutorProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const menus = [];
  const tutor = await tutorService.getEntity(id);
  if (tutor === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { menus, tutor },
  };
};

function Tutor({ menus, tutor, errorCode }: TutorProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <Layout menus={menus}>
      <div className="container-fluid view-container">
        {tutor === null ? (
          <span className="badge badge-danger">error while fetch tutors!</span>
        ) : (
          <Row className="mt-4">
            <Col md="8">
              <h1 className="h2">{tutor.userInfo.user.firstName} {tutor.userInfo.user.lastName}</h1>

              <Share url={`/tutors/${tutor.id}`} title={tutor.name}/>
              <div className="mt-4" />
              <Comment url={`/tutors/${tutor.id}`} />
            </Col>
          </Row>
        )}
      </div>
    </Layout>
  );
}

export default Tutor;
