import React from 'react'
import home1 from '../images/1.png'
import home2 from '../images/2.png'
import home3 from '../images/3.png'
import {splitText} from '../helper/helper'

const Home = () => {

  const strArr = splitText('CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL')

  return (
    <div className="homeContainer">
      <div className="heroContent">
        <div className="imageContent">
        <img src={home1} alt='home1'/>
        </div>
      
      <div className="subContent">
        <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
        <ul>
          <li>
          C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
          </li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
        </ul>
      <img src={home2} alt='home2'/>
      <p>
      Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
      </p>
      </div>
    
      </div>
      <div className="bottomContent">
        <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h4>
      <img src={home3} alt='home3'/>
      <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>

      </div>
      <div className="subBottomContent">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <div >

        {
          strArr.map(word=>(
            <span key={word}>{`${word} | `}</span>
            ))
          }
        </div>
         </div>
    </div>
  )
}

export default Home
