
import '../App.css';


function Header({ onloginclick, currentUser , setIsLogIn , onLogout }) {
    return (
        <header>
            <h2 className='logo'>🎬 CineStream</h2>
            <div className="nav-actions">
                {currentUser ? (
                    <>
                        <span className='username'>Welcome, {currentUser.userName}</span>
                        <button className="btn btn-outline">Favorites</button>
                        <button className="btn btn-primary" onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className="btn btn-outline" onClick={()=>{setIsLogIn(true);  onloginclick()}}>Sign In</button>
                        <button className="btn btn-primary" onClick={()=>{setIsLogIn(false);  onloginclick()}}>Sign up</button>
                    </>
                )
                }
            </div>
        </header >

    );
}

export default Header;

