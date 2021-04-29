import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const endpoint = apiCredentials.url + '/restaurants/';
const restaurantController = {
  create: (data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.post (endpoint, data, config);
  },
  update: (restaurantId, data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.update (endpoint + restaurantId, data, config);
  },
  rating: (restaurantId, data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.update (
      endpoint + 'rating/' + restaurantId,
      data,
      config
    );
  },
  getOne: (restaurantId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.get (endpoint + restaurantId, config);
  },
  getAll: async (filters = [], access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    let params = 'populate={"path": "franchise", "populate":"category"}';
    filters.map (filter => (params += filter));
    return await axiosManager.get (endpoint + '?' + params, config);
  },
  deleteOne: (restaurantId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.delete (endpoint + restaurantId, config);
  },
};

export default restaurantController;
