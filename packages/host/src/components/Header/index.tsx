import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <a href="/">E-Commerce</a>
      </div>
      <nav className={styles.nav}>
        <a href="/products" className={styles.link}>
          Products
        </a>
        <a href="/favorites" className={styles.link}>
          Favorites
        </a>
        <a href="/cart" className={styles.link}>
          Cart
        </a>
      </nav>
      <div className={styles.icons}>
        <a href="/favorites">Favorites</a>
        <a href="/cart">Cart </a>
      </div>
    </div>
  </header>
);
