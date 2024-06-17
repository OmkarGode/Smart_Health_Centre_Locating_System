import React, {useState} from 'react'

import healthhive from "../assets/healthhive.png"

function NavBar() {

const [toggle,setToggle] = useState(false);

  return (
    <div className='p-[20px]'>
    <div className='flex justify-between '>
      <img src={healthhive} className='h-50'  alt="" />
      <div className='hidden md:flex'>
        <ul className='flex flex-row'>
          <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
          <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'><a href="/hospitalform">Hospitals 
          </a></li>
          <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className='md:hidden lg:hidden'>
      {!toggle?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        onClick={()=>setToggle(true)}
        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      :
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       onClick={()=>setToggle(false)}
       viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer float-right">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
}
 {toggle?
  <ul className='flex flex-col mt-8 bg-white-300 p-2 '>
          <li className='p-3 mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
          <li className='p-3 mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Hospitals</li>
          <li className='p-3 mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'><a href="/login">Login</a></li>
        </ul>
 :null}
      </div>
    </div>
      
    </div>
  )
}

export default NavBar
