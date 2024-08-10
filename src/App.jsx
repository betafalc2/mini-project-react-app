import React from "react";
import NavBar from './components/Navbar'
import SideBar from './components/SideBar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import RecipeMenu from './components/RecipeMenu'

import { Route, Routes, Link } from 'react-router-dom';

import './App.css'


function App() {


  return (
    <>

      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <SideBar />
      <div>
      <RecipeMenu />
      </div>
      

      <Footer />


    </>
  )
}
export default App
