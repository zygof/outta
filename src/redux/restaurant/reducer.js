import restaurantActions from './constants';
import {RestaurantModel} from '../../models';

const initialState = {
  restaurant: RestaurantModel,
  restaurants: [RestaurantModel],
  isCreated: false,
  isUpdated: false,
  isDeleted: false,
  errors: null,
};

export default function restaurantReducer (state = initialState, action) {
  switch (action.type) {
    case restaurantActions.CREATE:
      return {
        ...state,
        isCreated: action.payload.isCreated,
        restaurant: action.payload.restaurant,
        errors: action.payload.errors,
      };
    case restaurantActions.GET:
      return {
        ...state,
        restaurant: action.payload.restaurant,
      };
    case restaurantActions.GET_ALL:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      };
    case restaurantActions.UPDATE:
      return {
        ...state,
        isUpdated: action.payload.isUpdated,
        restaurant: action.payload.restaurant,
      };
    case restaurantActions.DELETE:
      return {
        ...state,
        isDeleted: action.payload.isDeleted,
        restaurant: action.payload.restaurant,
      };
    default:
      return state;
  }
}
