import React from 'react';
import { ITutor } from '@model/tutor.model';
import { Address } from '@components/address';
import Link from 'next/link';

interface ITutorItemProps {
  tutor?: ITutor;
}

export const TutorItem = (props: ITutorItemProps) => {
  const { tutor } = props;
  return (
    <div className="course-block-three col-lg-12">
      <div className="inner-box">
        <div className="image">
          <Link href="/tutors/[id]" as={`/tutors/${tutor.id}`}>
            <a><img src={`data:${tutor.userInfo.avatarContentType};base64,${tutor.userInfo.avatar}`} /></a>
          </Link>
        </div>
        <div className="content">
          <h4>
            <Link href="/tutors/[id]" as={`/tutors/${tutor.id}`}>
              <a>{tutor.userInfo.user.firstName} {tutor.userInfo.user.lastName}</a>
            </Link>
          </h4>
          {tutor.totalRate > 0 ? (
            <div className="rating">
              <span className={`fa ${tutor.averageRate > 0 ? 'fa-star' : 'fa-star-o'}`} />
              <span className={`fa ${tutor.averageRate > 1 ? 'fa-star' : 'fa-star-o'}`} />
              <span className={`fa ${tutor.averageRate > 2 ? 'fa-star' : 'fa-star-o'}`} />
              <span className={`fa ${tutor.averageRate > 3 ? 'fa-star' : 'fa-star-o'}`} />
              <span className={`fa ${tutor.averageRate > 4 ? 'fa-star' : 'fa-star-o'}`} />
              <strong>{Number(tutor.averageRate).toFixed(1)}</strong>
              <i>({tutor.totalRate} Đánh giá)</i>
            </div>
          ) : ''}
          {tutor.userInfo && tutor.userInfo.ward ? (
            <div className="text">
              <Address ward={tutor.userInfo.ward}/>
            </div>
          ) : ''}
          {tutor.userInfo && tutor.userInfo.note ? (
            <div className="text">{tutor.userInfo.note}</div>
          ) : ''}
          <Link href="/tutors/[id]" as={`/tutors/${tutor.id}`}>
            <a className="theme-btn btn-style-one"><span className="txt">Xem Hồ Sơ</span></a>
          </Link>
        </div>
      </div>
    </div>
  );
};
