import React  from 'react';

export const RatingItem = (props) => {
  const { rating } = props;

  return (
    <div className="comment">
      <div className="author-thumb">
        <img src={`data:${rating.userInfo?.avatarContentType};base64,${rating?.userInfo?.avatar}`} />
      </div>
      <div className="comment-info clearfix">
        <strong>{rating.userInfo.user.login}</strong>
        <div className="rating">
          <span className={`fa ${rating.rate > 0 ? 'fa-star' : 'fa-star-o'}`} />
          <span className={`fa ${rating.rate > 1 ? 'fa-star' : 'fa-star-o'}`} />
          <span className={`fa ${rating.rate > 2 ? 'fa-star' : 'fa-star-o'}`} />
          <span className={`fa ${rating.rate > 3 ? 'fa-star' : 'fa-star-o'}`} />
          <span className={`fa ${rating.rate > 4 ? 'fa-star' : 'fa-star-o'}`} />
        </div>
      </div>
      <div className="text"> {rating.comment}</div>
    </div>
  );
};

export default RatingItem;
