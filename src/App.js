import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Playground from './pages/Playground';
import Events from './pages/Events';
import Games from './pages/Games';
import Leaderboard from './pages/Leaderboard';
import Studio from './pages/Studio';
import Chat from './pages/Chat';
import Courses from './pages/Courses';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/events" element={<Events />} />
          <Route path="/games" element={<Games />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
