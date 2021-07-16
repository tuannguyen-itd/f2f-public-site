import React from 'react';
import Link from 'next/link';
import styles from '@styles/home.module.scss';

export default function Header() {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href={'/'}>
            <a className="blog-header-logo text-dark">
              <img src="/logo.png" alt="my image" className={styles.logo}/>
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link href={"/centers"}>
                  <a className="nav-link">
                    Trung Tâm
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/classes"}>
                  <a className="nav-link">
                    Lớp học
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/tutors"}>
                  <a className="nav-link">
                    Giáo Viên
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
