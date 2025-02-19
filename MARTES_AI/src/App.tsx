import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Blog from './pages/Blog';
import CasiStudio from './pages/CasiStudio';
import BlogPost from './pages/BlogPost';
import CaseStudyPost from './pages/CaseStudyPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#274f36] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/casi-studio" element={<CasiStudio />} />
          <Route path="/casi-studio/:id" element={<CaseStudyPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;