import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { signIn } from '../../backend';

function useSaveTokenToLocalStorage(initialToken) {
    const [token, setToken] = useState(() => window.localStorage.getItem('token') || initialToken)

    useEffect(() => {
        window.localStorage.setItem('token', token)
    }, [token])

    return [token, setToken]
}

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [token, setToken] = useSaveTokenToLocalStorage('');


    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        // make the API request
        signIn({ email: email, password: password})
          .then((data) => {
            setToken(data.token)
            navigate('dashboard')
          })
          .catch((error) => {
            setError(error['message'])
          })
        
        setPassword('')
    }

    // useEffect(() => {
    // })

    function handleEmailChange(event) {
        const { value } = event.target;
        setEmail(value);
    }

    function handlePasswordChange(event) {
        const { value } = event.target;
        setPassword(value);
    }

    return (
        <div className="max-w-lg mx-auto">
            <div className="rounded-lg border border-gray-300 shadow-sm px-4 sm:px-12 py-6 sm:py-16">
                <h1 className="scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl">Login</h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">Enter your email and password below to login to your account</p>
                <div className="my-4 sm:my-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && 
                          <div className='py-6'>
                            <p className='font-medium'>{error}</p>
                          </div>
                        }
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input placeholder="thato@example.com" id="email" name="email" type="email" onChange={handleEmailChange} value={email} autoComplete="email" required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" value={password} onChange={handlePasswordChange} name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;