import React from 'react'
import wave from '../assets/wave.svg'
import laptop from '../assets/laptop.png'



const Aboutme = () => {

    const aboutSection=[
        {
            id:1,
            //  image:'https://img.freepik.com/premium-vector/ui-ux-programmer-flat-design-vector-illustration-business-information-team-sharing-ideas-with-designer-coding-interface-software-app-development_2175-1809.jpg?w=2000',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhFAm-6kWvv_B8AcwH0fV5owEu_ENfBs2Xw&usqp=CAU',
            
            title:'Disease Prediction',
            desc:'"Advanced algorithms predict diseases'
        },
        {
            id:2,
            // image:'https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkgRpVtSUWZMsPM2Gcg7zlxeKvDPys2djjY75mnVhKvA41wEkhg5Xhcew-_OimKwMAoA&usqp=CAU',
            title:'Insurance & Referrals',
            desc:'Efficient referral systems '
        },
        {
            id:3,
            // image:'https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3Ziy0A_K8QoZOswTk6BW0q1n89x-qxcxGjoLK5DaIKOK760yziYJBYEXxXdrfH9eKO0&usqp=CAU',
            title:'Healthcare Centers',
            desc:'"Centralized platforms streamline'
        }
    ]
  return (
   

    // <div id="aboutme" className='mt-[100px]'>
    //       <img src={wave}  className="w-screen absolute " />
    //     <div className='w-full bg-purple-600 h-[300px]  justify-center items-center'>
    //     <div className='flex flex-row justify-between absolute'>
    //         <img src={laptop}  className="w-[150px] md:w-[300px] mt-[-100px] " />
    //     </div>
    //         <h1 className='text-white text-[50px] pt-[20px] font-bold text-center'>About us </h1>
    //         <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px] text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, quis quaerat ut cumque aliquid incidunt autem qui inventore cupiditate sunt. </h1>
    //     </div>
    //     <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '>
    //        {
    //         aboutSection.map((item,index)=>(
               
    //             <div key={index} className="flex  relative w-full items-center justify-center flex-col m-2
    //             group md:hover:bg-purple-600 rounded-lg py-2">
    //             <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-cover"/>
    //             <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
    //             <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
    //                 </div>
             

    //         ))
    //         }
            
    //     </div>
       
    // </div>
    <div id="aboutme" className='mt-[50px]'>
          <img src={wave}  className="w-screen absolute  " alt='' />
        <div className='w-full bg-slate-300 bg-#DCF2F1 h-[300px]  justify-center items-center'>
        <div className='flex flex-row justify-between absolute'>
            <img src={laptop}  className="w-[150px] md:w-[300px] mt-[-100px] " alt='' />
        </div>
            <h1 className='text-white text-[50px] mt-5px pt-[20px] font-bold text-center'>About <span className='text-black'>Me</span></h1>
            <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px] text-white'>We're dedicated to bridging coordination gaps in the Indian healthcare system. Our user-friendly platform efficiently locates healthcare centers based on patients' signs/symptoms, providing essential information like referrals and insurance provisions. With cutting-edge technology, we're committed to improving healthcare accessibility and outcomes nationwide.</h1>
        </div>
        <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '>
           {
            aboutSection.map((item,index)=>(
               
                <div key={index} className="flex  relative w-full items-center justify-center flex-col m-2
                group md:hover:bg-slate-400 rounded-lg py-2">
                <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-cover" alt=''/>
                <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
                <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
                    </div>
             

            ))
            }
            
        </div>

       

    </div>
  )
}

export default Aboutme
