import React,{useEffect} from 'react';
import './card.css';
import audio1 from '../assets/mp4.mp3';



const Card = () => {

  useEffect(() => {
    const audio = new Audio(audio1);
    const playPromise = audio.play();
    
    // Handle play promise to catch errors
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Playback started
      })
      .catch(error => {
        console.error('Audio playback error:', error);
      });
    }
  
    // Clean up function to stop the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start position
    };
  }, []);
  
  
  return (
    <div>
      <article className='mt-10 p-9'>
        <section className="card" style={{ backgroundColor: '#E7F3FF' }}>
          <div className="text-content">
            <h3>Predictive Disease Analysis</h3>
           <p>Our advanced algorithms analyze your health data to identify potential health risks, empowering you to take proactive steps towards prevention and early intervention.</p>
            <a href="http://127.0.0.1:5000/">Start Test</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlZGljdGl2ZSUyMGFuYWx5c2lzfGVufDB8fDB8fHww" alt="Mental Health" />
          </div>
        </section> 

        <section className="card" style={{ backgroundColor: '#FFE7E7' }}>
          <div className="text-content">
            <h3>Insurance Coverage </h3>
           <p>Navigating insurance coverage can be overwhelming, but with our platform, it's a breeze. Easily determine which healthcare services are covered by your insurance provider, ensuring you receive the care you need without unnecessary financial stress.</p>
            <a href="http://127.0.0.1:5001">Get Insurance</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5zdXJhbmNlJTIwQ292ZXJhZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </section> 

        <section className="card" style={{ backgroundColor: '#E3DFFD' }}>
          <div className="text-content">
            <h3>Online Appointment with Doctor 🧘🏻‍♂️</h3>
            <p>Chat/Video Conference with Non-Profit Organisation.Where You get 24/7 online free consultation from our doctors.To join please "Join14" as room ID</p> 
            <a href="https://shantanuwadode.github.io/HealthHive_Chatapp/">Get Started</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMGNvbnN1bHRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </section> 

        
      </article>   
         
    </div>
  );
};

export default Card;
