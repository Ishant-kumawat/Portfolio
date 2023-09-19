import './hireme.css'
import React from 'react'

const Hireme = () => {
  return <>
  <div className='container'>
  <div>
  <iframe className='frame' title='homeLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670.185042968712!2d75.76689594771483!3d26.8910550458763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db45dc6f97693%3A0xaa8bb03d90f6e291!2s28%2C%20Saket%20Nagar%2C%20Shyam%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302019!5e0!3m2!1sen!2sin!4v1694886135485!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
  </div>
  <div className='contactfrom'>
    <h1 id='head'>Hire Me</h1>
    <p id='contactmsg'>I'm a Web Developer/FullStack with one years of experience in Angular, React, Asp.net, MsSql, MySql, Azure. Throughout my career, I've had the privilege of working with Kanini Software Solutions, where I've honed my skills and gained valuable insights.</p>
    <form className='contactform'>
    <label>Name</label>    
    <input type='text'></input>
    <br></br>
    <label>Email</label>
    <input type='email'></input>
    <br></br>
    <label>Message</label>
    <textarea placeholder='Message'></textarea>
    <br></br>
    <button id='submit'>Submit</button>
    </form>
  </div>
  </div>
  </>
}

export default Hireme




