import React from 'react'
import './Agency.css'

const Agency = () => {
  return <>
    <div className='Agency'>
      <p className='agencypara'><span id='AgencySpan'>02.</span>I've Worked</p>
      <hr />
      <div className='agencydetails'>

     <p className='agencyname'>Kanini Software Solutions</p>
        <p className='details'>Associate trainee <span id='span1' >@Kanini</span><br />
          <p id='duration'>Febuary 2013 - Present</p>
          <ul className='detailslist'>
        <li id='lidetails'>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
        <li  id='lidetails'>Provide collabrations every way possible , by sharing knoledge and solutions.</li>
      </ul></p>

      </div>

    </div>
  </>
}

export default Agency
