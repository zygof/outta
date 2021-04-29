import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const authController = {
  login: async data => {
    return await axiosManager.post (apiCredentials.url + '/login', data);
  },
  register: async data => {
    return await axiosManager.post (apiCredentials.url + '/register', data);
  },
};

export default authController;
