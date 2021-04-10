import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  return await axios.get(`${baseUrl}/posts`);
};

export const getComments = async () => {
  return await axios.get(`${baseUrl}/comments`);
};

export const getUsers = async () => {
  return await axios.get(`${baseUrl}/users`);
};
