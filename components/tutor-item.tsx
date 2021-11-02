import React from 'react';
import { ITutor } from '@model/tutor.model';
import {Address} from "@components/address";

interface ITutorItemProps {
  tutor?: ITutor;
}

export const TutorItem = (props: ITutorItemProps) => {
  const { tutor } = props;
  return (
    <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image">
          <a href="#">
            <img src={`data:${tutor.userInfo.avatarContentType};base64,${tutor.userInfo.avatar}`} />
          </a>
        </div>
        <div className="lower-content">
          <h4><a href="#">{tutor.userInfo.user.firstName} {tutor.userInfo.user.lastName}</a></h4>
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
          <h4>{tutor.userInfo.user.firstName} {tutor.userInfo.user.lastName}</h4>
          <div className="rating">
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star-o" />
            <strong>4.9</strong>
            <i>(70 Review)</i>
          </div>
          {tutor && tutor.userInfo.ward ? (
            <div className="text">
              <Address ward={tutor.userInfo.ward}/>
            </div>
          ) : ''}
          {tutor.userInfo && tutor.userInfo.note ? (
            <div className="text">{tutor.userInfo.note}</div>
          ) : ''}
        </div>
        {/* End Overlay Content Box */}
      </div>
    </div>
  );
};
