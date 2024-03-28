import React from 'react';
import { Badge } from 'reactstrap';
import { CourseStatus as StatusEnum  } from '@model/enumerations/course-status.model';

export interface IStatusDetailProps {
  status: StatusEnum;
}

const StatusComponent = ({ status }: IStatusDetailProps) => {
  function color(centerRoomStatus) {
    switch (centerRoomStatus) {
      case StatusEnum.OPEN:
        return 'success';
      case StatusEnum.CLOSE:
        return 'danger';
      default:
        return '';
    }
  }
  return <Badge className="slide-status" color={color(status)}>{status === 'OPEN' ? 'Mở' : 'Đóng'}</Badge>;
};

export default StatusComponent;
