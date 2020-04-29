import * as types from './meals.types';
import { MEALS } from '../../data/dummy-data';

const INITAL_STATE = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.FAVORITE_A_MEAL:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload
      );

      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);

        return {
          ...state,
          favoriteMeals: updatedFavoriteMeals,
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload);

        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }

    case types.FILTER_MEALS:
      const appliedFilters = action.payload;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.glutenFree) {
          return false;
        }

        if (appliedFilters.vegan && !meal.vegan) {
          return false;
        }

        if (appliedFilters.vegetarian && !meal.vegetarian) {
          return false;
        }

        if (appliedFilters.lactoseFree && !meal.lactoseFree) {
          return false;
        }

        return true;
      });
      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
      };
    default:
      return state;
  }
};

export default mealsReducer;
