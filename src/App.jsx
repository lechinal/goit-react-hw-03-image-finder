import React, { useState } from 'react';

import './styles/styles.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import { fetchImages } from 'api/api';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = query => {
    if (query.trim() !== '') {
      setSearchQuery(query);
      setImages([]);
      setPage(1);
      setIsLoading(true);
      fetchImages(query, 1)
        .then(data => {
          setImages(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching images:', error);
          setIsLoading(false);
        });
    }
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    fetchImages(searchQuery, page + 1)
      .then(data => {
        setImages(prevImages => [...prevImages, ...data]);
        setPage(prevPage => prevPage + 1);
      })
      .catch(error => console.error('Error fetching more images:', error))
      .finally(() => setIsLoading(false));
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && (
        <Button onClick={handleLoadMore} isLoading={isLoading} />
      )}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
