import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />

      </Routes>
    </Router>
  </div>
  );
}

export default App;
