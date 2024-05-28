import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createPackage } from "../backend";

const NewPackage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [timeslot, setTimeslot] = useState("");
  const [error, setError] = useState("");

  function handleLocationChange(event) {
    const { value } = event.target;
    setLocation(value);
  }
  function handleDestinationChange(event) {
    const { value } = event.target;
    setDestination(value);
  }
  function handleDateChange(event) {
    const { value } = event.target;
    setDate(value);
  }
  function handleTimeslotChange(event) {
    const { value } = event.target;
    setTimeslot(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // make the API request
    createPackage()
      .then((data) => {
        if (data["token"]) {
          // setToken(data['token'])
          navigate("dashboard");
        }
      })
      .catch((error) => {
        setError(error["message"]);
      });
  }

  return (
    <div className="container mx-auto py-10 sm:py-20">
      <h1 className="scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl">
        Add new package
      </h1>
      <p className="mt-1 text-sm leading-6 text-gray-600 lg:text-base">
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12"></div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    autoComplete="package-location"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Destination
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    autoComplete="destination"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Time
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 flex items-center space-x-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-normal leading-4 text-white shadow-sm lg:text-base"
          >
            Add package
          </button>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-normal leading-4 text-gray-800 shadow-sm lg:text-base"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPackage;
