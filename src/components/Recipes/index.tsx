import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Recipe } from '../Recipe';

import styles from './styles.module.scss';

interface Recipe {
  id: string;
  image: string;
  title: string;
}

export function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);                                   

  useEffect(() => {
    api.get('/recipes')
      .then(response => response.data)
      .then(result => setRecipes(result));
  }, []);

  return (
    <section className={styles.recipesContainer}>
      <div className={styles.recipesTitle}>
        <h2>Our Best Recipes</h2>
        <span>Far far away, behind the word mountains, far from the countries</span>
        <span>Vokalia and Consonantia, there live the blind texts.</span>
      </div>

      <div className={styles.gridContainer}>
        { recipes && recipes.map(recipe => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </section>
  )
}