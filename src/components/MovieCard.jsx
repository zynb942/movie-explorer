
import '../App.css'

const MovieCard = ({ movie, isFav, onToggleFav, setSelectedMovie }) => {
    return (
        <div className="movie-card" onClick={() => setSelectedMovie(movie)} >

            <div className="card-poster">
                <img src={movie.image} alt={movie.title} />
                <div className='rating-badge'>★ {movie.rating}</div>
                <button className={`fav-card-button ${isFav ? 'is-fav' : ''}`} onClick={(e) => {
                    e.stopPropagation(); onToggleFav(movie)
                }} >♥</button>
            </div>
            <div className="card-info">
                <span className="card-genre">{movie.genre}</span>
                <h3 className="card-title">{movie.title}</h3>
                <div className="card-footer">
                    <span>{movie.year}</span>
                    <span>More Info →</span>
                </div>
            </div>

        </div>


    );
}

export default MovieCard;


