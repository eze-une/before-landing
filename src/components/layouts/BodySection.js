import React from 'react'
import Hero from '../sections/Hero'
import SecondSteps from '../sections/SecondSteps'
import Steps from '../sections/Steps'
import Teams from '../sections/Teams'
import Units from '../sections/Units'
import Vision from '../sections/Vision'

function BodySection() {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center justify-center h-full mx-auto'>
        <Hero />  
        <Vision />   
        {/* <Steps /> */}
        <SecondSteps /> 
        <Teams />   
        <Units />
      </div>
    </div>
  )
}

export default BodySection