import img from '../../public/profile.jpg'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <>
    <div className=' bg-white pt-10 px-5 md:text-left '>
    <div className="relative inline-block text-4xl font-bold text-gray-900 text-center">
      <span className="absolute left-0 -bottom-1 w-full h-6 bg-[#f87f6d]"></span>
      <span className="relative">Skills</span>
    </div>
       <div className=' flex flex-col md:flex-row gap-10 justify-center items-center py-16'>

       <div>
        <img 
        className='rounded-xl w-[300px] object-cover'
        src={img} 
        alt="profile" />
       </div>


       <div className='flex flex-wrap gap-1 md:w-2xl text-white max-w-xl px-2 md:px-10'>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27] '>Javascript</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27] '>Typescript</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27]'>React</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27] '>Next.js</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27]'>Node.js</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>MongoDB</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>Firebase</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>HTML</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>CSS</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>TailwindCSS</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>Version Control</button>

          <div className=' text-slate-800 mt-5 space-y-5 flex flex-col items-start'>
          <h1 className='font-bold md:text-xl'>I love building stuff 📱</h1>
          <p className='text-left text-[17px] md:text-[19px]'>Hey! I’m a frontend developer who loves turning ideas into reality. My tech journey began at 21,
         and since then, I love building apps, love photography, cooking (food is my other passion), 
         exploring new places, or diving into creative hobbies.I thrive on solving problems, learning new tech, 
         and making things that matter. Coding with a cup of coffee is my greatest hobby ☕💻</p>

         <Link 
         to='/about'
         className='text-[#f1725e] md:text-lg font-semibold hover:opacity-90'>
         Keep reading my bio
         </Link>
          </div>

           </div>
    </div>
    </div>
    </>
  )
}

export default Skills