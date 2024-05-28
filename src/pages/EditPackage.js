import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditPackage = () => {
    const navigate = useNavigate();

    return (
        <div className='container mx-auto py-10 sm:py-20'>
            <h1 className='scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl'>Edit package</h1>
            <p className="mt-1 text-sm lg:text-base leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                                <div className="mt-2">
                                    <input type="text" name='location' id='location' autoComplete='package-location' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Destination</label>
                                <div className="mt-2">
                                    <input type="text" name="destination" id="destination" autoComplete="destination" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                                <div className="mt-2">
                                    <input id="date" name="date" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Time</label>
                                <div className="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 my-6">
                    <button type="submit" className="inline-flex items-center justify-center shadow-sm rounded-md leading-4 text-sm lg:text-base font-normal bg-gray-900 text-white px-4 py-2">Add package</button>
                    <button onClick={() => { navigate('/dashboard') }} className="inline-flex items-center justify-center shadow-sm rounded-md leading-4 text-sm lg:text-base font-normal bg-white text-gray-800 px-4 py-2">Cancel</button>
                </div>
            </form>

        </div>
    );
};

export default EditPackage;
