import React from 'react';
import Navebar from './Navebar';

const Hero = () =>{
    return(
        <div id="hero"className=' rounded-lg   min-h-screen bg-no-repeat bg-[url(/images.jpg)]  bg-cover'
        style={{backgroundSize:"20%",backgroundPosition:"left 155px top 180px "}}
        >
           <Navebar/>
           <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
           <div className='hidden lg:block'> </div>
           <div className='text-[80px] sm:text-[55px] font-bold leading-tight flex justify-center items-center'> 
           <div>
           <p data-aos="zoom-in-up">Frontend Developer</p>
            <p data-aos="zoom-in-up">Hello!</p>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Muskan</p>
           </div>
        </div>
        </div>
        </div>
    )
}
export default Hero;