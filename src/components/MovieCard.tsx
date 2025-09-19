import React from 'react';
import { User, Calendar } from 'lucide-react';
import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-lg border border-purple-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
          {movie.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
          {movie.description}
        </p>

        {/* Genre */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white text-xs font-medium rounded-full">
            {movie.genre}
          </span>
        </div>

        {/* User Info */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">{movie.userName}</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400">
              {new Date(movie.createdAt).toLocaleDateString('fa-IR')}
            </span>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default MovieCard;