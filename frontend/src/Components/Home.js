// Home.js
import React, { Component } from 'react';
import robo from '../assets/robo.png'


import Contactimg from '../assets/contactusbg.png'
import doctor from '../assets/doctor.png'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().getHours(),
      greeting: ''
    };
  }

  componentDidMount() {
    this.setGreeting();
  }

  setGreeting() {
    const currentTime = this.state.currentTime;
    let greeting = '';

    if (currentTime >= 5 && currentTime < 12) {
      greeting = 'Good Morning';
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }

    this.setState({ greeting });
  }

  render() {
    return (
      <div className='mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row '>
      <div>
      <div className='flex'>
      <h1 className='text-[40px] font-bold'>Hello</h1>
      <img src={robo} className="w-[70px] ml-5 animate-bounce" alt=''/>
      </div>
     
      
        <h1 className='text-[40px] font-bold'>{this.state.greeting}</h1>
        <h1 className='text-gray-300 mt-3'>
"Good health is the cornerstone of a vibrant life, empowering us to thrive and pursue our passions with vigor and purpose."
</h1>
        <button className='bg-slate-400 p-2 px-3 
        transition-all ease-in-out hover:scale-110 text-white
        rounded-md  mt-3' ><a href="/login">Get Started</a></button>
      </div>
     
        <img src={Contactimg} className='w-[300px] md:w-[400px]' alt="" />
        
        
      </div>
    );
  }
}

export default Home;
