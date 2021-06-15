import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';

export function Membership() {
  const [mail, setMail] = useState('');
  function handleSubmitMembership(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className={styles.membershipContainer}>
      <form onSubmit={handleSubmitMembership}>
        <span>Join our membership</span>
        <span>to get special offer</span>

        <div>
          <input
            type="text"
            placeholder="Enter your email adress"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button>Join</button>
        </div>
      </form>
    </section>
  );
}