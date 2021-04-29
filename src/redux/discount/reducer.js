import discountActions from './constants';
import {DiscountModel} from '../../models';

const initialState = {
  discount: DiscountModel,
  discounts: [DiscountModel],
  isCreated: false,
  isDeleted: false,
  errors: null,
};

export default function discountReducer (state = initialState, action) {
  switch (action.type) {
    case discountActions.CREATE:
      return {
        ...state,
        isCreated: action.payload.isCreated,
        discount: action.payload.discount,
        errors: action.payload.errors,
      };
    case discountActions.GET:
      return {
        ...state,
        discount: action.payload.discount,
      };
    case discountActions.GET_ALL:
      return {
        ...state,
        discounts: action.payload.discounts,
      };
    case discountActions.DELETE:
      return {
        ...state,
        isDeleted: action.payload.isDeleted,
        discount: action.payload.discount,
      };
    default:
      return state;
  }
}
