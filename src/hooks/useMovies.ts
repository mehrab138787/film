import { useState, useEffect } from 'react';
import { Movie, FormData } from '../types/Movie';

const LOCAL_STORAGE_KEY = 'cineshare-movies';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  const saveMovies = (newMovies: Movie[]) => {
    setMovies(newMovies);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newMovies));
  };

  const addMovie = (formData: FormData) => {
    const newMovie: Movie = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      genre: formData.genre,
      userName: formData.userName,
      imageUrl: formData.image ? URL.createObjectURL(formData.image) : getRandomPlaceholder(),
      createdAt: Date.now(),
    };

    const updatedMovies = [newMovie, ...movies];
    saveMovies(updatedMovies);
  };

  return { movies, addMovie };
};

const getRandomPlaceholder = () => {
  const placeholders = [
    'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7991721/pexels-photo-7991721.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7147497/pexels-photo-7147497.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8263297/pexels-photo-8263297.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];
  return placeholders[Math.floor(Math.random() * placeholders.length)];
};