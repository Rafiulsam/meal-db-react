import React from 'react';
import './Meal.css'
const Meal = (props) => {
    console.log(props.meal);
    const { strMeal, strMealThumb, strTags } = props.meal
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div style={{ padding: "0 20px" }}>
                <h2>{strMeal}</h2>
                <p>Price: $$$</p>
                <p>Category: {strTags ? strTags :"Unknown" }</p>
            </div>
                <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Meal;