
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const API_KEY = '49328321-2a7d7ff1359a5be8e111f7854'; 
const BASE_URL = 'https://pixabay.com/api/';


export const fetchImages = query =>
  axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    })
    .then(response => response.data.hits)
    .catch(error => {
      iziToast.error({
        title: "Error",
        message: "Failed to fetch images. Please try again later!",
        position: "topRight",
      });
      console.error(error);
      throw error;
    });
