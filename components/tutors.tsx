import React from 'react';
import Link from 'next/link';
import { ITutor } from '@model/tutor.model';

interface ITutors {
  data?: ITutor[];
}

export const Tutors = ({ data }: ITutors) => {
  return (
    <ul className="list-unstyled mt-2">
      {data?.map((tutor, index) => (
        <li className="mb-4" key={index}>
          <Link href="/tutors/[id]" as={`/tutors/${tutor.id}`} key={index}>
            <a>
              <h5 className="mb-2 text-primary">
                <strong>{tutor.userInfo.user.firstName} {tutor.userInfo.user.lastName}</strong>
              </h5>
            </a>
          </Link>
        </li>
      ))}
      { !data?.length ? <h3 className="text-tutor text-error my-5">No tutor found!</h3> : '' }
    </ul>
  );
};
