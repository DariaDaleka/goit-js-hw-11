import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.gallery-search-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);
