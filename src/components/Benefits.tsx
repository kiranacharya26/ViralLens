import React from 'react';

const Benefits: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="group">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
            <i className="fas fa-rocket text-rose-600 text-xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Early Access</h3>
          <p className="text-gray-600">
            Be among the first to experience our innovative solutions and
            shape their development.
          </p>
        </div>
      </div>

      <div className="group">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
            <i className="fas fa-gift text-rose-600 text-xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Exclusive Benefits</h3>
          <p className="text-gray-600">
            Enjoy special perks, discounts, and personalized support as an
            early adopter.
          </p>
        </div>
      </div>

      <div className="group">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
            <i className="fas fa-comments text-rose-600 text-xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Direct Feedback</h3>
          <p className="text-gray-600">
            Have a direct line to our development team and influence future
            features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits; 