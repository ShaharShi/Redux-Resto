import { combineReducers, compose, createStore } from "redux";
import configReducer from "./config-reducer/config.reducer";
import mealsReducer from "./meals-reducer/meals.reducer";
import commentsReducer from "./comments-reducer/comments.reducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({mealsReducer, configReducer, commentsReducer}), composeEnhancers())