import {axiosManager} from '../../services';
import {apiCredentials} from '../apiCredentials';

const authController = {
  login: data => {
    return axiosManager.post (apiCredentials.url, 'login', data);
  },
  register: data => {
    return axiosManager.post (apiCredentials.url, 'register', data);
  },
};

export default authController;
