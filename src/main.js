import { fetchImages } from './js/pixabay-api'
import { renderGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const searchQuery = event.target.elements['search-text'].value.trim();

    if (!searchQuery) { 
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return; 
    }

    showLoader();
 
    fetchImages(searchQuery)
        .then(images => {
            renderGallery(images);  
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "An error occurred. Please try again later.",
                position: "topRight",
            });
        })
        .finally(() => {
            hideLoader();
        });
});
