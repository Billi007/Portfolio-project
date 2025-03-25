import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {Suspense, lazy} from 'react'
import Loading from './Components/Loading'

function App() {
 const Home = lazy(() => import('./Pages/Home'));
 const About = lazy(() => import('./Pages/About'));
 const Project = lazy(() => import('./Pages/Project/Project'));
 const Netflix_project = lazy(() => import('./Pages/Project/Netflix_project'));
 const Chat_project = lazy(() => import('./Pages/Project/Chat_Project'));
 const Contact = lazy(() => import('./Components/Contact'));
 
  return (
    <>
   <div className=' text-white'>
   <Navbar/>
  <BrowserRouter>
  <Suspense fallback={<Loading/>}>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/project/netflix' element={<Netflix_project/>}/>
  <Route path='/project/chat' element={<Chat_project/>}/>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </Suspense>
  </BrowserRouter>
  <Footer/>
   </div>

    </>
  )
}

export default App