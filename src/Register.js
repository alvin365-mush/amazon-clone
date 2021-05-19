import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from './firebase';
import './Register.css'
import { useStateValue } from './StateProvider';
function Register() {

    const history = useHistory();
    const [firstName, setFirstname] = useState('');
    const [secondName, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [{ basket, user }, dispatch] = useStateValue();
    const isInvalid = firstName === '' || secondName === '' || email === '';

    const register = e => {
        e.preventDefault();

        //fancy register shiit

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //if everything came back good and user successfully created
                console.log(auth);
                if (auth) {
                    db.collection('createdUsers')
                        .doc(user?.uid)
                        .set({
                            firstName: firstName,
                            secondName: secondName,
                            email: email,
                            created: new Date(),
                        })


                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login" >
            <Link to="/" >
                <img
                    className="login_logo"
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon" />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>

                <form>
                    <h5>First name</h5>
                    <input value={firstName} onChange={e => setFirstname(e.target.value)} type="text" />
                    <h5>Second name</h5>
                    <input value={secondName} onChange={e => setSecondname(e.target.value)} type="text" />
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button disabled={isInvalid} type="submit" onClick={register} className="login_signinButton">Register</button>
                </form>
                <p>
                    By Registering in you agree to REPLICA amazon's terms and use
                </p>

                <Link style={{ textDecoration: 'none' }} to='/login'>
                    <button to='/login' className="login_registerButton">Already have an account? login </button>
                </Link>
            </div>
        </div>
    )
}

export default Register
