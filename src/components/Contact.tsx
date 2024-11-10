import React from 'react';
import { FaMailBulk } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container mx-auto'>
      <div className='grid md:grid-cols-2 gap-10 items-center'>
        {/* Left Side: Contact Info */}
        <div className='space-y-8'>
          <h2 className='text-4xl font-bold text-center mb-4'>"Let's Keep In Touch"</h2>
          <p className='text-[#283432E6] text-lg text-center md:text-left'>
            Feel free to reach out by filling out the form—whether you'd like to chat, call, or leave a message!
          </p> 
          <div className='flex flex-col gap-4'>
            <div className='flex gap-3 items-center'>
              <FaMailBulk size={24} className='text-[#283432]' />
              <span>sawerakiyani21@gmail.com</span>
            </div>
            <div className='flex gap-3 items-center'>
              <BsFillTelephoneFill size={24} className='text-[#283432]' />
              <span>(+92) 343-276-0811</span>
            </div>
            <div className='flex gap-3 items-center'>
              <IoLogoLinkedin size={24} className='text-[#283432]' />
              <span>linkedin.com</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className='space-y-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-lg font-medium'>Full Name:</label>
            <input 
              type="text" 
              id='name' 
              className='h-[50px] bg-transparent border border-[#283432] px-4 text-[#283432] rounded-md' 
              placeholder='Enter your name'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-lg font-medium'>Email Address:</label>
            <input 
              type="email" 
              id='email' 
              className='h-[50px] bg-transparent border border-[#283432] px-4 text-[#283432] rounded-md' 
              placeholder='Enter your email'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='msg' className='text-lg font-medium'>Message:</label>
            <textarea 
              id='msg' 
              rows={6} 
              className='bg-transparent border border-[#283432] px-4 py-2 text-[#283432] rounded-md'
              placeholder='Write your message here'
            />
          </div>
          <button className='bg-[#283432] text-white py-2 px-8 rounded-md hover:bg-[#1f2b2a] transition-all'>
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
