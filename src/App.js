import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NewPackage from './pages/NewPackage';
import EditPackage from './pages/EditPackage';

import { allPackages } from './backend';
import { useState } from 'react';

function App() {
  const packages = () => { allPackages.then(data => data)}


  return (
    <>
      <div className="container mx-auto py-20 sm:py-32">
        <Routes>
          <Route path='/' element={window.localStorage.getItem('token') ? <Navigate to="/dashboard" /> : Home } />
          <Route path='/dashboard' element={window.localStorage.getItem('token') ? <Dashboard firstName='Thato' packages={packages} /> : <Navigate to="/" /> } />
          <Route path='/new-package' element={window.localStorage.getItem('token') ? <NewPackage /> : <Navigate to="/" /> } />
          <Route path='/edit-package' element={window.localStorage.getItem('token') ? <EditPackage /> : <Navigate to="/" /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
