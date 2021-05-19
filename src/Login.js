import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //some fancy login shiit
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //fancy register shiit

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //if everything came back good and user successfully created
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/" >
                <img
                    className="login_logo"
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon" />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button type="submit" onClick={signIn} className="login_signinButton">SignIn</button>
                </form>
                <p>
                    By signing in you agree to REPLICA amazon's terms and use
                </p>

                <Link style={{ textDecoration: 'none' }} to='/register'>
                    <button className="login_registerButton">Create amazon account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
