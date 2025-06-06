import React, { useState, useEffect } from "react";
import Header from "./Header";

const Typography: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [activeColorTheme, setActiveColorTheme] = useState("rose");
  const [fontSize, setFontSize] = useState("medium");

  const heroImages = [
    "https://readdy.ai/api/search-image?query=Elegant%2520Korean%2520beauty%2520skincare%2520arrangement%2520with%2520soft%2520pink%2520gradient%2520background%252C%2520rose%2520petals%252C%2520glass%2520bottles%2520with%2520essential%2520oils%252C%2520natural%2520ingredients%2520scattered%2520artistically%252C%2520premium%2520product%2520photography%2520with%2520dreamy%2520lighting%252C%2520luxury%2520beauty%2520aesthetic&width=1440&height=600&seq=8&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Luxurious%2520Korean%2520skincare%2520products%2520displayed%2520on%2520marble%2520surface%252C%2520pastel%2520pink%2520background%2520with%2520soft%2520lighting%252C%2520premium%2520glass%2520bottles%2520with%2520serums%2520and%2520oils%252C%2520rose%2520petals%2520and%2520natural%2520ingredients%252C%2520high-end%2520beauty%2520product%2520photography&width=1440&height=600&seq=19&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Elegant%2520beauty%2520flatlay%2520with%2520Korean%2520skincare%2520products%252C%2520essential%2520oil%2520droppers%252C%2520pink%2520rose%2520petals%252C%2520soft%2520gradient%2520background%252C%2520premium%2520cosmetics%2520arrangement%2520with%2520professional%2520lighting%252C%2520luxury%2520beauty%2520brand%2520aesthetic&width=1440&height=600&seq=20&orientation=landscape",
  ];

  useEffect(() => {
    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    // Auto-rotate hero images
    const heroImageInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(heroImageInterval);
    };
  }, [heroImages.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const colorThemes = {
    rose: {
      primary: "bg-rose-600 hover:bg-rose-700",
      secondary: "border-rose-600 text-rose-600 hover:bg-rose-50",
      gradient: "from-rose-600 to-pink-600",
      bgGradient: "from-rose-50 to-white",
      darkGradient: "from-rose-900 to-pink-900",
      text: "text-rose-600",
      lightText: "text-rose-100",
      veryLightText: "text-rose-200",
      bgLight: "bg-rose-100",
      bgLighter: "bg-rose-50",
      bgLightest: "bg-rose-100/50",
      hover: "hover:text-rose-600",
    },
    emerald: {
      primary: "bg-emerald-600 hover:bg-emerald-700",
      secondary: "border-emerald-600 text-emerald-600 hover:bg-emerald-50",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-white",
      darkGradient: "from-emerald-900 to-teal-900",
      text: "text-emerald-600",
      lightText: "text-emerald-100",
      veryLightText: "text-emerald-200",
      bgLight: "bg-emerald-100",
      bgLighter: "bg-emerald-50",
      bgLightest: "bg-emerald-100/50",
      hover: "hover:text-emerald-600",
    },
    indigo: {
      primary: "bg-indigo-600 hover:bg-indigo-700",
      secondary: "border-indigo-600 text-indigo-600 hover:bg-indigo-50",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-50 to-white",
      darkGradient: "from-indigo-900 to-purple-900",
      text: "text-indigo-600",
      lightText: "text-indigo-100",
      veryLightText: "text-indigo-200",
      bgLight: "bg-indigo-100",
      bgLighter: "bg-indigo-50",
      bgLightest: "bg-indigo-100/50",
      hover: "hover:text-indigo-600",
    },
  };

  const theme = colorThemes[activeColorTheme as keyof typeof colorThemes];

  const fontSizes = {
    small: {
      h1: "text-3xl md:text-4xl lg:text-5xl",
      h2: "text-2xl md:text-3xl",
      h3: "text-xl",
      body: "text-base",
      small: "text-sm",
    },
    medium: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl",
      h3: "text-2xl",
      body: "text-lg",
      small: "text-base",
    },
    large: {
      h1: "text-5xl md:text-6xl lg:text-7xl",
      h2: "text-4xl md:text-5xl",
      h3: "text-3xl",
      body: "text-xl",
      small: "text-lg",
    },
  };

  const fontSizeTheme = fontSizes[fontSize as keyof typeof fontSizes];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      
      {/* Design System Panel */}
      <div className="fixed bottom-5 right-5 z-50 bg-white shadow-xl rounded-xl p-4 w-64">
        <h3 className="font-bold mb-3 text-gray-800">Design System</h3>

        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Color Theme</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveColorTheme("rose")}
              className={`w-8 h-8 rounded-full bg-rose-600 cursor-pointer whitespace-nowrap ${activeColorTheme === "rose" ? "ring-2 ring-offset-2 ring-rose-600" : ""}`}
              aria-label="Rose theme"
            ></button>
            <button
              onClick={() => setActiveColorTheme("emerald")}
              className={`w-8 h-8 rounded-full bg-emerald-600 cursor-pointer whitespace-nowrap ${activeColorTheme === "emerald" ? "ring-2 ring-offset-2 ring-emerald-600" : ""}`}
              aria-label="Emerald theme"
            ></button>
            <button
              onClick={() => setActiveColorTheme("indigo")}
              className={`w-8 h-8 rounded-full bg-indigo-600 cursor-pointer whitespace-nowrap ${activeColorTheme === "indigo" ? "ring-2 ring-offset-2 ring-indigo-600" : ""}`}
              aria-label="Indigo theme"
            ></button>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Typography Scale</p>
          <div className="flex justify-between">
            <button
              onClick={() => setFontSize("small")}
              className={`px-3 py-1 text-xs border !rounded-button cursor-pointer whitespace-nowrap ${fontSize === "small" ? `${theme.primary} text-white` : "border-gray-300"}`}
            >
              Small
            </button>
            <button
              onClick={() => setFontSize("medium")}
              className={`px-3 py-1 text-xs border !rounded-button cursor-pointer whitespace-nowrap ${fontSize === "medium" ? `${theme.primary} text-white` : "border-gray-300"}`}
            >
              Medium
            </button>
            <button
              onClick={() => setFontSize("large")}
              className={`px-3 py-1 text-xs border !rounded-button cursor-pointer whitespace-nowrap ${fontSize === "large" ? `${theme.primary} text-white` : "border-gray-300"}`}
            >
              Large
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-2">
            <button
              className={`${theme.primary} text-white px-3 py-1 text-xs !rounded-button cursor-pointer whitespace-nowrap`}
            >
              Primary Button
            </button>
            <button
              className={`bg-transparent border-2 ${theme.secondary} px-3 py-1 text-xs !rounded-button cursor-pointer whitespace-nowrap`}
            >
              Secondary
            </button>
          </div>
        </div>
      </div>

      {/* Button Style Showcase */}
      <section className="pt-36 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className={`inline-block ${theme.text} text-sm font-semibold tracking-wider uppercase mb-2`}
            >
              Design System
            </span>
            <h2
              className={`${fontSizeTheme.h2} font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient}`}
            >
              Button Styles & Typography
            </h2>
            <p
              className={`${fontSizeTheme.body} text-gray-600 max-w-2xl mx-auto`}
            >
              A collection of button styles and typography scales for our design
              system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Button Styles */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className={`${fontSizeTheme.h3} font-bold mb-6`}>
                Button Styles
              </h3>

              <div className="space-y-8">
                {/* Primary Buttons */}
                <div>
                  <h4 className="font-semibold mb-4">Primary Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <button
                      className={`${theme.primary} text-white px-6 py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all transform hover:scale-105`}
                    >
                      Default
                    </button>
                    <button
                      className={`${theme.primary} text-white px-6 py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all transform hover:scale-105 flex items-center`}
                    >
                      <i className="fas fa-shopping-cart mr-2"></i>
                      With Icon
                    </button>
                    <button
                      className={`${theme.primary} text-white px-6 py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all transform hover:scale-105 opacity-50`}
                      disabled
                    >
                      Disabled
                    </button>
                  </div>
                </div>

                {/* Secondary Buttons */}
                <div>
                  <h4 className="font-semibold mb-4">Secondary Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <button
                      className={`bg-transparent border-2 ${theme.secondary} px-6 py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all transform hover:scale-105`}
                    >
                      Default
                    </button>
                    <button
                      className={`bg-transparent border-2 ${theme.secondary} px-6 py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all transform hover:scale-105 flex items-center`}
                    >
                      Learn More
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                    <button
                      className={`bg-transparent border-2 border-gray-300 text-gray-300 px-6 py-3 !rounded-button cursor-pointer whitespace-nowrap`}
                      disabled
                    >
                      Disabled
                    </button>
                  </div>
                </div>

                {/* Button Sizes */}
                <div>
                  <h4 className="font-semibold mb-4">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      className={`${theme.primary} text-white px-4 py-1 text-sm !rounded-button cursor-pointer whitespace-nowrap`}
                    >
                      Small
                    </button>
                    <button
                      className={`${theme.primary} text-white px-6 py-2 !rounded-button cursor-pointer whitespace-nowrap`}
                    >
                      Medium
                    </button>
                    <button
                      className={`${theme.primary} text-white px-8 py-3 text-lg !rounded-button cursor-pointer whitespace-nowrap`}
                    >
                      Large
                    </button>
                    <button
                      className={`${theme.primary} text-white px-10 py-4 text-xl !rounded-button cursor-pointer whitespace-nowrap`}
                    >
                      X-Large
                    </button>
                  </div>
                </div>

                {/* Icon Buttons */}
                <div>
                  <h4 className="font-semibold mb-4">Icon Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <button
                      className={`${theme.primary} text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer whitespace-nowrap`}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                    <button
                      className={`bg-transparent border-2 ${theme.secondary} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer whitespace-nowrap`}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                    <button
                      className={`bg-gray-100 text-gray-600 hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer whitespace-nowrap`}
                    >
                      <i className="fas fa-share"></i>
                    </button>
                    <button
                      className={`${theme.bgLightest} ${theme.text} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer whitespace-nowrap`}
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className={`${fontSizeTheme.h3} font-bold mb-6`}>
                Typography Scale
              </h3>

              <div className="space-y-8">
                {/* Headings */}
                <div>
                  <h4 className="font-semibold mb-4">Headings</h4>
                  <div className="space-y-4">
                    <div>
                      <h1 className={`${fontSizeTheme.h1} font-bold`}>
                        Heading 1
                      </h1>
                      <p className="text-sm text-gray-500 mt-1">
                        Font size: 4xl-6xl, Font weight: Bold
                      </p>
                    </div>
                    <div>
                      <h2 className={`${fontSizeTheme.h2} font-bold`}>
                        Heading 2
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Font size: 3xl-4xl, Font weight: Bold
                      </p>
                    </div>
                    <div>
                      <h3 className={`${fontSizeTheme.h3} font-bold`}>
                        Heading 3
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Font size: 2xl, Font weight: Bold
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body Text */}
                <div>
                  <h4 className="font-semibold mb-4">Body Text</h4>
                  <div className="space-y-4">
                    <div>
                      <p className={`${fontSizeTheme.body}`}>
                        Regular body text used for main content. Our formulas
                        combine traditional Korean beauty wisdom with modern
                        skincare science for optimal results.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Font size: lg-xl, Font weight: Regular
                      </p>
                    </div>
                    <div>
                      <p className={`${fontSizeTheme.small} text-gray-600`}>
                        Secondary text used for supporting information and
                        details. Premium Korean skincare essentials for radiant,
                        glowing skin.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Font size: base, Font weight: Regular
                      </p>
                    </div>
                  </div>
                </div>

                {/* Special Text Styles */}
                <div>
                  <h4 className="font-semibold mb-4">Special Text Styles</h4>
                  <div className="space-y-4">
                    <div>
                      <p className={`${theme.text} font-semibold`}>
                        Brand Color Text
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Primary brand color with semibold weight
                      </p>
                    </div>
                    <div>
                      <p
                        className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient} font-bold`}
                      >
                        Gradient Text Effect
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Text with gradient color effect
                      </p>
                    </div>
                    <div>
                      <p className="italic">Italic Text Style</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Used for testimonials and quotes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mt-16">
            <h3 className={`${fontSizeTheme.h3} font-bold mb-6 text-center`}>
              Color Palette
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Primary Colors */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div
                  className={`h-32 ${activeColorTheme === "rose" ? "bg-rose-600" : activeColorTheme === "emerald" ? "bg-emerald-600" : "bg-indigo-600"}`}
                ></div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Primary</h4>
                  <p className="text-gray-600 mb-4">
                    Used for primary buttons, important elements, and brand
                    identity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-rose-400" : activeColorTheme === "emerald" ? "bg-emerald-400" : "bg-indigo-400"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-rose-500" : activeColorTheme === "emerald" ? "bg-emerald-500" : "bg-indigo-500"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-rose-600" : activeColorTheme === "emerald" ? "bg-emerald-600" : "bg-indigo-600"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-rose-700" : activeColorTheme === "emerald" ? "bg-emerald-700" : "bg-indigo-700"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-rose-800" : activeColorTheme === "emerald" ? "bg-emerald-800" : "bg-indigo-800"}`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Secondary Colors */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div
                  className={`h-32 ${activeColorTheme === "rose" ? "bg-pink-600" : activeColorTheme === "emerald" ? "bg-teal-600" : "bg-purple-600"}`}
                ></div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Secondary</h4>
                  <p className="text-gray-600 mb-4">
                    Used for accents, gradients, and complementary elements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-pink-400" : activeColorTheme === "emerald" ? "bg-teal-400" : "bg-purple-400"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-pink-500" : activeColorTheme === "emerald" ? "bg-teal-500" : "bg-purple-500"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-pink-600" : activeColorTheme === "emerald" ? "bg-teal-600" : "bg-purple-600"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-pink-700" : activeColorTheme === "emerald" ? "bg-teal-700" : "bg-purple-700"}`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded ${activeColorTheme === "rose" ? "bg-pink-800" : activeColorTheme === "emerald" ? "bg-teal-800" : "bg-purple-800"}`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Neutral Colors */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-32 bg-gray-800"></div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Neutral</h4>
                  <p className="text-gray-600 mb-4">
                    Used for text, backgrounds, and UI elements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-10 h-10 rounded bg-gray-100"></div>
                    <div className="w-10 h-10 rounded bg-gray-300"></div>
                    <div className="w-10 h-10 rounded bg-gray-500"></div>
                    <div className="w-10 h-10 rounded bg-gray-700"></div>
                    <div className="w-10 h-10 rounded bg-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Gift Sets
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
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
    </div>
  );
};

export default Typography; 