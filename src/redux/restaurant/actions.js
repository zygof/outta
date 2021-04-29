import restaurantActions from './constants';
import {storeManager} from '../../utils';
import {restaurantController} from '../../api/controllers';

export const getAllRestaurants = (filters, userToken) => async dispatch => {
  let restaurants = null, errors = null;
  await restaurantController.getAll (filters, userToken).then (data => {
    if (!data.errors) {
      restaurants = data.docs;
      //storeManager.setItem ('restaurants', restaurants);
    } else {
      console.log ('erreur restaurants', data.errors);
      errors = data.errors;
    }
  });

  dispatch ({
    type: restaurantActions.GET_ALL,
    payload: {restaurants, errors},
  });
};

export const getRestaurant = (restaurantId, userToken) => async dispatch => {
  let restaurant = null, errors = null;
  await restaurantController.getOne (restaurantId, userToken).then (data => {
    if (!data.errors) {
      restaurant = data;
      console.log ('restaurant', restaurant);
      //storeManager.setItem ('restaurant', restaurant);
    } else {
      console.log ('erreur restaurant', data.errors);
      errors = data.errors;
    }
  });

  dispatch ({
    type: restaurantActions.GET,
    payload: {restaurant, errors},
  });
};
