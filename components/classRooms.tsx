import React from 'react';
import Link from 'next/link';
import { IClassRoom } from '@model/class-room.model';

interface IClassRooms {
  data?: IClassRoom[];
}

export const ClassRooms = ({ data }: IClassRooms) => {
  return (
    <ul className="list-unstyled mt-2">
      {data?.map((classRoom, index) => (
        <li className="mb-4" key={index}>
          <Link href="/class-rooms/[id]" as={`/class-rooms/${classRoom.id}`} key={index}>
            <a>
              <h5 className="mb-2 text-primary">
                <strong>{classRoom.name}</strong>
              </h5>
            </a>
          </Link>
        </li>
      ))}
      { !data?.length ? <h3 className="text-classRoom text-error my-5">No classRoom found!</h3> : '' }
    </ul>
  );
};
