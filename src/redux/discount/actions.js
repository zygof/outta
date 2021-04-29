import discountActions from './constants';
import {storeManager} from '../../utils';
import {discountController} from '../../api/controllers';

export const getAllDiscounts = (filters, userToken) => async dispatch => {
  let discounts = null, errors = null;
  await discountController.getAll (filters, userToken).then (data => {
    if (!data.errors) {
      discounts = data.docs;
      //storeManager.setItem ('discounts', discounts);
    } else {
      console.log ('erreur discounts', data.errors);
      errors = data.errors;
    }
  });

  dispatch ({
    type: discountActions.GET_ALL,
    payload: {discounts, errors},
  });
};

export const getDiscount = (discountId, userToken) => async dispatch => {
  let discount = null, errors = null;
  await discountController.getOne (discountId, userToken).then (data => {
    if (!data.errors) {
      discount = data;
      //storeManager.setItem ('discount', discount);
    } else {
      console.log ('erreur discount', data.errors);
      errors = data.errors;
    }
  });

  dispatch ({
    type: discountActions.GET,
    payload: {discount, errors},
  });
};
