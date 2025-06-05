import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Typography from './components/Typography';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white text-gray-800 font-sans">
          <Header />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Products />
                <Testimonials />
                <CTA />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 