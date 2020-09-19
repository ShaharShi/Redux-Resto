import { IMeal } from "components/ui-components/meal";
import { ACTIONS } from "../actions.config";

export const initMealsState = {
  meals: [],
  orders: [],
  users: [],
  mealPageData: {
    currentMealDisplayed: {},
    commentedMeals: []
  },
  lastOrderTime: "220-07-01",
  anotherConfigurationOption: { startsColor: "red" },
};

interface IProps {
  type: string; // what am i doing
  payload: any; // what am i sending
}

export default function mealsReducer(state: any = initMealsState, action: IProps) {
  switch (action.type) {
    case ACTIONS.ADD_MEAL: {
      const { payload } = action;
      return { ...state, orders: [...state.orders, payload] };
    }
    case ACTIONS.REMOVE_MEAL: {
      const { payload } = action;
      const ordersWithoutDeleteMeal = state.orders.filter(
        (order: IMeal) => order.name !== payload.name
      );
      return { ...state, orders: [...ordersWithoutDeleteMeal] };
    }
    case ACTIONS.CLEAR_MEALS: {
      return { ...state, orders: [] };
    }
    case ACTIONS.GET_MEALS_FROM_SERVER_DONE: {
      const { payload } = action;
      return { ...state, meals: payload };
    }
    case ACTIONS.TRANSFER_MEAL_DATA: {
      const { payload } = action
      return {...state,  mealPageData: { ...state.mealPageData, currentMealDisplayed: payload}}
    }
    case ACTIONS.ADD_COMMENT: {
      const { payload } = action
      return {...state, mealPageData : {...state.mealPageData, commentedMeals: [...state.mealPageData.commentedMeals, payload]}}
    }
    default: {
      return state;
    }
  }
}
