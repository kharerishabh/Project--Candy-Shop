import React, { useRef} from 'react';
import classes from './Authentication.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { authActions } from '../../store/auth-slice';
import {useNavigate} from 'react-router-dom'

const Authentication = () => {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.haveAccount)

    const signUpHandler = () => {
        dispatch(authActions.haveAccount())
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        if(!isLoggedIn) {
            try{
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJhOAChYCcfpy6JIHFmGiiffv6ROrlWAg', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if(!response.ok){
                    let errorMessage = 'Signup Failed'
                    throw new Error(errorMessage)
                }
                alert('Your Account has been Created You can login now')
                navigate('/')
            }catch(err){console.log(err.message)}
        }else{
            try{
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJhOAChYCcfpy6JIHFmGiiffv6ROrlWAg', {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok){
                let errorMessage = 'Login failed Please try again'
                throw new Error(errorMessage)
            }
            const data = await response.json()
            const email = enteredEmail.replace('@', '').replace('.', '');
            dispatch(authActions.login({token: data.idToken, email: email}))
            alert('You have successfullt loggedin')
            localStorage.setItem('email', email)
            localStorage.setItem('token', data.idToken)
            navigate('/product')
            console.log('Pro')
            }catch(err){alert(err.message)}
        }
        emailRef.current.value = ''
        passwordRef.current.value = ''
    }

    return (
        <section className={classes.auth}>
            <h1>{isLoggedIn ? 'LogIn' : 'SignUp'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required ref={passwordRef}/>
                </div>
                <div className={classes.actions}>
                    <button type='submit'>{isLoggedIn ? 'Login': 'Signup'}</button>
                </div>
            </form>
            <div className={classes.actions}>
                <button onClick={signUpHandler}>
                    {isLoggedIn ? 'Dont have an account': 'Have an account? Login'}
                </button>
            </div>
        </section>
    )
}
export default Authentication