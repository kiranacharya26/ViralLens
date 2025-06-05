import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Radiant, Glowing Skin?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Join thousands of beauty enthusiasts who have discovered the secret to naturally beautiful skin with LunaGlow.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-400 mr-3"></i>
                <span>100% Natural Korean Ingredients</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-400 mr-3"></i>
                <span>Dermatologist Tested & Approved</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-400 mr-3"></i>
                <span>Free Shipping on All Orders</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-400 mr-3"></i>
                <span>30-Day Money Back Guarantee</span>
              </li>
            </ul>
            <button className="bg-white text-rose-600 hover:bg-rose-100 px-10 py-4 text-xl font-medium !rounded-button cursor-pointer whitespace-nowrap transition-colors">
              Start Your Beauty Journey
            </button>
            <p className="text-sm mt-4 text-rose-200">
              No credit card required for samples
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Get a Free Sample
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/20 border-none !rounded-button focus:ring-2 focus:ring-white placeholder-white/60 text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/20 border-none !rounded-button focus:ring-2 focus:ring-white placeholder-white/60 text-white"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="skinType" className="block text-sm font-medium mb-1">
                    Skin Type
                  </label>
                  <div className="relative">
                    <select
                      id="skinType"
                      className="w-full px-4 py-3 bg-white/20 border-none !rounded-button focus:ring-2 focus:ring-white placeholder-white/60 text-white appearance-none"
                    >
                      <option value="" disabled selected className="text-gray-800">
                        Select your skin type
                      </option>
                      <option value="dry" className="text-gray-800">
                        Dry
                      </option>
                      <option value="oily" className="text-gray-800">
                        Oily
                      </option>
                      <option value="combination" className="text-gray-800">
                        Combination
                      </option>
                      <option value="sensitive" className="text-gray-800">
                        Sensitive
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="fas fa-chevron-down text-white"></i>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 font-medium !rounded-button cursor-pointer whitespace-nowrap transition-colors"
                >
                  Request Free Sample
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 