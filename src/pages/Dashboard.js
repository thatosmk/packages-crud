import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Dashboard = ({ firstName, packages }) => {
  const navigate = useNavigate();

  return (
    <div className='container mx-auto py-10 sm:py-20'>
      <div className='flex items-center justify-between'>
        <h1 className='scroll-m-10 text-xl font-bold tracking-tight lg:text-3xl'>Welcome back, {firstName}</h1>
        <button onClick={()=> { navigate('/new-package')}} className='inline-flex items-center justify-center shadow-sm rounded-md leading-4 text-sm lg:text-base font-normal bg-gray-900 text-white px-4 py-2'>Add package</button>
      </div>
      {packages === undefined &&
        <div className='my-10 sm:my-20 w-full mx-auto'>
          <h4 className='text-lg font-semibold text-center tracking-tight lg:text-2xl'>You have no packages</h4>
          <p className="text-gray-400 text-center leading-7 [&:not(:first-child)]:mt-6">Enter your email and password below to login to your account</p>
          <div className='text-center mt-4'>
            <button className='inline-flex items-center justify-center shadow-sm rounded-md leading-4 text-sm lg:text-base font-normal bg-gray-900 text-white px-4 py-2'>Add package</button>
          </div>
        </div>
      }
      {packages !== undefined && packages.length > 0 &&
        <div className='mt-4 sm:mt-12 overflow-scroll shadow ring-1 ring-black ring-opacity-5 md:rounded-xl'>
          <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Reference Number</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Location</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Destination</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Timeslot</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {packages.map((item) => (
                  <tr key={item.id}>
                    <td className='px-6 py-2 text-sm whitespace-nowrap'>{item.referenceNumber}</td>
                    <td className='px-6 py-2 text-sm whitespace-nowrap'>{item.location}</td>
                    <td className='px-6 py-2 text-sm whitespace-nowrap'>{item.destination}</td>
                    <td className='px-6 py-2 text-sm whitespace-nowrap'>{item.date}</td>
                    <td className='px-6 py-2 text-sm whitespace-nowrap'>{item.timeslot}</td>
                    <td className='px-6 py-2 text-sm whitespace-nowrap'>
                      <div className='flex items-center space-x-4'>
                        <button onClick={()=> { navigate('/edit-package')}} className='inline-flex items-center justify-center shadow-sm rounded-md leading-4 text-sm lg:text-base font-normal text-gray-800 hover:text-gray-400'>Edit</button>
                        <button onClick={()=> {}} className='inline-flex items-center justify-center shadow-sm rounded-md leading-4 text-sm lg:text-base font-normal text-red-600 hover:text-red-400'>Destroy</button>
                      </div>
                    </td>
                  </tr>
                ))} 
              </tbody>
          </table>
        </div>
      }
    </div>
  );
};

Dashboard.propTypes = {
  firstName: PropTypes.string.isRequired,
  packages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    referenceNumber: PropTypes.string,
    location: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    timeslot: PropTypes.string
  }))
};

export default Dashboard;