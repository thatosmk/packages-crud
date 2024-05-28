import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NewPackage from './pages/NewPackage';
import EditPackage from './pages/EditPackage';

function App() {
  let packages = [
    { id: 0, referenceNumber: 'ref345', location: 'Johannesburg', destination: 'Cape Town', date: '24-04-2024', timeslot: '05:03 AM'}
  ]
  return (
    <>
      <div className="container mx-auto py-20 sm:py-32">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard firstName='Thato' packages={packages}/>} />
          <Route path='/new-package' element={<NewPackage />} />
          <Route path='/edit-package' element={<EditPackage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
