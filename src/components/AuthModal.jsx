import { useState } from "react";
import '../App.css';

const AuthModal = ({ openAuth , onClose }) => {
    const [ errors, setErrors ] = useState({})
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    if (!openAuth) { return null; }


    let validationErrors = {}
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) validationErrors.email= 'please entre avalide email' ;
        if (password.length < 6) validationErrors.password= 'password have to be 6 digits at least' ;
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        }
        else {
            alert('you logged in successfully')
            onClose();
            setEmail('')
            setErrors({})
            setPassword('')
        }
    }


    return (

        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e)=>e.stopPropagation()}>
                <h4>LogIn</h4>
                <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="text"
                            placeholder="Email"
                            style={{ width: '100%' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="password"
                            placeholder="Password"
                            style={{ width: '100%' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button className="btn btn-outline" type="submit">Submit</button>
                        <button className="btn btn-primary" onClick={onClose} type="button" style={{ background: '#444' }}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default AuthModal;
