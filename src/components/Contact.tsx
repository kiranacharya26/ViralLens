import React, { useState, useEffect } from "react";
import Header from "./Header";

const Contact: React.FC = () => {
  const [activeColorTheme, setActiveColorTheme] = useState("rose");
  const [fontSize, setFontSize] = useState("medium");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
      error: "text-rose-600",
      errorBg: "bg-rose-50",
      errorBorder: "border-rose-300",
      success: "text-emerald-600",
      successBg: "bg-emerald-50",
      successBorder: "border-emerald-300",
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
      error: "text-rose-600",
      errorBg: "bg-rose-50",
      errorBorder: "border-rose-300",
      success: "text-emerald-600",
      successBg: "bg-emerald-50",
      successBorder: "border-emerald-300",
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
      error: "text-rose-600",
      errorBg: "bg-rose-50",
      errorBorder: "border-rose-300",
      success: "text-emerald-600",
      successBg: "bg-emerald-50",
      successBorder: "border-emerald-300",
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          setSubmitStatus("idle");
        }, 3000);
      }, 1500);
    }
  };

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

      {/* Early Access Form Section */}
      <section className="pt-36 pb-20 min-h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto backdrop-blur-sm">
            <div className="text-center mb-12">
              <span
                className={`inline-block ${theme.text} text-sm font-semibold tracking-wider uppercase mb-2`}
              >
                Limited Availability
              </span>
              <h1
                className={`${fontSizeTheme.h1} font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient}`}
              >
                Get Early Access
              </h1>
              <p
                className={`${fontSizeTheme.body} text-gray-600 max-w-2xl mx-auto`}
              >
                Join our exclusive early access program and be among the first
                to experience our revolutionary Korean beauty products. Limited
                spots available.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <div className="p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-50/50 to-transparent rounded-full blur-2xl -z-10"></div>
                {submitStatus === "success" ? (
                  <div
                    className={`${theme.successBg} ${theme.success} border ${theme.successBorder} rounded-lg p-6 text-center`}
                  >
                    <div className="flex justify-center mb-4">
                      <div
                        className={`${theme.primary} text-white w-16 h-16 rounded-full flex items-center justify-center`}
                      >
                        <i className="fas fa-check text-2xl"></i>
                      </div>
                    </div>
                    <h3 className={`${fontSizeTheme.h3} font-bold mb-2`}>
                      Thank You!
                    </h3>
                    <p className="mb-0">
                      Your request for early access has been received. We'll be
                      in touch soon with next steps.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-user text-gray-400"></i>
                          </div>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${
                              errors.fullName
                                ? theme.errorBorder
                                : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-opacity-50 focus:${theme.text} focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.fullName && (
                          <p className={`mt-2 text-sm ${theme.error}`}>
                            <i className="fas fa-exclamation-circle mr-1"></i>{" "}
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email Address <span className="text-rose-600">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-envelope text-gray-400"></i>
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${
                              errors.email
                                ? theme.errorBorder
                                : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-opacity-50 focus:${theme.text} focus:border-transparent transition-colors`}
                            placeholder="Enter your email address"
                          />
                        </div>
                        {errors.email && (
                          <p className={`mt-2 text-sm ${theme.error}`}>
                            <i className="fas fa-exclamation-circle mr-1"></i>{" "}
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Phone Number{" "}
                          <span className="text-gray-400 font-normal">
                            (Optional)
                          </span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-phone text-gray-400"></i>
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Company/Organization{" "}
                          <span className="text-gray-400 font-normal">
                            (Optional)
                          </span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-building text-gray-400"></i>
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Message{" "}
                        <span className="text-gray-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <i className="fas fa-comment text-gray-400"></i>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
                          placeholder="Tell us why you're interested in early access"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      <div className="text-sm text-gray-500">
                        <span className="text-rose-600">*</span> Required fields
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`${theme.primary} text-white px-8 py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center min-w-[180px] relative overflow-hidden group`}
                      >
                        <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="relative">
                          {isSubmitting ? (
                            <>
                              <i className="fas fa-circle-notch fa-spin mr-2"></i>
                              Processing...
                            </>
                          ) : (
                            <>
                              Request Access
                              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                )}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="#"
                      className={`${theme.text} hover:underline cursor-pointer`}
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className={`${theme.text} hover:underline cursor-pointer`}
                    >
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white">
                <div
                  className={`w-12 h-12 ${theme.bgLightest} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`fas fa-star ${theme.text} text-xl`}></i>
                </div>
                <h3 className="font-bold mb-2">Exclusive Benefits</h3>
                <p className="text-gray-600">
                  Get special pricing and bonus products with early access
                  membership.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div
                  className={`w-12 h-12 ${theme.bgLightest} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i
                    className={`fas fa-calendar-alt ${theme.text} text-xl`}
                  ></i>
                </div>
                <h3 className="font-bold mb-2">First to Know</h3>
                <p className="text-gray-600">
                  Receive updates about new products before they're publicly
                  released.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div
                  className={`w-12 h-12 ${theme.bgLightest} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`fas fa-users ${theme.text} text-xl`}></i>
                </div>
                <h3 className="font-bold mb-2">Community Access</h3>
                <p className="text-gray-600">
                  Join our exclusive community of beauty enthusiasts and
                  experts.
                </p>
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

export default Contact; 