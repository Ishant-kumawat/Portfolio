import React from 'react';
import './Socialsites.css';
import fb from '../../assests/img/facebook.png';
import github from '../../assests/img/github.png';
import linkedin from '../../assests/img/linkedin.png';

const Socialsites = () => {
  return <>
<div className='socialcontainer'>
  <a href="https://www.github.com" className="social-link">
    <img src={github} alt="GitHub" />
  </a>
  <a href="https://www.facebook.com" className="social-link">
    <img src={fb} alt="Facebook" />
  </a>
  <a href="https://www.linkedin.com" className="social-link">
    <img src={linkedin} alt="LinkedIn" />
  </a>
  <div className="vertical-line"></div>
</div>

    
    <div className='socialdiv2'><p>Created : Ishant Kumawat</p> </div>
      <div className="vertical-line2">  </div>
    
    </>
}

export default Socialsites;
