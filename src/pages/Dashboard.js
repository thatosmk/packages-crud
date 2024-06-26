import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { API_BASE_URL, token, deletePackage, allPackages } from "../backend";
import { useLoggedInStatus } from "../hooks/hooks";

const Dashboard = ({ email }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [packages, setPackages] = useState(null);

  const { isLoggedIn } = useLoggedInStatus();
  const fetchPackages = async () => {
    try {
      const response = await allPackages();
      setLoading(true);
      setPackages(response.packages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const removePackage = async (event, id) => {
    event.preventDefault();
    await deletePackage({ id: id });
  };

  return (
    <div className="container mx-auto py-10 sm:py-20">
      <div className="flex items-center justify-between">
        <h1 className="scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl">
          Welcome back, {email}
        </h1>
        {packages !== undefined && packages !== null && packages.length > 0 && (
          <button
            onClick={() => {
              navigate("/new-package");
            }}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-normal leading-4 text-white shadow-sm lg:text-base"
          >
            Add package
          </button>
        )}
      </div>
      {(packages === undefined ||
        packages === null ||
        packages.length === 0) && (
        <div className="mx-auto my-10 w-full sm:my-20">
          <h4 className="text-center text-lg font-semibold tracking-tight lg:text-2xl">
            You have no packages
          </h4>
          <p className="text-center leading-7 text-gray-400 [&:not(:first-child)]:mt-6">
            Enter your email and password below to login to your account
          </p>
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                navigate("/new-package");
              }}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-normal leading-4 text-white shadow-sm lg:text-base"
            >
              Add package
            </button>
          </div>
        </div>
      )}
      {packages !== null && packages.length > 0 && (
        <div className="mt-4 overflow-scroll shadow ring-1 ring-black ring-opacity-5 sm:mt-12 md:rounded-xl">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Reference Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Destination
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Timeslot
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {packages.map((item) => (
                <tr key={item.id}>
                  <td className="truncate whitespace-nowrap px-6 py-2 text-sm">
                    {item.referenceNumber}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-sm">
                    {item.location}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-sm">
                    {item.destination}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-sm">
                    {item.date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-sm">
                    {item.timeslot}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-sm">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={(e) => {
                          navigate(`/edit-package/${item.id}`);
                        }}
                        className="inline-flex items-center justify-center rounded-md text-sm font-normal leading-4 text-gray-800 shadow-sm hover:text-gray-400 lg:text-base"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          removePackage(e, item.id);
                        }}
                        className="inline-flex items-center justify-center rounded-md text-sm font-normal leading-4 text-red-600 shadow-sm hover:text-red-400 lg:text-base"
                      >
                        Destroy
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Dashboard;
