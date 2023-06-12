
import React from 'react'
import about from "../Assets/about2.png"

const About = () => {
  return (
    <div>
      <div className='container-fluid mt-2 bg-light'>
        <div className='row'>
       
        <div className='col-lg-6'>
        <h1> About Us </h1>
          <p> Within the agro-food industry, agro-materials are converted into a range of valuable semi-finished and finished products. To reach a sustainable, resource efficient food system, the optimal process 
            pathways converting the agro-material into these products have to be identified
          </p>
        </div>

        <div className='col-lg-6 bg-light'>
          <img src={about} alt='about' width={400} height={400}></img>
        </div>
        </div>
      
      </div>
    </div>
  )
}

export default About