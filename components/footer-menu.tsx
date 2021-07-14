import React from 'react';

interface IFooterMenu {
  title?: string;
  data: any;
}

export default function FooterMenu({ title, data }: IFooterMenu) {
  return (
    <div>
      <h5 className="mt-3">{title}</h5>
      {data?.map((menu, index) => (
        <span key={index}>
          {index > 0 && <span className="py-2 text-muted"> | </span>}
          <a href={menu.url} className="text-muted">{menu.label}</a>
        </span>
      ))}
    </div>
  );
}
