import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  badge?: {
    icon: string;
    title: string;
    subtitle: string;
  };
  listItems: string[];
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  image,
  imagePosition,
  badge,
  listItems,
}) => {
  const content = (
    <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 px-12">
      <div className="bg-rose-100/50 p-2 inline-block rounded-full mb-6">
        <div className="bg-rose-600 w-14 h-14 rounded-full flex items-center justify-center">
          <i className={`fas ${icon} text-white text-2xl`}></i>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 text-lg">{description}</p>
      <ul className="space-y-3">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <i className="fas fa-check-circle text-rose-600 mt-1 mr-3"></i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const imageContent = (
    <div className="md:w-1/2">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-xl object-cover w-full h-full"
        />
        {badge && (
          <div className={`absolute -bottom-6 ${imagePosition === 'left' ? '-left-6' : '-right-6'} bg-white p-4 rounded-xl shadow-lg`}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                <i className={`fas ${badge.icon} text-rose-600 text-xl`}></i>
              </div>
              <div>
                <p className="font-bold text-gray-800">{badge.title}</p>
                <p className="text-sm text-gray-500">{badge.subtitle}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center">
      {imagePosition === 'left' ? (
        <>
          {imageContent}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageContent}
        </>
      )}
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: 'fa-leaf',
      title: 'Natural Ingredients',
      description: 'We source the finest natural ingredients from Korea\'s pristine landscapes. Each ingredient is carefully selected for its unique properties and benefits to your skin.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20arrangement%20of%20natural%20skincare%20ingredients%20including%20green%20tea%20leaves%2C%20volcanic%20clay%2C%20rice%20extract%2C%20and%20rose%20petals%20on%20a%20soft%20pink%20background%2C%20premium%20product%20photography%20with%20soft%20lighting%2C%20korean%20beauty%20aesthetic&width=600&height=500&seq=9&orientation=landscape',
      imagePosition: 'right' as const,
      badge: {
        icon: 'fa-award',
        title: '100% Natural',
        subtitle: 'Certified Organic',
      },
      listItems: [
        'Organic green tea extract from Jeju Island',
        'Volcanic clay with natural detoxifying properties',
        'Rice water ferment for brightening and hydration',
      ],
    },
    {
      icon: 'fa-vial',
      title: 'Advanced Formulation',
      description: 'Our team of skincare scientists combines traditional Korean beauty wisdom with cutting-edge technology to create formulas that deliver real results.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20laboratory%20setting%20with%20modern%20skincare%20formulation%20equipment%2C%20scientists%20working%20with%20natural%20ingredients%2C%20glass%20beakers%20with%20colorful%20extracts%2C%20soft%20pink%20background%2C%20premium%20photography%20with%20professional%20lighting%2C%20korean%20beauty%20science%20aesthetic&width=600&height=500&seq=10&orientation=landscape',
      imagePosition: 'left' as const,
      badge: {
        icon: 'fa-flask',
        title: 'Advanced Science',
        subtitle: 'Dermatologist Tested',
      },
      listItems: [
        'Lightweight, fast-absorbing textures',
        'Optimal concentration of active ingredients',
        'pH-balanced formulas for all skin types',
      ],
    },
    {
      icon: 'fa-moon',
      title: 'Overnight Transformation',
      description: 'Our overnight treatments work while you sleep, harnessing your skin\'s natural regeneration cycle to deliver visible results by morning.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20night%20skincare%20routine%20setup%20with%20moonlight%20glow%2C%20woman%20applying%20facial%20oil%20before%20sleep%2C%20peaceful%20bedroom%20setting%2C%20soft%20pink%20and%20blue%20lighting%2C%20premium%20lifestyle%20photography%2C%20korean%20beauty%20nighttime%20ritual%20aesthetic&width=600&height=500&seq=11&orientation=landscape',
      imagePosition: 'right' as const,
      badge: {
        icon: 'fa-bed',
        title: 'Night Recovery',
        subtitle: '8-Hour Results',
      },
      listItems: [
        'Deep hydration and nourishment',
        'Repair and regeneration of skin cells',
        'Wake up to visibly brighter, smoother skin',
      ],
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-rose-600 text-sm font-semibold tracking-wider uppercase mb-2">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
            The Science of Natural Beauty
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our formulas combine traditional Korean beauty wisdom with modern skincare science.
          </p>
        </div>
        <div className="flex flex-col space-y-24">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 