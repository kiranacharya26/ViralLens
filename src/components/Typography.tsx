import React, { useState } from 'react';

const Typography: React.FC = () => {
  const [activeColorTheme, setActiveColorTheme] = useState("rose");
  const [fontSize, setFontSize] = useState("medium");

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

  const theme = colorThemes[activeColorTheme as keyof typeof colorThemes];
  const fontSizeTheme = fontSizes[fontSize as keyof typeof fontSizes];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="container mx-auto px-6 relative">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Rose Petal */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200/50 rounded-full flex items-center justify-center text-pink-700 text-lg font-semibold animate-float-slow">
            Rose
          </div>
          {/* Green Tea Leaf */}
          <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-green-200/50 rounded-full flex items-center justify-center text-green-700 text-lg font-semibold animate-float-medium">
            Green Tea
          </div>
          {/* Aloe Vera */}
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-emerald-200/50 rounded-full flex items-center justify-center text-emerald-700 text-xl font-semibold animate-float-slow">
            Aloe
          </div>
          {/* Honey Drop */}
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-amber-200/50 rounded-full flex items-center justify-center text-amber-700 text-lg font-semibold animate-float-fast">
            Honey
          </div>
          {/* Vitamin C */}
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-orange-200/50 rounded-full flex items-center justify-center text-orange-700 text-lg font-semibold animate-float-medium">
            Vitamin C
          </div>
          {/* Ceramide */}
          <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-purple-200/50 rounded-full flex items-center justify-center text-purple-700 text-xl font-semibold animate-float-slow">
            Ceramide
          </div>
          {/* Niacinamide */}
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-blue-200/50 rounded-full flex items-center justify-center text-blue-700 text-lg font-semibold animate-float-medium">
            Niacinamide
          </div>
          {/* Hyaluronic Acid */}
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-cyan-200/50 rounded-full flex items-center justify-center text-cyan-700 text-xl font-semibold animate-float-fast">
            Hyaluronic
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <span className="text-lg font-medium text-gray-600 mb-4 block">Design System</span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Typography</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our comprehensive typography system, designed to create beautiful and consistent user interfaces.
          </p>
        </div>

        {/* Typography Showcase */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className={`${fontSizeTheme.h3} font-bold mb-6`}>Typography Scale</h3>
          <div className="space-y-8">
            {/* Headings */}
            <div>
              <h4 className="font-semibold mb-4">Headings</h4>
              <div className="space-y-4">
                <div>
                  <h1 className={`${fontSizeTheme.h1} font-bold`}>Heading 1</h1>
                  <p className="text-sm text-gray-500 mt-1">Font size: 4xl-6xl, Font weight: Bold</p>
                </div>
                <div>
                  <h2 className={`${fontSizeTheme.h2} font-bold`}>Heading 2</h2>
                  <p className="text-sm text-gray-500 mt-1">Font size: 3xl-4xl, Font weight: Bold</p>
                </div>
                <div>
                  <h3 className={`${fontSizeTheme.h3} font-bold`}>Heading 3</h3>
                  <p className="text-sm text-gray-500 mt-1">Font size: 2xl, Font weight: Bold</p>
                </div>
              </div>
            </div>

            {/* Body Text */}
            <div>
              <h4 className="font-semibold mb-4">Body Text</h4>
              <div className="space-y-4">
                <div>
                  <p className={`${fontSizeTheme.body}`}>
                    Regular body text used for main content. Our formulas combine traditional Korean beauty wisdom with modern skincare science for optimal results.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Font size: lg-xl, Font weight: Regular</p>
                </div>
                <div>
                  <p className={`${fontSizeTheme.small} text-gray-600`}>
                    Secondary text used for supporting information and details. Premium Korean skincare essentials for radiant, glowing skin.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Font size: base, Font weight: Regular</p>
                </div>
              </div>
            </div>

            {/* Special Text Styles */}
            <div>
              <h4 className="font-semibold mb-4">Special Text Styles</h4>
              <div className="space-y-4">
                <div>
                  <p className={`${theme.text} font-semibold`}>Brand Color Text</p>
                  <p className="text-sm text-gray-500 mt-1">Primary brand color with semibold weight</p>
                </div>
                <div>
                  <p className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient} font-bold`}>
                    Gradient Text Effect
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Text with gradient color effect</p>
                </div>
                <div>
                  <p className="italic">Italic Text Style</p>
                  <p className="text-sm text-gray-500 mt-1">Used for testimonials and quotes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Controls */}
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
        </div>
      </div>
    </div>
  );
};

export default Typography; 