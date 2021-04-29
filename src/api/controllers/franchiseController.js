import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const endpoint = apiCredentials.url + '/franchises/';
const franchiseController = {
  create: (data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.post (endpoint, data, config);
  },
  getOne: (franchiseId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.get (endpoint + franchiseId, config);
  },
  getAll: async access_token => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return await axiosManager.get (endpoint, config);
  },
  deleteOne: (franchiseId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.delete (endpoint + franchiseId, config);
  },
};

export default franchiseController;
