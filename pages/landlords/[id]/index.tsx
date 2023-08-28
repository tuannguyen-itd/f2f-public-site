import React, { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import Link from 'next/link';
import { landlordService } from '@services/landlord.service';
import { RoomItem } from '@components/room-item';

declare type LandlordProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id }, res }) => {
  const landlord = await landlordService.getEntity(id);

  if (landlord === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { landlord },
  };
};

function Landlord({ landlord, errorCode }: LandlordProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  const [location, setLocation] = useState('');
  const onHandleCenterHover = (room) => {
    setLocation(landlord[0]);
  };
  return (
    <Layout>
      <section className="user-profile-section">
        <div className="auto-container">
          <ul className="page-breadcrumb">
            <li> <Link href={'/'}>
              <a href="/">
                Nhà
              </a>
            </Link>
            </li>
            <li>Người cho thuê</li>
            <li>Thông tin</li>
          </ul>
          <div className="profile-box">
            <div className="box-inner">
              <div className="image">
                {/* tslint:disable-next-line:max-line-length */}
                <img src={landlord.length > 0 ? `data:${landlord[0].place.landlord.logoContentType};base64,${landlord[0].place.landlord.logo}` : ''} alt="" />
              </div>
              <h4>{landlord.length > 0 ? landlord[0].place.landlord.name : 'Unknown Landlord'}</h4>
              <div className="text">{landlord.length > 0 ? landlord[0].place.landlord.note : ''}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses-section-two">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix d-flex justify-content-center">
              {landlord.length > 0 ? (
                landlord.map((room, index) => (
                  <div onMouseEnter={() => onHandleCenterHover(room)} key={index}>
                    <RoomItem room={room} />
                  </div>
                ))
              ) : (
                <h3 className="text-room text-error my-5">No room found!</h3>
              )}

            </div>
          </div>
          {/*<Pagination*/}
          {/*  visible={rooms?.length > 0 && total}*/}
          {/*  activePage={+router.query.page || 1}*/}
          {/*  onSelect={handlePaginateChange}*/}
          {/*  maxButtons={7}*/}
          {/*  itemsPerPage={ITEMS_PER_PAGE}*/}
          {/*  totalItems={+total}*/}
          {/*/>*/}
        </div>
      </section>
    </Layout>
  );
}

export default Landlord;
