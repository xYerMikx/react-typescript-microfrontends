import { FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';

import { RoutePaths } from '@/constants/routes';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <Link to={RoutePaths.HOME}>E-Commerce</Link>
      </div>
      <nav className={styles.nav}>
        <Link to={RoutePaths.HOME} className={styles.link}>
          Home
        </Link>
        <Link to={RoutePaths.ABOUT} className={styles.link}>
          About
        </Link>
      </nav>
      <div className={styles.icons}>
        <Link to={RoutePaths.FAVORITES}>
          <MdFavorite className={styles.icon} title="Liked Products" />
        </Link>
        <Link to={RoutePaths.CART}>
          <FaShoppingCart className={styles.icon} title="Cart" />
        </Link>
      </div>
    </div>
  </header>
);
