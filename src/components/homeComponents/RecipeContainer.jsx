import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from 'react'
import RecipeCard from "../../elements/RecipeCard";
import styles from './RecipeContainer.module.css'

const RecipeContainer = ({ recipes }) => {
    const [search, setSearch] = useState('')

    const recipeDisplay = recipes
        .filter((recipe, index) => {
            let title = recipe.recipe_name.toLowerCase()
            let searchParams = search.toLowerCase()
            return title.includes(searchParams)
        })
        .map((recipe, index) => {
            return <RecipeCard
            key={recipe.recipe_id}
            recipe={recipe} />
        })

    return (
        <section className={styles.recipe_section}>
            <span className={styles.search_bar}>
                <AiOutlineSearch size="2em" color="rgb(223, 120, 10)" />
                <input
                    className={styles.search_input}
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search for a Recipe'
                />
            </span>
            <div className={styles.recipe_container}>
                {recipeDisplay.length !== 0 ? recipeDisplay : <h3>No recipes found</h3>}
            </div>
        </section>
    )
}

export default RecipeContainer