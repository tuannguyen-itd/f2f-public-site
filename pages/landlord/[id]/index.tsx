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
            <div className="w-100 d-flex justify-content-center" style={{ backgroundImage: `url(data:${landlord?.bannerContentType};base64,${landlord?.banner})`,
              backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <img src={`data:${landlord?.logoContentType};base64,${landlord?.logo}`} style={{ width: '200px', borderRadius:'50%', marginTop: '70px', marginBottom: '30px' }}/>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column mb-5 px-5">
              <h2 className="text-dark ">{landlord?.name}</h2>
              <span className="text-dark">  {landlord?.note}</span>
            </div>
            <div className="auto-container">
              <div className="row clearfix">
                {room.length > 0 ? room.map((roomItem, index) => (
                  <LandlordRoomItem key={index} room={roomItem} />
                )) : ''}
                {!room?.length ? <h3 className="text-course text-error my-5">No room found!</h3> : ''}
              </div>
            </div>
          </div>
        </section>
      </div>

    </Layout>
  );
}

export default Landlord;
