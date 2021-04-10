import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  return await axios.get(`${baseUrl}/posts`);
};
