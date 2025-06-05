import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a href={href} className="hover:text-white transition-colors cursor-pointer">
      {children}
    </a>
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">LunaGlow</h3>
            <p className="mb-4">
              Premium Korean skincare essentials for radiant, glowing skin.
              Discover the beauty secrets of Korea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <FooterLink href="#">All Products</FooterLink>
              <FooterLink href="#">Best Sellers</FooterLink>
              <FooterLink href="#">New Arrivals</FooterLink>
              <FooterLink href="#">Gift Sets</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Shipping Info</FooterLink>
              <FooterLink href="#">Returns</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <a href="/about" className="block text-gray-600 hover:text-rose-600 transition-colors">About Us</a>
              <a href="/products" className="block text-gray-600 hover:text-rose-600 transition-colors">Products</a>
              <a href="/contact" className="block text-gray-600 hover:text-rose-600 transition-colors">Contact</a>
              <a href="/blog" className="block text-gray-600 hover:text-rose-600 transition-colors">Blog</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 LunaGlow. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="mr-2">Payment methods:</span>
            <div className="flex space-x-3">
              <i className="fab fa-cc-visa text-xl"></i>
              <i className="fab fa-cc-mastercard text-xl"></i>
              <i className="fab fa-cc-paypal text-xl"></i>
              <i className="fab fa-cc-apple-pay text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 