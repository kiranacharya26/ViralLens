import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Typography from './components/Typography';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Products />
                <Testimonials />
                <CTA />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/typography" element={<Typography />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App; 
