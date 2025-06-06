import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-300 max-w-xs">
              Premium Korean skincare essentials for radiant, glowing skin. Discover the beauty secrets of Korea.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">Products</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/shipping-policy" className="block text-gray-400 hover:text-white transition-colors">Shipping Policy</Link>
              <Link to="/refund-policy" className="block text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2025 LunaGlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 