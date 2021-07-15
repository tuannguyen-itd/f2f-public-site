import React from 'react';
import Link from 'next/link';
import { ICenter } from '@model/center.model';

interface ICenters {
  data?: ICenter[];
}

export const Centers = ({ data }: ICenters) => {
  return (
    <ul className="list-unstyled mt-2">
      {data?.map((center, index) => (
        <li className="mb-4" key={index}>
          <Link href="/centers/[id]" as={`/centers/${center.id}`} key={index}>
            <a>
              <h5 className="mb-2 text-primary">
                <strong>{center.name}</strong>
              </h5>
            </a>
          </Link>
        </li>
      ))}
      { !data?.length ? <h3 className="text-error my-5">No center found!</h3> : '' }
    </ul>
  );
};
