import React, { useState, useEffect } from 'react';

const heroImages = [
  "https://readdy.ai/api/search-image?query=Elegant%20Korean%20beauty%20skincare%20arrangement%20with%20soft%20pink%20gradient%20background%2C%20rose%20petals%2C%20glass%20bottles%20with%20essential%20oils%2C%20natural%20ingredients%20scattered%20artistically%2C%20premium%20product%20photography%20with%20dreamy%20lighting%2C%20luxury%20beauty%20aesthetic&width=1440&height=600&seq=8&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Luxurious%20Korean%20skincare%20products%20displayed%20on%20marble%20surface%2C%20pastel%20pink%20background%20with%20soft%20lighting%2C%20premium%20glass%20bottles%20with%20serums%20and%20oils%2C%20rose%20petals%20and%20natural%20ingredients%2C%20high-end%20beauty%20product%20photography&width=1440&height=600&seq=19&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Elegant%20beauty%20flatlay%20with%20Korean%20skincare%20products%2C%20essential%20oil%20droppers%2C%20pink%20rose%20petals%2C%20soft%20gradient%20background%2C%20premium%20cosmetics%20arrangement%20with%20professional%20lighting%2C%20luxury%20beauty%20brand%20aesthetic&width=1440&height=600&seq=20&orientation=landscape",
];

const Hero: React.FC = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(heroImages.length).fill(false));
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = heroImages.map((src, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoadedImages(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            resolve(true);
          };
          img.onerror = () => {
            console.error(`Failed to load image ${index}`);
            resolve(false);
          };
        });
      });

      await Promise.all(loadPromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const heroImageInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(heroImageInterval);
    };
  }, []);

  return (
    <section className="relative pt-36 pb-32 md:pt-44 md:pb-44 min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-rose-100 animate-pulse"></div>
        )}
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Korean Beauty Background ${index + 1}`}
            loading="lazy"
            className={`w-full h-full object-cover object-center absolute transition-opacity duration-1000 ${
              currentHeroImage === index && loadedImages[index] ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 bg-white/30 backdrop-blur-sm p-8 rounded-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Discover Korean Beauty Secrets
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Premium Essential Oils for Radiant, Glowing Skin
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Experience the transformative power of nature's finest ingredients, carefully crafted to reveal your skin's natural radiance. Our Korean-inspired formulations combine ancient wisdom with modern science.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-rose-600 mr-2"></i>
                <span>Natural Ingredients</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-rose-600 mr-2"></i>
                <span>Cruelty-Free</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-rose-600 mr-2"></i>
                <span>Dermatologist Tested</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg font-medium !rounded-button cursor-pointer whitespace-nowrap transition-all transform hover:scale-105">
                Shop Now
              </button>
              <button className="bg-white/80 backdrop-blur-sm border-2 border-rose-600 text-rose-600 px-8 py-3 text-lg font-medium !rounded-button cursor-pointer whitespace-nowrap hover:bg-rose-50 transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 