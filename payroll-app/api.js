import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const signup = async (username, password) => {
  try {
    const response = await api.post('/signup', { username, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};