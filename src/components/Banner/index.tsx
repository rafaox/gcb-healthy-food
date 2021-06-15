import { FormEvent, useState } from 'react';

import styles from './styles.module.scss';

export function Banner() {
  const [healthyRecipe, setHealthyRecipe] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headline}>
        <span>Ready for</span>
        <span>Trying a new</span>
        <span>recipe?</span>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search healthy recipes"
            value={healthyRecipe}
            onChange={(e) => setHealthyRecipe(e.target.value)}
          />
          <button>
            <div></div>
          </button>
        </form>
      </div>
    </section>
  );
}