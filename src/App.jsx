import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import CreateARecipe from './components/CreateARecipe';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import RecipeMenu from './components/RecipeMenu';
import PageNotFound from './components/PageNotFound';
import EditRecipePage from './components/EditRecipePage'

import './App.css';

function App() {
  return (
    <div className="app-container">
    <NavBar className="navbar" />
    <div className="layout-container">
      <SideBar className="sidebar" />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateARecipe />} />
          <Route path="/recipes" element={<RecipeMenu />} />
          <Route path="/recipes/edit/:recipeId" element={<EditRecipePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
    <Footer className="footer" />
  </div>
  );
}

export default App;
