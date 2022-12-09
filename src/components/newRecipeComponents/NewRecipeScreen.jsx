import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import styles from './NewRecipeScreen.module.css'

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }])
    setName("")
    setQuantity("")
  }

  const ingredientChange = (e) => {
    setName(e.target.value)
  }
  const quantityChange = (e) => {
    setQuantity(e.target.value)
  }
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: ""
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values)

    axios.post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    )
  })

  return (
    <section className={styles.add_section}>
      <h1 className={styles.add_title}>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className={styles.add_form} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className={styles.type}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                /> <h6>Cook</h6>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                /> <h6>Bake</h6>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                /> <h6>Drink</h6>
              </span>
            </div>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime" />
              <input
                type="text"
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime" />
              <input
                type="text"
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves" />
            </div>
            <div className={styles.input_ing}>
              <div className={styles.ingredient}>
                <input
                  type="text"
                  placeholder="Ingredient"
                  value={name}
                  onChange={ingredientChange}
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={quantityChange}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button className={styles.add_btn} type="button" onClick={addIngredient}>Add Ingredient</button>
            <textarea
              rows="5"
              placeholder="What are the instructions?"
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button className={styles.add_submit_btn}type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
