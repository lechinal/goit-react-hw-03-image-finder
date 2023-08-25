import React, { useState, useEffect } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import { fetchImages } from 'api/api';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    setLoading(true);

    fetchImages(searchQuery, page)
      .then(newImages => {
        setImages(prevImages => [...prevImages, ...newImages]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, [searchQuery, page]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar />
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Button />
      <Modal />
    </div>
  );
};
