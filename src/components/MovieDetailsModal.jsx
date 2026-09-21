
import '../App.css';

function MovieDetailsModal({selectedMovie, onClose, isFav, onToggleFav}) {
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>
                <img className='modal-banner' src={selectedMovie.image} alt={selectedMovie.title} />
                <div className='modal-body'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <span className="hero-tag" style={{ margin: 0 }}>{selectedMovie.genre}</span>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>★ {selectedMovie.rating} / 10</span>
                    </div>
                    <h2 style={{ fontSize: 28, marginBottom: 8 }}>{selectedMovie.title} ({selectedMovie.year})</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 15 }}>{selectedMovie.description}</p>
                    <div>
                        <button className="btn btn-primary" onClick={() => alert("Stream starting soon!")}>
                            ▶ Play Movie</button>
                        <button className={`btn btn-outline ${isFav ? 'is-fav' : ''}`} onClick={() => onToggleFav(selectedMovie)}>
                            {isFav ? "♥ In Favorites" : "♡ Add to Favorites"}</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MovieDetailsModal;
