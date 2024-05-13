import './App.css';
import React, { useState, useEffect } from 'react';
import Aboutme from './components/Aboutme/Aboutme';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/navbar';
import Hireme from './components/hireme/hireme';
import Socialsites from './components/social-sites/Socialsites';
import DotLoader from 'react-spinners/DotLoader';
import Agency from './components/Agency/Agency';
import Project from './components/Projects/Project';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 2000; 
    const timer = setTimeout(() => {
      setLoading(!navigator.onLine);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setLoading(!navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div id='loader'>
          <DotLoader
            color={'#7FFFD4'}
            loading={loading}
            size={90}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <Aboutme />
          <Agency />
          <Project />
          <Hireme />
          <Socialsites />
        </>
      )}
    </div>
  );
}

export default App;
