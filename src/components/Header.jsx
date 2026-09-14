
import '../App.css';

function Header() {
    return (
        <header>
            <h2 className='logo'>🎬 CineStream</h2>
            <div className="nav-actions">
                <button className="btn btn-outline">Favorites</button>
                <button className="btn btn-primary">Sign In</button>
            </div>
        </header>

    );
}

export default Header;

