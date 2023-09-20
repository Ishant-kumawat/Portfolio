import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <p className='main'>
                <p id='firstpara'>Hi, my name is</p>
                <p id='secondpara'>Ishant Kumawat.</p>
                <p id='thirdpara'>I build things for the web.</p>
                <p id='forthpara'>I'm a Software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on
                    building accessible, human-centered products at <span id='childforth'>Upstatement</span> .</p>
                    <div className='homebtn' ><button id='homebtn'>Check out My cousre !</button>
                    <span id='homespan'></span></div>    
            </p>
        </div>
    )
}

export default Home
