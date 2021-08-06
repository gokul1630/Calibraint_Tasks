import axios from 'axios';
import constants from '../constants';

const URL = constants.BACKEND_URL;

const client = async (endPoint, { ...config }) => {
  config.url = `${URL}${endPoint}`;
  const res = await axios(config);
  if (res.statusText === 'OK') {
    return Promise.resolve(res.data);
  } else {
    return Promise.reject(res);
  }
};
export default client;
