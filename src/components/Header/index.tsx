import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <h1 className={styles.logo}>Healthy Food</h1>
      </Link>

      <nav>
        <Link href="/register">
          <button className={styles.signUp}>REGISTER</button>
        </Link>
      </nav>
    </header>
  );
}