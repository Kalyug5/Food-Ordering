import React from "react";

import classes from './AvailableMeals.module.css'
import MealsItem from "./MealsItme";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chole-Bhature',
      description: 'Spicy Chole with Crispy Bhature',
      price: 150,
    },
    {
      id: 'm2',
      name: 'Masala-Dosa',
      description: 'A Southern specialty!',
      price: 100,
    },
    {
      id: 'm3',
      name: 'Biryani',
      description: 'Just Have it..',
      price: 150,
    },
    {
      id: 'm4',
      name: 'Green-Bowl',
      description: 'Healthy...and green...',
      price: 80,
    },
  ];

  const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((item)=>(
        <MealsItem name={item.name} key={item.id} price={item.price} description={item.description} id={item.id}/>
    ))

    return (
        <section className={classes.section}>
        <ul className={classes.ul}>{mealsList}</ul>
        </section>
    )

  }

  export default AvailableMeals