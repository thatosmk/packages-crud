import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../backend";
import { inputClassName } from "../../helpers/helpers";
import { useLoggedInStatus, useSignIn } from "../../hooks/hooks";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setToken, setExpiry] = useLoggedInStatus();

  const navigate = useNavigate();

  const signInUser = async ({ email, password }) => {
    setLoading(true);
    setError("");
    try {
      const response = await signIn({ email, password });
      return response;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // make the API request
    await signInUser({ email, password }).then((data) => {
      if (data?.token && data?.expiry) {
        setToken(data.token);
        setExpiry(data.expiry);
      } else if (data?.message) {
        setError(data.message);
        setPassword("");
      } else {
        console.error("SOme is weong");
      }
    });

    if (isLoggedIn) {
      navigate("/dashboard");
    }
  };

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmail(value);
  }

  function handlePasswordChange(event) {
    const { value } = event.target;
    setPassword(value);
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-lg border border-gray-300 px-4 py-6 shadow-sm sm:px-12 sm:py-16">
        <h1 className="scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl">
          Login
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Enter your email and password below to login to your account
        </p>
        <div className="my-4 sm:my-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded bg-red-100 px-4 py-3">
                <p className="font-medium text-red-600">{error}</p>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="thato@example.com"
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleEmailChange}
                  value={email}
                  autoComplete="email"
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
