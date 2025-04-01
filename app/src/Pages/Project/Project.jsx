import chat from '../../../public/chat_img2.png'
import netflix from '../../../public/netflix1.jpg'
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <>
    <div className='text-black text-left flex flex-col md:flex-row justify-center md:gap-48 gap-16 md:mx-0 mb-20 md:mb-0 items-center pt-14 px-20'>
     
     <div className="md:w-[500px] w-[350px]">

     <div className="relative inline-block text-4xl font-bold text-gray-900">
      <span className="absolute left-0 -bottom-1 w-full h-5 bg-[#f87f6d]"></span>
      <span className="relative">Projects</span>
    </div>
      
      <h1 className='text-black font-bold text-4xl pt-10'>Real-Time Chat Application</h1>
      <div className='flex gap-1 text-[11px] my-5 flex-wrap md:flex-nowrap'>
      <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>Javascript</button>
        <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>MERN</button>
        <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>Socket.io</button>
        <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>Redux</button>
        <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>TailwindCSS</button>
        <button className='py-1 px-2  font-semibold bg-[#121e27] text-white'>DaisyUI</button>
      </div>

       <div>
        <p className="text-slate-800 md:text-[20px] font-medium">Developed a feature-rich real-time chat application enabling users send/receive instant messages.
The app ensures seamless communication through a responsive and user-friendly with modern styling
interface.
User Authentication: Implemented secure login and registration using JWT authentication with cookies.</p>
       </div>

      <button className="my-8 px-6 py-2 font-medium bg-[#e9614d] text-white w-fit transition-all duration-200
        shadow-[7px_7px_0px_black] border-2 border-black hover:bg-[#f1543b] cursor-pointer hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]">
      <Link to='/project/chat'> View project
      </Link>
      </button>
     </div>

      <div>
     <Link to='/project/chat'>
     <img 
      className="w-2xl h-72 md:mt-0 bg-cover rounded-3xl md:max-w-md max-w-xs mx-auto shadow-none transition-shadow cursor-pointer
       hover:shadow-xl hover:shadow-gray-600 ease-in-out hover:duration-300"
      src={chat}
      alt="img" />
     </Link>
     </div>
     </div>

    





     <div className='text-black text-left flex flex-col md:flex-row  mb-20 justify-center md:gap-48 gap-16 md:mx-0 mx-5 px-20 items-center pt-16'>
     
     <div className="md:w-[500px] w-[350px] ">
      
      <h1 className='text-black font-bold text-4xl'>Netflix app</h1>
      <div className='flex gap-1 text-[11px] my-5'>
      <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>React.js</button>
        <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>Firebase</button>
        <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>Redux</button>
        <button className='py-1 px-2 font-semibold bg-[#121e27] text-white'>TailwindCSS</button>
      </div>

       <div>
        <p className="text-slate-800 md:text-[20px] font-medium">Developed a Netflix-inspired streaming platform cone built with React for the frontend,
       Firebase for authentication and database,TailwindCSS for styling,
       and Redux for state management. The app replicates core features 
       of Netflix, including user authentication, and a responsive UI.</p>
       </div>

      <button className="my-8 px-6 py-2 font-medium bg-[#e9614d] text-white w-fit transition-all duration-200
        shadow-[7px_7px_0px_black] border-2 border-black hover:bg-[#f1543b] cursor-pointer hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]">
      <Link to='/project/netflix'> View project
      </Link>
      </button>
     </div>

      <div>
     <Link to='/project/netflix'>
     <img 
      className="w-2xl h-72 mt-10 md:mt-0 object-center rounded-3xl md:max-w-md max-w-xs mx-auto shadow-none transition-shadow cursor-pointer
       hover:shadow-xl hover:shadow-gray-600 ease-in-out hover:duration-300"
      src={netflix}
      alt="img" />
     </Link>
     </div>
     </div>

    </>
  )
}

export default Projects