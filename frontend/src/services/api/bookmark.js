import axios from 'axios';

const bookmarkApi = axios.create({
  baseURL: 'http://localhost:5000/api/', // Replace with your backend URL
  withCredentials: true,
});

export const login = async (credentials) => {
  const response = await bookmarkApi.post('auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await bookmarkApi.post('auth/register', userData);
  return response;
};

export const getBookmarks = async () => {
  const response = await bookmarkApi.get('/bookmarks');
  return response.data;
};

// its working post code
// axios.post('http://localhost:5000/api/auth/register/', {

//     fullname:fullName,
//     username:username,
//     email:email,
//     password:password,
//     role:'normal'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
