import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import {useFormValidator} from './../FormValidator'
import ErrorMessage from './../FormValidator/ErrorMessage'
import { apiHandler } from './../api/apiHandler';

const Login = () => {

    const inputEmailRef = useRef()
    const inputPasswordRef = useRef()
    const [error, setError] = useState('');
    const history = useHistory()

    const initialState = {
        email: null,
        password: null,
        errors: {
            email: '',
            password: ''
        }
    };

    const {
        onHandleChange,
        onHandleSubmit,
        onHandleBlur,
        fields
    } = useFormValidator(initialState)

    useEffect(() => {
        inputEmailRef.current.focus();
    }, []);

    const onLogin = (event) => {

        event.preventDefault()

        if(onHandleSubmit(event)){
            apiHandler("http://localhost:3000/api/userData", "post", fields)
            .then((result) => {
                if(result > 0)
                    history.push('/home')
                else{
                    setError(result);
                    inputEmailRef.current.value = '';
                    inputPasswordRef.current.value = '';
                    inputEmailRef.current.focus();
                }                    
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }    

    const { errors } = fields

    return (
        <div className="text-center" style={{margin: "100px"}}>
            <form className="form-label" onSubmit={(event) => onLogin(event)}>
                <img className="mb-4" src="/assets/public/dist/img/user-login.jpg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3">Please sign in</h1>
                <span style={{color: "red"}}>{error && error}</span>
                <div className="row">
                    <div className="col-md-7 offset-2">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input 
                            ref={inputEmailRef}
                            type="email" 
                            name="email"
                            className="form-control-sm inputText" 
                            placeholder="Email address" 
                            onChange={onHandleChange}
                            onBlur={onHandleBlur} />
                            {errors.email.length > 0 && <ErrorMessage errorMsg={errors.email} />}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 offset-2">
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input 
                            ref={inputPasswordRef}
                            type="password" 
                            name="password" 
                            minLength="3"
                            maxLength="10"
                            className="form-control-sm inputText" 
                            placeholder="Password" 
                            onChange={onHandleChange} 
                            onBlur={onHandleBlur} />
                            {errors.password.length > 0 && <ErrorMessage errorMsg={errors.password} />}
                    </div> 
                </div>
                <div className="m-2">
                    <button className="btn btn-sm btn-primary">Sign in</button>
                </div>
                <p className="mt-4 mb-3 text-muted">&copy; 2021</p>
            </form>
        </div>
    )
}

export default Login
