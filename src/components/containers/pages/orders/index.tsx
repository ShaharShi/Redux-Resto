import React from "react";
import Meal, { IMeal } from "components/ui-components/meal";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { removeMealAction, clearMealsAction } from "store/meals-reducer/meals.actions";
import { useDispatch, useSelector } from "react-redux";

export default function OrdersPage() {
  const state = useSelector((state: any) => state.mealsReducer)
  const dispatch = useDispatch()
  const { orders } = state;

  function removeMeal(meal: IMeal) {
    dispatch(removeMealAction(meal));
  }
  function clearMeals() {
    dispatch(clearMealsAction());
  }
  return (
    <div>
      <h1 className="jumbotron"> Orders </h1>

      <div className="row">
        <div className="col-lg-3">
          <h2>
            Total Price: <Badge variant="secondary">{getTotalCal()} Cal</Badge>
          </h2>
        </div>
        <div className="col-lg-3 float-right pull-right">
          <Button
            className={"pull-right"}
            onClick={() => {
              clearMeals();
            }}
            variant="danger"
            size="lg"
            active
          >
            Clear Orders
          </Button>
        </div>
      </div>
      <div className="row">
        {orders.map((meal: any) => {
          return (
            <Meal
              {...meal}
              cls="danger"
              actionTitle="Remove"
              action={removeMeal}
            />
          );
        })}
      </div>
    </div>
  );

  function getTotalCal() {
    const total = orders.reduce((total: number, order: any) => {
      console.log(parseInt(order.calories));
      if (isNaN(parseInt(order.calories))) return total;
      return total + parseInt(order.calories);
    }, 0);
    return total;
  }

}
