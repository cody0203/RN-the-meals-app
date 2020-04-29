import { createAction } from 'redux-actions';
import * as types from './meals.types';

export const filterMeals = createAction(
  types.FILTER_MEALS,
  (payload) => payload
);

export const toggleFavoriteMeal = createAction(
  types.FAVORITE_A_MEAL,
  (payload) => payload
);
