import React from 'react';
import FooterMenu from '@components/footer-menu';
import styles from '@styles/responsive.module.scss';
import { IMenu } from '@model/menu.model';

interface IFooterProps {
  menus: {
    menuItems: IMenu[],
    title: string,
  }[];
}

export default function Footer({ menus }: IFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-4 my-md-3 pt-md-2 border-top mb-3">
      <div className="row">
        <div className="col-lg-3 col-md-12 text-center">
          <img className={`${styles.logo} mb-2`} src="/logo.png" width={150} height={150} />
          <small className="d-block mb-1 text-muted">
            &copy; {year > 2020 ? ` 2020 - ${year} ` : ' 2020 '} copyright {' '}
            <a className={styles.designed} href="/" rel="noopener noreferrer">
              Paper
            </a>
          </small>
          <small className="text-muted">
            Designed by {' '}
            <a className={styles.designed} href="https://itdragons.com/" target="_blank" rel="noopener noreferrer">
              ITDragons
            </a>
          </small>
        </div>
        <div className="col-lg-9 col-md-12">
          {menus?.map((menu, i) => (
            <FooterMenu title={menu.title} data={menu.menuItems} key={i} />
          ))}
        </div>
      </div>
    </footer>
  );
}
