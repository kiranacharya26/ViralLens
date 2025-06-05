import React from 'react';

interface ProductProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  badge?: {
    text: string;
    color: string;
  };
}

const Product: React.FC<ProductProps> = ({
  image,
  title,
  subtitle,
  description,
  price,
  badge,
}) => {
  return (
    <div className="group bg-gradient-to-b from-rose-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative mb-8 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <div className={`absolute top-4 right-4 ${badge.color} text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded`}>
            {badge.text}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-rose-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm mb-3">{subtitle}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-800">{price}</span>
        <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const products = [
    {
      image: "https://readdy.ai/api/search-image?query=Elegant%20glass%20dropper%20bottle%20with%20rose-infused%20facial%20oil%2C%20rose%20petals%20scattered%20around%2C%20soft%20pink%20background%2C%20premium%20skincare%20product%20photography%2C%20korean%20beauty%20aesthetic&width=400&height=400&seq=12&orientation=squarish",
      title: "Rose Facial Oil",
      subtitle: "Hydrating & Brightening",
      description: "Luxurious facial oil infused with damask rose petals for intense hydration and radiance.",
      price: "$48.00",
      badge: {
        text: "Bestseller",
        color: "bg-rose-600",
      },
    },
    {
      image: "https://readdy.ai/api/search-image?query=Elegant%20glass%20dropper%20bottle%20with%20green%20tea%20facial%20serum%2C%20green%20tea%20leaves%20scattered%20around%2C%20soft%20pink%20background%2C%20premium%20skincare%20product%20photography%2C%20korean%20beauty%20aesthetic&width=400&height=400&seq=13&orientation=squarish",
      title: "Green Tea Serum",
      subtitle: "Antioxidant & Soothing",
      description: "Powerful antioxidant serum with Jeju green tea extract to protect and calm sensitive skin.",
      price: "$52.00",
      badge: {
        text: "New",
        color: "bg-green-600",
      },
    },
    {
      image: "https://readdy.ai/api/search-image?query=Elegant%20glass%20jar%20with%20overnight%20sleeping%20mask%2C%20lavender%20flowers%20scattered%20around%2C%20soft%20pink%20background%2C%20premium%20skincare%20product%20photography%2C%20korean%20beauty%20aesthetic&width=400&height=400&seq=14&orientation=squarish",
      title: "Overnight Repair Mask",
      subtitle: "Regenerating & Nourishing",
      description: "Intensive overnight treatment with rice extract and peptides for deep repair while you sleep.",
      price: "$45.00",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-rose-600 text-sm font-semibold tracking-wider uppercase mb-2">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
            Premium Beauty Essentials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of Korean beauty oils for transformative skincare.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-rose-600 text-rose-600 px-8 py-3 text-lg font-medium !rounded-button cursor-pointer whitespace-nowrap hover:bg-rose-50 transition-all transform hover:scale-105 group">
            <span className="inline-flex items-center">
              View All Products
              <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products; 