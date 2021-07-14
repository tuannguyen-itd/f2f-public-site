import React from 'react';
import { ICenter } from '@model/center.model';
import Link from 'next/link';

export interface IRelativeCentersWidget {
  title: string;
  centers: ICenter[];
  limit?: number;
}

export default function RelativeCentersWidget({ title, centers, limit = 10 }: IRelativeCentersWidget) {
  const showingCenters = (centers || []).slice(0, limit <= 0 ? centers?.length : limit);
  return (
    <div className="p-3 mb-3 bg-light rounded">
      <h4 className="pb-2 mb-2 font-italic border-bottom">{title}</h4>
      {!(centers && centers.length) && <p>No entry found!</p>}
      <ul className="list-unstyled">
        {showingCenters.map((center, index) => (
          <li key={index} className="my-1">
            <Link href={'/centers/[id]'} as={`/centers/${center.id}`}>
              <a>{center.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
