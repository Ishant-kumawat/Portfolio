import React from 'react';
import './Socialsites.css';
import fb from '../../assests/img/facebook.png';
import github from '../../assests/img/github.png';
import linkedin from '../../assests/img/linkedin.png';

const Socialsites = () => {
  return <>


    <div className="vertical-line">
      <div className='socaildiv1'>
        <a href="https://github.com/Ishant-kumawat" className="social-link">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/ishant-kumawat-7222b4225" className="social-link">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>

    </div>



    <div className='socialdiv2'><p>Created : Ishant Kumawat</p> </div>
    <div className="vertical-line2">  </div>

  </>
}

export default Socialsites;
