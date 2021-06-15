import styles from './styles.module.scss';

interface Recipe {
  image: string;
  title: string;
}

interface RecipeProps {
  recipe: Recipe;
}

export function Recipe({ recipe }: RecipeProps) {
  
  return (
    <div className={styles.recipeContainer}>
        <img src={recipe.image} alt="Recipe" />

        <div>
          <h3>{recipe.title}</h3>
          
          <button>See Recipe</button>
        </div>
    </div>
  );
}