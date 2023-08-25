import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '39048619-ebda0ba6411e96e2cff97406c';

const fetchImages = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `${API_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const images = response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));

    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export { fetchImages };
