import React, { useState } from 'react';
import Header from './components/Header';
import MovieForm from './components/MovieForm';
import MovieGrid from './components/MovieGrid';
import FloatingAddButton from './components/FloatingAddButton';
import { useMovies } from './hooks/useMovies';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { movies, addMovie } = useMovies();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8 md:py-12">
          <MovieGrid movies={movies} />
        </main>

        <MovieForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={addMovie}
        />

        <FloatingAddButton onClick={() => setIsFormOpen(true)} />
      </div>
    </div>
  );
}

export default App;