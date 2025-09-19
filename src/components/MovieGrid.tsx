import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types/Movie';

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30 animate-ping"></div>
        </div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">هنوز فیلم یا سریالی اضافه نشده</h3>
        <p className="text-gray-400 max-w-md">
          اولین نفری باشید که فیلم یا سریال مورد علاقه‌تان را با دیگران به اشتراک می‌گذارید
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;