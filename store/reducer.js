import { combineReducers } from 'redux';
import mealsReducer from './meals/meals.reducer';

const rootReducer = combineReducers({
  mealsReducer: mealsReducer,
});

export default rootReducer;
