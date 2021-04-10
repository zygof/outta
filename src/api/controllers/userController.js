import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const endpoint = 'users/';
const userController = {
  getUser: (email, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.get (apiCredentials.url, endpoint + email, config);
  },
  createUser: (data, access_token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return axiosManager.post (apiCredentials.url, endpoint, data, config);
  },
};

export default userController;
