import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";


import { createPackage } from "../backend";
import { useLoggedInStatus } from "../hooks";
import { inputClassName } from "../helpers";

const NewPackage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [timeslot, setTimeslot] = useState("");
  const [error, setError] = useState("");

  const isLoggedIn = useLoggedInStatus();

  function handleLocationChange(event) {
    const { value } = event.target;
    setLocation(value);
  }
  function handleDestinationChange(event) {
    const { value } = event.target;
    setDestination(value);
  }
  function handleDateChange(value) {
    setDate(value);
  }
  function handleTimeslotChange(value) {
    setTimeslot(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isLoggedIn) {
        // make the API request
        createPackage({location: location, destination: destination, date: date, timeslot: timeslot })
        .then((data) => {
            if (data["package"]) {
            navigate("/dashboard");
            }
        })
        .catch((error) => {
            setError(error["message"]);
        });
    } else {
        navigate('/')
    }
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
                    value={location}
                    onChange={handleLocationChange}
                    name="location"
                    id="location"
                    autoComplete="package-location"
                    className={inputClassName}
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
                    value={destination}
                    onChange={handleDestinationChange}
                    id="destination"
                    autoComplete="destination"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date
                </label>
                <div className="mt-2">
                  <Flatpickr
                      options={{ minDate: new Date(), dateFormat: "Y-m-d", }}
                      className={inputClassName}
                      value={date}
                      onChange={([date]) => {
                        setDate(date);
                      }}
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
                  <Flatpickr
                      options={{ noCalendar: true, enableTime: true, dateFormat: "H:i" }}
                      className={inputClassName}
                      value={timeslot}
                      onChange={([date]) => {
                        setTimeslot(date);
                      }}
                  />
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
