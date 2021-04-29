import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const endpoint = apiCredentials.url + '/users/';
const userController = {
  getUser: (email, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.get (endpoint + email, config);
  },
  createUser: (data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.post (endpoint, data, config);
  },
};

export default userController;
