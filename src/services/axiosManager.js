import axios from 'axios';
const axiosManager = {
  get: async (endpoint, config = {}) => {
    return await axios
      .get (endpoint, config)
      .then (response => response.data)
      .catch (error => {
        return {
          errors: error.response.data.errors.msg,
        };
      });
  },
  post: async (endpoint, data, config = {}) => {
    return await axios
      .post (endpoint, data, config)
      .then (response => response.data)
      .catch (error => {
        return {
          errors: error.response.data.errors.msg,
        };
      });
  },
  update: async (endpoint, data, config = {}) => {
    return await axios
      .patch (endpoint, data, config)
      .then (response => response.data)
      .catch (error => {
        return {
          errors: error.response.data.errors.msg,
        };
      });
  },
  delete: async (endpoint, config = {}) => {
    return await axios
      .delete (endpoint, config)
      .then (response => response.data)
      .catch (error => {
        return {errors: error.response.data.errors.msg};
      });
  },
};

export default axiosManager;
