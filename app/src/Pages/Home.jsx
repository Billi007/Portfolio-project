import Skills from '../Components/Skills'
import Project from './Project/Project'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Contact from '../Components/Contact'
const Home = () => {
  return (
   <>

   <div className='max-w-full flex flex-col justify-center items-center py-48 md:h-[900px] bg-[#121e27]'>
   
     <div className='text-4xl md:text-[3.8rem] font-normal text-left leading-14 md:leading-20 tracking-normal md:tracking-wide'> Hi, I’m Tanishka | <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 text-3xl md:text-6xl font-black'>Frontend</span>
      <br /> 
      <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 text-3xl md:text-6xl font-black'> Developer</span>
 
    <div className='text-[#ed6955] flex gap-3 text-2xl md:text-3xl my-10 cursor-pointer'>
      <a target='_blank' href='https://github.com/Billi007' className='hover:text-gray-400'><FaGithub /></a>
     <a target='_blank' href='https://www.linkedin.com/feed' className='hover:text-gray-400'> <FaLinkedin /></a>
     <a target='_blank' href='https://x.com/Tanisha1175' className='hover:text-gray-400'> <FaTwitter /></a>
     <a target='_blank' href='mailto:guptatanishka2008@gmail.com' className='hover:text-gray-400'> <MdEmail /></a>
     </div>
    <p className='text-sm md:text-xl max-w-sm text-left font-thin  tracking-normal'>I love exploring and creating 🚀 I’m a lifelong learner 🎓 and a good cook 🍕
  </p>
      </div>


    </div>
      <Skills/>
     <Project/>
     <Contact/>
   </>
  )
}

export default Home