
import '../App.css';


function FavoriteDrawer({ favorites, onClose, onRemove, onSelect }) {

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='drawer' onClick={(e) => { e.stopPropagation(); }}>
                <div className="drawer-header">
                    <h3 style={{ fontSize: 18 }}>My Watchlist ({favorites.length})</h3>
                    <button className="modal-close" style={{ position: 'static' }} onClick={onClose}>✕</button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {favorites.length === 0 ?
                        (
                            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: 40 }}>Your watchlist is empty.</p>
                        ) : (
                            favorites.map((m) => (
                                <div key={m.id} className="fav-item" onClick={() => { onSelect(m); onClose(); }}>
                                    <img src={m.image} alt={m.title} />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: 14 }}>{m.title}</h4>
                                        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.genre} • {m.year}</span>
                                    </div>
                                    <button
                                        style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: 8 ,fontSize: '28px' }}
                                        onClick={(e) => { e.stopPropagation(); onRemove(m) }}>🗑</button>
                                </div>
                            ))
                        )

                    }
                </div>

            </div>

        </div>

    );

}

export default FavoriteDrawer;

