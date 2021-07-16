import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import Comment from '@components/comment';
import Share from '@components/share';
import { classRoomService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';

declare type ClassRoomProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const menus = [];
  const classRoom = await classRoomService.getEntity(id);
  if (classRoom === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { menus, classRoom },
  };
};

function ClassRoom({ menus, classRoom, errorCode }: ClassRoomProps) {
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <Layout menus={menus}>
      <div className="container-fluid view-container">
        {classRoom === null ? (
          <span className="badge badge-danger">error while fetch classRooms!</span>
        ) : (
          <Row className="mt-4">
            <Col md="8">
              <h1 className="h2">{classRoom.name}</h1>

              <Share url={`/class-rooms/${classRoom.id}`} title={classRoom.name}/>
              <div className="mt-4" />
              <Comment url={`/class-rooms/${classRoom.id}`} />
            </Col>
          </Row>
        )}
      </div>
    </Layout>
  );
}

export default ClassRoom;
