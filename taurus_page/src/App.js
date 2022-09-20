import React from 'react';
import {
    AiOutlineInstagram,
    AiFillFacebook,
    AiOutlineTwitter,
    AiOutlineLinkedin,
  } from "react-icons/ai";

  import logo from "./assets/logo.png";

 const Home = () => {
    const media = [
        {
          icon: <AiOutlineInstagram size={30} />,
          link: "https://instagram.com/taurus_international_india?igshid=YmMyMTA2M2Y=",
        },
        {
          icon: <AiFillFacebook size={30} />,
          link: "https://m.facebook.com/109989728513878/",
        },
        {
          icon: <AiOutlineTwitter size={30} />,
          link: "https://twitter.com/Taurus2inter?t=hLe5dQizR5Vm4azMLTj9aw&s=09",
        },
        {
          icon: <AiOutlineLinkedin size={30} />,
          link: "https://www.linkedin.com/company/taurus-international-india/",
        },
      ];
  return (
    <div className="h-screen w-full flex items-center flex-col lg:flex-row bg-slate-900 ">
      <div className=" lg:w-[60%] bg-gradient-to-br from-lightBlue to-darkBlue h-screen flex flex-col items-center lg:justify-center">
      <div className="bg-blend-lighten hover:bg-blend-darken p-6 lg:max-w-xl mx-auto lg:rounded-xl lg:shadow-lg ">
      <img src= {logo} alt='TI LOGO'   />

      </div>
       
      <h1 className=' text-blue-400 text-3xl underline underline-offset-8 '>We Are Coming Soon</h1> 
      <h3 class="font-sans text-blue-400 mt-3 "> We're coming soon! We're working hard to give you the best experience!</h3>
      </div>
         <div className="text-center" >
         {media.map(({ icon, link }) => (
            <a
              href={link}
              className="bg-[#00a8e8] rounded-full p-4 inline-block m-4 hover:bg-[#caf0f8]"
            >
              {icon}
            </a>
          ))}

         </div>
         
    </div>
    
  )
}

export default Home