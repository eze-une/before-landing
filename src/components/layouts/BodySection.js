import React, { useEffect, useRef, useState } from 'react'
import Hero from '../sections/Hero'
import SecondSteps from '../sections/SecondSteps'
import Steps from '../sections/Steps'
import Teams from '../sections/Teams'
import Units from '../sections/Units'
import Vision from '../sections/Vision'

function BodySection() {
  const [sliderRange, setsliderRange] = useState(20);
  const myref = useRef();
  
  useEffect(() => {
    if(sliderRange>=80){
      window.scrollTo({
        top: myref.current.offsetTop,
        behavior: 'smooth',
      });
      setsliderRange(10);
    }
  }, [sliderRange])
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center justify-center h-full mx-auto snap-y snap-proximity '>
        <div className='w-full flex justify-center bg-[#E7F0F5]'>
        <Hero className="snap-normal" sliderRange={sliderRange} setsliderRange={setsliderRange} ref={myref}/>  

        </div>
        <Vision className="snap-normal" myref={myref}/>   
        <Steps  className="snap-center snap-always container"/>
        {/* <SecondSteps />  */}
        <Teams  className="snap-always snap-center "/>   
        <Units className="snap-always snap-center" />
      </div>
    </div>
  )
}



export default BodySection