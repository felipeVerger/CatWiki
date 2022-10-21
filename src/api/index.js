import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    // timeout: 1000,
    headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});

export const getBreeds = (limit) => instance.get(`/breeds?limit=${limit}`).then((response) => response.data).catch((error) => console.log(error));
export const getBreedsByName = (name) => instance.get(`/breeds/search?q=${name}`).then((response) => response.data).catch((error) => console.log(error));
export const getBreedImageById = (id) => instance.get(`/images/${id}`).then((response) => response.data).catch((error) => console.log(error));