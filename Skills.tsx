import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
    <div data-aos="zoom-in-up">
        <h2 className='text-4xl md:text-5xl'>Forntend Developer</h2>
        <p className='text-slate-50 pt-2'>I am a forntend developer. I am making websites using HTML,CSS ,Typescript, Javascript, Next.j and Tailwind.Recently i complete my mile stone 1 project.'</p>
    </div>
    <div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
                <h2 data-aos="zoom-in-up">Typescript</h2>
                <h2 data-aos="zoom-in-up">CSS</h2>
                <h2 data-aos="zoom-in-up">Tailwind</h2>
                <h2 data-aos="zoom-in-up">Next.js</h2>

            </div>
            <div className='space-y-2'>
                <h2 data-aos="zoom-in-up">HTML</h2>
                <h2 data-aos="zoom-in-up">Video Editing</h2>
                <h2 data-aos="zoom-in-up">Javascript</h2>
        

            </div>
        </div>
    </div>
    </div>
    </div>
  );
}
export default Skills
            
            
            
        