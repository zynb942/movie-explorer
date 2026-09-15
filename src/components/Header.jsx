
import '../App.css';
import AuthModal from './AuthModal';

function Header({onloginclick}) {
    return (
        <header>
            <h2 className='logo'>🎬 CineStream</h2>
            <div className="nav-actions">
                <button className="btn btn-outline">Favorites</button>
                <button className="btn btn-primary" onClick={onloginclick}>Sign In</button>
            </div>
        </header>

    );
}

export default Header;

