import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthModal from './components/AuthModal';
import initialMovies from './components/api';
import MovieCard from './components/MovieCard';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])

  const [isAuthOpen, setIsAuthOpen] = useState(false)


  useEffect(() => {

    setError(null)
    setLoading(true)

    const timer = setTimeout(() => {
      try {
        setMovies(initialMovies)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }, 3000)
    return () => clearTimeout(timer)

  }, [])

  const toggleFav = (movie) => {
    const isfav = favorites.some((fav) => fav.id === movie.id)
    if (isfav) { favorites.filter((fav) => fav.id !== movie.id) }
    else {
      setFavorites([...favorites, movie])
    }
  }


  const filteredMovies = movies.filter((movie) => {
    const matchCategory = category === 'All' || movie.genre === category;
    const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.genre.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })


  return (
    <div className="App">
      <Header onloginclick={() => { setIsAuthOpen(true) }} />
      <AuthModal openAuth={isAuthOpen} onClose={() => { setIsAuthOpen(false) }} />
      <div className='container'>
        <Hero />

        <div className="controls">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
          </select>
        </div>

        {loading && <div style={{ textAlign: 'center', padding: '40px' }}>Loading movies...</div>}

        {error && <div style={{ color: '#ff4d4d', textAlign: 'center', padding: '40px' }}>{error}</div>}

        <div className="recipes-grid movies-grid">
          {filteredMovies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} isFav={favorites.some((f) => f.id === movie.id)} onToggleFav={toggleFav} />
            )
          })}

        </div>


      </div>


    </div>
  );
}

export default App;
