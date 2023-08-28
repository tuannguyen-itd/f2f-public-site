import React from 'react';
import { landlordService } from '@services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Layout from '@components/layout';
import Link from 'next/link';
import RatingItem from '@components/rating-item';
import { RoomItem } from '@components/room-item';
import { useRouter } from 'next/router';
import { ITEMS_PER_PAGE } from '../../../shared/util/pagination.constants';
import { Pagination } from '@components/pagination/pagination';
import { ratingService } from "@services/rating.service";

declare type LandlordProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<any, NodeJS.Dict<string>> = async ({ params: { id, page }, res }) => {
  const landlord = await landlordService.getEntity(id);
  const room = await landlordService.getRoomByLandlord(id, +page - 1);
  const rating = await ratingService.getEntities();

  if (landlord === null || room === null) {
    res.statusCode = 404;
    return {
      props: { errorCode: 404 },
    };
  }

  return {
    props: { landlord, room, id, rating },
  };
};

function Landlord({ landlord, room, id, rating, errorCode }: LandlordProps) {
  if (errorCode) return <Error statusCode={errorCode} />;
  console.log(rating)
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
              <li><a href="/">Home</a></li>
              <li><a href="/landlord">Landlord</a></li>
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
            <div className="auto-container">
              <div className="row clearfix">
                {room.length > 0 ? room.map((room, index) => (
                  <RoomItem key={index} room={room} />
                )) : ''
                }
                { !room?.length ? <h3 className="text-course text-error my-5">No course found!</h3> : '' }
              </div>
              {/*<Pagination*/}
              {/*  visible={true}*/}
              {/*  activePage={+router.query.page || 1}*/}
              {/*  onSelect={handlePaginateChange}*/}
              {/*  maxButtons={7}*/}
              {/*  itemsPerPage={ITEMS_PER_PAGE}*/}
              {/*  totalItems={ ITEMS_PER_PAGE}*/}
              {/*/>*/}
            </div>
          </div>
        </section>
        {/* End Course Detail Section */}
      </div>

    </Layout>
  );
}

export default Landlord;
