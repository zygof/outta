import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const endpoint = 'franchises/';
const franchiseController = {
  create: (data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.post (apiCredentials.url, endpoint, data, config);
  },
  getOne: (franchiseId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.get (
      apiCredentials.url,
      endpoint + franchiseId,
      config
    );
  },
  getAll: async (userId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return await axiosManager.get (apiCredentials.url, endpoint, config);
  },
  deleteOne: (franchiseId, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.delete (
      apiCredentials.url,
      endpoint + franchiseId,
      config
    );
  },
};

export default franchiseController;
