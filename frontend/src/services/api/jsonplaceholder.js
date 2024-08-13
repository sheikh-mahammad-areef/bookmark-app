import axios from 'axios';

const jsonPlaceholderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = async () => {
    const response = await jsonPlaceholderApi.get('/posts');
    return response.data;
};

export const getPost = async (id) => {
    const response = await jsonPlaceholderApi.get(`/posts/${id}`);
    return response.data;
};

export const getUsers = async () => {
    const response = await jsonPlaceholderApi.get('/users');
    return response.data;
};