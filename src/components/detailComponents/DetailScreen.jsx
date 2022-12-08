import React, { useEffect, useState } from 'react'
import styles from './DetailScreen.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailScreen = () => {
  const [recipe, setRecipe] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <section>
      <div className={styles.detail_banner}
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className={styles.detail_title}>{recipe.recipe_name}</h1>
      </div>

      <div className={styles.detail_text}>
        <div className={styles.ingredients}>
          <h2 className={styles.titles}>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <h2 className={styles.ingredients_titles}>Ingredients</h2>
          {recipe.ingredients && recipe.ingredients.map((ing) => {
            return <h4>{ing.quantity} {ing.ingredient}</h4>
          })}
        </div>
        <div className={styles.instructions}>
          <h2 className={styles.titles}>Instructions</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>

    </section>
  );
};

export default DetailScreen;
