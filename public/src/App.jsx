import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Request from './components/Request'
import Navbar from './components/navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
   <Home/>
  //  <Home/>
  )
}

export default App
