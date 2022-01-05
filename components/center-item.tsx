import React from 'react';
import { ICenter } from '@model/center.model';
import { Address } from '@components/address';
import Link from 'next/link';

interface ICenterItemProps {
  center?: ICenter;
}

export const CenterItem = (props: ICenterItemProps) => {
  const { center } = props;

  return (
    <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image">
          <Link href="/centers/[id]" as={`/centers/${center.id}`}>
            <a><img src={`data:${center.logoContentType};base64,${center.logo}`} /></a>
          </Link>
        </div>
        <div className="lower-content">
          <h4>
            <Link href="/centers/[id]" as={`/centers/${center.id}`}>
              <a>{center.name}</a>
            </Link>
          </h4>
          <div className="rating">
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star-o" />
            <strong>4.9</strong>
            <i>(70 Review)</i>
          </div>
        </div>
        {/* Overlay Content Box */}
        <div className="overlay-content-box">
          <h4>
            <Link href="/centers/[id]" as={`/centers/${center.id}`}>
              <a>{center.name}</a>
            </Link>
          </h4>
          <div className="rating">
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star-o" />
            <strong>4.9</strong>
            <i>(70 Review)</i>
          </div>
          {center && center.ward ? (
            <div className="text">
              <Address ward={center.ward}/>
            </div>
          ) : ''}
          {center.note ? (
            <div className="text">{center.note}</div>
          ) : ''}
          <div className="btns-box">
            <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
          </div>
        </div>
        {/* End Overlay Content Box */}
      </div>
    </div>
  );
};
