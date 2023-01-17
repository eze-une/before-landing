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
      <div className='flex flex-col items-center justify-center h-full mx-auto snap-y snap-proximity '>
        <Hero className="snap-normal" />  
        <Vision className="snap-normal"/>   
        <Steps  className="snap-center snap-always container"/>
        {/* <SecondSteps />  */}
        <Teams  className="snap-always snap-center"/>   
        <Units className="snap-always snap-center" />
      </div>
    </div>
  )
}

export default BodySection