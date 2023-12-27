'use strict';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('.search-input');
const form = document.querySelector('.search-form');
const ul = document.querySelector('.images-list');

// const getInputData = input.addEventListener('input', () => {
//   input.value;
// });

const BASE_URL = new URL('https://pixabay.com/api/');
const KEY = '41487030-c0d4f2e8fae3a5e9414bad560';

const search = form.addEventListener('submit', listener => {
  listener.preventDefault();

  const query = listener.currentTarget.elements.query.value;

  BASE_URL.searchParams.append('key', KEY);
  BASE_URL.searchParams.append('q', query);
  BASE_URL.searchParams.append('image_type', 'photo');
  BASE_URL.searchParams.append('orientation', 'horizontal');
  BASE_URL.searchParams.append('safesearch', 'true');

  fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      input.value = '';
      if (images.hits.length === 0) {
        throw new Error(response.status);
      }
      ul.innerHTML = images.hits.reduce(
        (html, img) =>
          html +
          `
          <li class="images-item">
            <img alt="${img.tags}" src="${img.largeImageURL}" width="360" height="200">
          </li>
            `,
        ''
      );
    })
    .catch(error => {
      ul.innerHTML = '';
      input.value = '';
      console.log(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      iziToast.show({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        color: '#B51B1B',
        iconUrl: './bi_x-octagon.svg',
        iconColor: '#FAFAFB',
        position: 'topRight',
      });
    });
});
