import Link from 'next/link';

import styles from './styles.module.scss';

export function Footer() {

  return (
    <footer className={styles.footerContainer}>
      <h5>© Copyrights 2019 Stack. All Rights Reserved.</h5>

      <div>
        <Link href="/">
          <a>Privacy Policy</a>
        </Link>

        <Link href="/">
          <a>Terms and Conditions</a>
        </Link>
      </div>
    </footer>
  );
}