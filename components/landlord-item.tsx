import React from 'react';
import { ILandlord } from '@model/landlord.model';
import { Address } from '@components/address';
import Link from 'next/link';

interface ILandlordProps {
  landlord?: ILandlord;
}

export const LandlordItem = (props: ILandlordProps) => {
  const { landlord } = props;
  return (
    <div className="course-block-three col-lg-12">
      <div className="inner-box">
        <div className="image d-flex justify-content-center align-items-center h-100">
          <Link href="/landlord/[id]" as={`/landlord/${landlord.id}`}>
            {landlord.logo ? (
              <a><img src={`data:${landlord.logoContentType};base64,${landlord.logo}`} /></a>
            ) : (
              <a href="#"><img src="/theme/template/images/resource/author-9.jpg" /></a>
            )}
          </Link>
        </div>
        <div className="content">
          {landlord.name ? (
            <Link href="/landlord/[id]" as={`/landlord/${landlord.id}`}>
              <h2><a>{landlord.name}</a></h2>
            </Link>
          ) : ''}
          {landlord.note ? (
            <div className="text">
              {landlord.note.length > 150 ? (
                <p>{landlord.note.slice(0, 150)}...</p>
              ) : (
                <p>{landlord.note}</p>
              )}
            </div>
          ) : ''}
          <Link href="/landlord/[id]" as={`/landlord/${landlord.id}`}>
            <a className="theme-btn btn-style-one mt-2"><span className="txt">Chi Tiết</span></a>
          </Link>
        </div>
      </div>
    </div>
  );
};
