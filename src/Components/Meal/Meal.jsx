import React from 'react';
import './Meal.css'
const Meal = (props) => {
   const {strMeal} = props.meal
    return (
        <div>
            <h1>Name: {strMeal}</h1>
        </div>
    );
};

export default Meal;