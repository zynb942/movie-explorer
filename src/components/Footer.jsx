import '../App.css';

const Footer = () => {
    return (
        <footer>
            <div className='container footer-content'>
                <div>
                    <div className='logo' style={{ fontSize: 18, marginBottom: 8 }}> <span>🎬</span> CineStream </div>
                    <p>Your ultimate destination for movies & TV series streaming.</p>
                </div>
                <p>© 2026 CineStream Inc. Built with React</p>
            </div>

        </footer>

    );
}

export default Footer;