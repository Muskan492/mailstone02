import React from 'react'
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact'className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-slate-50 text-[18px] pt-2'data-aos="zoom-in-up">
                    Drop me a line, give me a call, or senda message by submitting the form.
                </p>
             <div className=' flex gap-3 items-center' data-aos="zoom-in-up">
             <IoMail  size={30}/>irshadaliashari5419@gmail.com
             </div>
             <div className=' flex gap-3 items-center'data-aos="zoom-in-up">
             <BsFillTelephoneFill  size={30}/>(+92) 3146052579
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1data-aos="zoom-in-up"'>
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='mesage'>Message</label>
                    <textarea
                    className=' bg-transparent border border-amber'
                    id='msg' rows={8}>
                       </textarea>
                </div>
                <button className=' bg-accent p-2 px-6'data-aos="zoom-in-up">Send</button>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Contact
