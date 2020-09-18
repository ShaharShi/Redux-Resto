import React, { useEffect } from "react";
import axios from "axios";
import Meal, { IMeal } from "components/ui-components/meal";
import { addMealAction, getMealsFromServerDone } from "store/meals-reducer/meals.actions";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const state = useSelector((state: any) => state.mealsReducer)
  const dispatch = useDispatch()

  async function getRecipesApi() {
    try {
      const result = await axios.get("http://localhost:5200/meals");
      dispatch(getMealsFromServerDone(result.data));
    } catch (ex) {
      console.log(ex)
    }
  }

  function addMeal(meal: IMeal) {
    dispatch(addMealAction(meal));
  }

  useEffect(() => {
    getRecipesApi();
  }, []);
  
  if (!state.meals) return <span> No Meals </span>;
  return (
    <div className="row">
      {state?.meals.map((meal: any) => {
        return (
          <Meal
            key={meal.name}
            actionTitle="Order Now"
            {...meal}
            action={addMeal}
          />
        );
      })}
    </div>
  );
}
