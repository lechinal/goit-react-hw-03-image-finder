// import axios from 'axios';

// const API_URL = 'https://pixabay.com/api/';
const API_KEY = '39048619-ebda0ba6411e96e2cff97406c';

export const fetchImages = (query, page) => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=12`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};
