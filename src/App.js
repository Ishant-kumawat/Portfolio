import './App.css';
import React, { useState, useEffect } from 'react';
import Aboutme from './components/Aboutme/Aboutme';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/navbar';
import Hireme from './components/hireme/hireme';
import Socialsites from './components/social-sites/Socialsites';
import DotLoader from 'react-spinners/DotLoader';

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setInterval(() => {
      setloading(false)
    }, 8000);
  }, [])

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
          <Hireme />
          <Socialsites />
        </>
      )}
    </div>
  );
}

export default App;
