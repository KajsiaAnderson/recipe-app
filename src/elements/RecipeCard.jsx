import React from 'react'
import styles from './RecipeCard.module.css'
import { useNavigate } from 'react-router-dom'


const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return (
        <div className={styles.recipe_card}>
            <div className={styles.recipe_img_container}>
                <img src={recipe.image_url} alt="food" />
            </div>
            <h2>{recipe.recipe_name}</h2>
            <button className={styles.see_btn} onClick={handleClick}>See More</button>
        </div>
    )
}

export default RecipeCard