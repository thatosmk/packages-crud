import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useFetchPackage } from "../hooks";
import { inputClassName } from "../helpers";

import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

const EditPackage = () => {
  const navigate = useNavigate();

  const { packageId } = useParams();
  const { data, error, loading } = useFetchPackage({packageId: packageId});

  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [timeslot, setTimeslot] = useState('');

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

  return (
    <div className="container mx-auto py-6 sm:py-10">
      <h1 className="scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl">
        Edit package
      </h1>
      <p className="mt-1 text-sm leading-6 text-gray-600 lg:text-base">
        This information will be displayed publicly so be careful what you
        share.
      </p>
      {(data !== undefined && data !== null) &&
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12"></div>
            <div className="border-b border-gray-900/10 pb-12">
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
                      value={location}
                      defaultValue={data.location}
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
                      defaultValue={data.destination}
                      id="destination"
                      autoComplete="destination"
                      className={inputClassName}
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
                    <Flatpickr
                        options={{ minDate: new Date() }}
                        className={inputClassName}
                        value={data.date}
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
                        options={{ noCalendar: true, enableTime: true }}
                        className={inputClassName}
                        value={data.timeslot}
                        onChange={handleTimeslotChange}
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
              Update package
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
      }
    </div>
  );
};

export default EditPackage;
