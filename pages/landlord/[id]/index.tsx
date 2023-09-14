import React from 'react';
import { landlordService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import { LandlordRoomItem } from '@components/landlord-room-item';
import { useRouter } from 'next/router';
import Link from 'next/link';

declare type LandlordProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id, page }, res }) => {
  const landlord = await landlordService.getEntity(id);
  const room = await landlordService.getRoomByLandlord(id, +page - 1);

  if (landlord === null || room === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { landlord, room, id },
  };
};

function Landlord({ landlord, room, id, errorCode }: LandlordProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  const router = useRouter();

  const url = (id, page) => {
    const params = Object.entries({
      page: (page || 1) > 1 ? page : false,
    })
      .map(([key, value]) => (value ? `${key}=${value}` : false))
      .filter(s => s)
      .join('&');
    return `/landlord/${id}${params ? `?${params}` : ''}`;
  };

  const handlePaginateChange = value => +value && router.push(url(id, +value), undefined);

  return (
    // @ts-ignore
    <Layout>
      <div>
        <section className="contact-banner-section">
          <div className="pattern-layer-one" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-5.png)' }} />
          <div className="pattern-layer-two" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-6.png)' }} />
          <div className="pattern-layer-three" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-4.png)' }} />
          <div className="pattern-layer-four" style={{ backgroundImage: 'url(/theme/template/images/icons/icon-8.png)' }} />
          <div className="auto-container">
            {/* Page Breadcrumb */}
            <ul className="page-breadcrumb">
              <Link href="/" as={'/'}>
                <li><a >Home</a></li>
              </Link>
              <Link href="/landlord" as={'/landlord'}>
                <li><a>Landlord</a></li>
              </Link>
              <li>{landlord?.name}</li>
            </ul>
            <div className="d-flex flex-wrap mb-4">
              <div className="flex-shrink-0 position-relative">
                <img src={`data:${landlord?.logoContentType};base64,${landlord?.logo}`} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h4>{landlord?.name}</h4>
                {landlord?.note}
              </div>
            </div>
            <h2 className="text-dark mt-5 mb-4">Danh Sách Phòng Của {landlord?.name}</h2>
            <div className="auto-container">
              <div className="row clearfix">
                {room.length > 0 ? room.map((room, index) => (
                  <LandlordRoomItem key={index} room={room} />
                )) : ''
                }
                { !room?.length ? <h3 className="text-course text-error my-5">No room found!</h3> : '' }
              </div>
            </div>
          </div>
        </section>
        {/* End Course Detail Section */}
      </div>

    </Layout>
  );
}

export default Landlord;
