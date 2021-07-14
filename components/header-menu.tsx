import React from 'react';
import { IMenu } from '@model/menu.model';

interface IHeaderMenu {
  menus: IMenu[];
}

export default function HeaderMenu({ menus }: IHeaderMenu) {
  return (
    <div className="nav-scroller py-1 mb-4">
      <nav className="nav d-flex">
        {menus?.map((menu, index) => (
          <span key={index}>
            { index ? <span className="py-2 px-1 text-muted">|</span> : '' }
            <a href={menu.url} className="p-2 text-muted">{menu.label}</a>
          </span>
        ))}
      </nav>
    </div>
  );
}
