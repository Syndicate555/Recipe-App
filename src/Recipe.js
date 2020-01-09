import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <ol>{ingredient.text}</ol>
                ))}
            </ol>
            <h5>Calories per Serving: {calories}</h5>
            <img className={style.image} src={image} alt="" />
        </div>

    );
};

export default Recipe;