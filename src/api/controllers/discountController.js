import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const endpoint = apiCredentials.url + '/discounts/';
const discountController = {
  create: (data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.post (endpoint, data, config);
  },
  update: (discountId, data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.update (endpoint + discountId, data, config);
  },
  rating: (discountId, data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.update (
      endpoint + 'rating/' + discountId,
      data,
      config
    );
  },
  getOne: (discountId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.get (endpoint + discountId, config);
  },
  getAll: async (filters = [], access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    let params =
      'populate={"path": "food", "populate": {"path": "franchise", "populate": "category"}}' +
      '&populate={"path": "food", "populate": {"path": "ingredients", "populate": "category"}}' +
      '&populate={"path": "exception", "select": "location"}' +
      '&populate={"path": "food", "populate": "category"}';
    filters.map (filter => (params += filter));
    return await axiosManager.get (endpoint + '?' + params, config);
  },
  deleteOne: (discountId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.delete (endpoint + discountId, config);
  },
};

export default discountController;
