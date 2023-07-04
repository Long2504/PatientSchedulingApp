import axios from 'axios';
import { BASE_API } from '../utils/constants/index.constants';
import Auth from '../utils/helper/auth.helper';

export const ApiCallerPublic = (endpoint, method, body) => {
  return axios({
    method: method,
    url: `${BASE_API}/api/${endpoint}`,
    headers: { 'Content-Type': 'application/json' },
    data: body,
    timeout: 2000,
  });
};

export const ApiCallerPrivate = async (endpoint, method, body) => {
  const token = await Auth.getToken();
  return axios({
    method: method,
    url: `${BASE_API}/api/${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    data: body,
    timeout: 2000,
  });
};