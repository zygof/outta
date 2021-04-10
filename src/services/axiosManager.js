import axios from 'axios';
const axiosManager = {
  get: async (serverUrl, endpoint, config) => {
    try {
      const response = await axios.get (serverUrl + '/' + endpoint, config);
      return response.data;
    } catch (error) {
      // handle error
      console.log ('error : ' + error.message);
      return;
    } finally {
      // always executed
      console.log ('Finally called');
    }
  },
  post: async (serverUrl, endpoint, data, config) => {
    try {
      const response = await axios.post (
        serverUrl + '/' + endpoint,
        data,
        config
      );
      return response.data;
    } catch (error) {
      // handle error
      console.log ('error : ' + error.message);
      return;
    } finally {
      // always executed
      console.log ('Finally called');
    }
  },
  update: async (serverUrl, endpoint, config) => {
    try {
      const response = await axios.patch (
        serverUrl + '/' + endpoint,
        data,
        config
      );
      return response.data;
    } catch (error) {
      // handle error
      console.log ('error : ' + error.message);
      return;
    } finally {
      // always executed
      console.log ('Finally called');
    }
  },
  delete: async (serverUrl, endpoint, config) => {
    try {
      const response = await axios.delete (serverUrl + '/' + endpoint, config);
      return response.data;
    } catch (error) {
      // handle error
      console.log ('error : ' + error.message);
      return;
    } finally {
      // always executed
      console.log ('Finally called');
    }
  },
};

export default axiosManager;
