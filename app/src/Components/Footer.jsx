import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
    <div className="bg-[#0d171f] flex justify-evenly items-center text-[14px]">
     <h2 className="md:text-xl text-sm name md:block hidden">Tanishka Gupta</h2>
      <ul className="flex flex-col font-semibold text-[#ed6955] md:my-20 my-28  space-y-3 text-xs md:text-[16px]">
        <h1 className="text-white">Links</h1>
        <li className="hover:opacity-80 underline"><a  href="/">Home</a></li>
        <li className="hover:opacity-80 underline"><a href="/about">About</a></li>
      </ul>
        <ul className="flex flex-col font-semibold text-[#ed6955] my-10 space-y-3 text-xs md:text-[16px]">
        <li className="hover:opacity-80 underline"><a href="/project">Project</a></li>
        <li className="hover:opacity-80 underline"><a href="/contact">Contact</a></li>
        </ul>
      <div className="flex flex-col space-y-4">
      <p className="text-sm md:text-lg">Get in touch</p>
      <ul className="flex gap-4 text-xl md:text-2xl text-[#ed6955]">
        <li> <a target="_blank" href='https://github.com/Billi007' className='hover:text-gray-400'><FaGithub /></a></li>
        <li> <a target="_blank" href='https://www.linkedin.com/feed' className='hover:text-gray-400'> <FaLinkedin /></a></li>
        <li> <a target="_blank" href='https://x.com/Tanisha1175' className='hover:text-gray-400'> <FaTwitter /></a></li>
        <li><a target="_blank" href='mailto:guptatanishka2008@gmail.com' className='hover:text-gray-400'> <MdEmail /></a></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Footer