import React from 'react';
import Card from './Card';
import gif from '../assets/meditation-gif-1.gif';
import Footer from './Footer';



const Mainpage = () => {

  const scrollToBottom = () => {
    const currentPosition = window.pageYOffset;
    const targetPosition = document.documentElement.scrollHeight;
    const distance = targetPosition - currentPosition;
    const duration = 10000; // Adjust the duration for the desired speed (in milliseconds)
    let start;

    const scrollAnimation = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, currentPosition + distance * progress);
      if (progress < 0.99) { // Adjust the threshold as needed
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  let startTime;

  // Function to start the timer when the page loads
  function startTimer() {
      startTime = new Date();
  }

  // Function to calculate the time spent on the page
  function calculateTimeSpent() {
      const endTime = new Date();
      const timeSpent = (endTime - startTime) / 1000; // Convert to seconds
      const timeSpentDisplay = document.getElementById('timeSpent');
      timeSpentDisplay.textContent = "Time spent on the page: " + timeSpent.toFixed(2) + " seconds";
      console.log("Time spent on the page: " + timeSpent.toFixed(2) + " seconds");
  }

  // Start the timer when the page loads
  window.onload = startTimer;

  // Calculate time spent when the user leaves the page
  window.onbeforeunload = calculateTimeSpent;



  return (
    <div >
    
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Welcome to Health Hive</h1>
        
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src={gif} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
          <div className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 bg-pink-100" >
 <p id="timeSpent"></p>
          </div>
          <div className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 bg-pink-100">

          </div>
          {/* <img src="/beach-house-interior-1.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" /> */}
          {/* <img src="/beach-house-interior-2.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" /> */}
        </div>
        
        
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
        Our innovative platform utilizes cutting-edge technology to instantly locate healthcare centers near you, tailored to your specific requirements. Whether you're seeking primary care, specialized treatment, or urgent care services, our locator makes finding the right facility effortless.
        </p>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button type="button" onClick={scrollToBottom} className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Take a Tour</button>
        </div>
      </div>
    </main>
    <Card/>
    <Footer/>
    </div>
    
  

    
  );
};

export default Mainpage;
