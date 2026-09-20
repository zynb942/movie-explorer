import { useState } from "react";
import '../App.css';

const AuthModal = ({ openAuth, onClose, isLogIn, setIsLogIn, users, setUsers , setCurrentUser }) => {
    const [errors, setErrors] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setuserName] = useState('')

    if (!openAuth) { return null; }


    let validationErrors = {}
    let existingUser = null
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) validationErrors.email = 'please entre avalid email';
        if (!password || password.length < 6) validationErrors.password = 'password have to be 6 digits at least';
        if (isLogIn) {
            existingUser = users.find((user) => user.email === email && user.password === password)
            if (!existingUser) { validationErrors.unauthorized = "invalid email or password" 

            }else{setCurrentUser(existingUser); localStorage.setItem("currentUser", JSON.stringify(existingUser))}

        }
        if (!isLogIn) {
            const existingEmail = users.find((user) => user.email === email)
            if (existingEmail) { validationErrors.alreadyExist = "this Email is already exist" }
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        }
        else {
            if (isLogIn) {
                alert('you logged in successfully')
            } else {
                alert('you registered and logged in successfully')
                const newUsers = [...users, { userName, email, password }];
                setUsers(newUsers);
                setCurrentUser({ userName, email, password });
                localStorage.setItem("users", JSON.stringify(newUsers))
                localStorage.setItem("currentUser", JSON.stringify({ userName, email, password }))
            }
            onClose();
            setEmail('')
            setErrors({})
            setPassword('')
            setuserName('')
        }
    }


    return (

        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h4>{isLogIn ? "Welcome Back" : "Create Account"}</h4>
                <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>


                    {!isLogIn && <div style={{ marginBottom: '15px' }}>
                        <input
                            type="text"
                            placeholder="UserName"
                            className="form-input"
                            style={{ width: '100%' }}
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                        />  </div>
                    }

                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="text"
                            placeholder="Email"
                            className="form-input"
                            style={{ width: '100%' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-msg">{errors.email}</p>}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input"
                            style={{ width: '100%' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error-msg">{errors.password}</p>}
                        {errors.unauthorized && <p className="error-msg">{errors.unauthorized}</p>}
                        {errors.alreadyExist && <p className="error-msg">{errors.alreadyExist}</p>}
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button className="btn btn-outline" type="submit">{isLogIn ? "Log In" : "Register"}</button>
                        <button className="btn btn-primary" onClick={onClose} type="button" style={{ background: '#444' }}>Cancel</button>
                    </div>
                </form>

                <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--text-muted)' }}>
                    {isLogIn ? "Don't have an account? " : "Already have an account? "}
                    <a href="#" style={{ color: 'var(--accent)', fontWeight: 600 }} onClick={(e) => { e.preventDefault(); setIsLogIn(!isLogIn); setErrors({}); }}>
                        {isLogIn ? "Sign Up" : "Log In"}
                    </a>
                </div>

            </div>
        </div>

    );
}

export default AuthModal;
