import React from 'react';

import phone from '../assets/phone.png';
import Homeimg from '../assets/homeImage.png'

function Contact() {
  return (
    <div id="contact" className="flex flex-col justify-center mt-5">
    
      <div className="flex justify-center">
      <h1 className='text-white text-[50px] pt-[20px] font-bold text-center'><span className='text-black'>Contact Us</span></h1>
        <img src={phone} className="w-20 ml-4" alt="Phone Icon" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44 mt-5">
        <img src={Homeimg} className="w-60 mr-10" alt="Contact Us Background" />
        <div className="w-full">
          <div className="flex flex-col mb-4">
            <label className="text-gray-400">Email</label>
            <input
              type="text"
              placeholder="yourname@gmail.com"
              className="border-[1.5px] px-2 border-purple-300 hover:border-purple-500 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-400">Message</label>
            <textarea
              type="text"
              rows={7}
              placeholder="Type your message here"
              className="border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md"
            />
          </div>
          <button className="transition-all ease-in-out hover:scale-110 px-2 text-center bg-purple-500 flex items-center justify-center text-[14px] py-1 mt-2 text-white rounded-md">
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
