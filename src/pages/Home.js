import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';

const Home = () => {
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if(token) {
      redirect('dashboard')
    } else {
      redirect('/')
    }
  }, [token])

  return (
    <div className='container mx-auto py-10 sm:py-20'>
        <LoginForm />
    </div>
  );
};

export default Home;