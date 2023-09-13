import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';
const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div className='meals'>
                <h3 style={{textAlign:'center'}}>Meal Found: {meals.length}</h3>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;