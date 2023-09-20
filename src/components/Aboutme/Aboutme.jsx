import React from 'react'
import './Aboutme.css'
import ss from "../../assests/img/waist.jpg"

const Aboutme = () => {
  return (
    <div className='container'>
      <div>
        <p id='main-about'>
          <h1 ><span id='aboutspan'>01.</span> About me <hr id='hrtag' /></h1>
          <p id='main-a'>Hello! My name is <span id='aboutspan'>Ishant Kumawat</span> and I enjoy that live on internet.Over period of this time I have learned HTML, CSS, Angular, React, ASP.Net.... </p>
          <p id='main-a'>Fast-Forward to today, and I've had the privilege of working at <a id='web' href="https://kanini.com/">Kanini Software Solutions</a>. My main focus today is <span id='aboutspan'>upscaling</span>
            my skills to produce better products.</p>
          <p id='main-a'>I also developed Wesites like <span id='aboutspan'>Education Portal</span>, <span id='aboutspan'>Doctor and Patient Management System</span>, <span id='aboutspan'>Naruto Anime Blog Website</span>,.... etc.</p>
          <p id='main-a'>Here are a few <span id='aboutspan'>technologies </span>I have used in building these Websites.</p>
          <ul className='listabout'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Angular</li>
            <li>React Js</li>
            <li>ASP.Net</li>
            <li>MS server</li>
            <li>My Sql</li>
            <li>Azurite</li>
          </ul>
        </p>
      </div>
      <div className='imgdiv'>
        <div className='img-container'>
          <img src={ss} alt="" className='img-about' id='img-about' />
        </div>
        <span className='hover-overlay' id='hover-overlay'></span>
      </div>
    </div>
  )
}

export default Aboutme