import NavBar from './components/Navbar'
import SideBar from './components/SideBar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

import {Router, Route, Routes, Link} from 'react-router-dom';

import './App.css'


function App() {


  return (
    <>

    <NavBar/>

    <SideBar/>

    <Home/>

    <About/>

    <Footer/>


    </>
  )
}
export default App
