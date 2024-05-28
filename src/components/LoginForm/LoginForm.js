import { Component } from 'react';
import { useForm } from "react-hook-form";

class LoginForm extends Component {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    render() {
      return (
          <div className="max-w-lg mx-auto">
            <div className="rounded-lg border border-gray-300 shadow-sm px-4 sm:px-12 py-6 sm:py-16">
              <h1 className="scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl">Login</h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Enter your email and password below to login to your account</p>
              <div className="my-4 sm:my-8">
                <form className="space-y-6" onSubmit={}>
                  <div>
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                      <div class="mt-2">
                      <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                  </div>

                  <div>
                      <div class="flex items-center justify-between">
                      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                      <div class="text-sm">
                          <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                      </div>
                      </div>
                      <div class="mt-2">
                      <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                  </div>

                  <div>
                      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      );
    };
};

export default LoginForm;