import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const theme = {
    primary: "bg-rose-600 hover:bg-rose-700",
    secondary: "border-rose-600 text-rose-600 hover:bg-rose-50",
    text: "text-rose-600",
    hover: "hover:text-rose-600"
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGetStarted = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('get-started');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      // Use setTimeout to ensure the navigation completes before scrolling
      setTimeout(() => {
        const el = document.getElementById('get-started');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl font-bold ${theme.text} hover:opacity-80 transition-opacity`}>
              LunaGlow
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link
                to="/"
                className={`text-gray-700 ${theme.hover} transition-colors cursor-pointer`}
              >
                Home
              </Link>
              <Link
                to="/typography"
                className={`text-gray-700 ${theme.hover} transition-colors cursor-pointer`}
              >
                Typography
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 ${theme.hover} transition-colors cursor-pointer`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <button
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-lg transition-colors"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none p-2"
            aria-label="Open menu"
          >
            <div className="w-7 h-7 relative">
              <span className="absolute w-7 h-0.5 bg-rose-600 top-1.5 transition-all duration-300"></span>
              <span className="absolute w-7 h-0.5 bg-rose-600 top-3.5 transition-all duration-300"></span>
              <span className="absolute w-7 h-0.5 bg-rose-600 top-5.5 transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[90%] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <Link to="/" className={`text-2xl font-bold ${theme.text} hover:opacity-80 transition-opacity`} onClick={toggleMobileMenu}>
            LunaGlow
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <div className="w-7 h-7 relative">
              <span className={`absolute w-7 h-0.5 bg-rose-600 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3.5' : 'top-1.5'}`}></span>
              <span className={`absolute w-7 h-0.5 bg-rose-600 transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-3.5'}`}></span>
              <span className={`absolute w-7 h-0.5 bg-rose-600 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3.5' : 'top-5.5'}`}></span>
            </div>
          </button>
        </div>
        <nav className="h-[calc(100dvh-80px)] overflow-y-auto">
          <div className="flex flex-col items-center justify-center space-y-8 p-6">
            <Link
              to="/"
              className={`text-xl ${theme.hover} transition-colors cursor-pointer`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/typography"
              className={`text-xl ${theme.hover} transition-colors cursor-pointer`}
              onClick={toggleMobileMenu}
            >
              Typography
            </Link>
            <Link
              to="/contact"
              className={`text-xl ${theme.hover} transition-colors cursor-pointer`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className={`${theme.primary} text-white px-8 py-3 !rounded-button cursor-pointer whitespace-nowrap max-w-xs mt-8`}
              onClick={toggleMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header; 