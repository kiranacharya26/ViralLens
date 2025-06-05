import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
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
      <section className="pt-24 md:pt-36 pb-20 min-h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto backdrop-blur-sm">
            <div className="text-center mb-8 md:mb-12">
              <span className={`inline-block ${theme.text} text-sm font-semibold tracking-wider uppercase mb-2`}>
                Contact Us
              </span>
              <h1 className={`${fontSizeTheme.h1} font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient}`}>
                Get in Touch
              </h1>
              <p className={`${fontSizeTheme.body} text-gray-600 max-w-2xl mx-auto px-4 md:px-0`}>
                Have questions about our products or services? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <div className="p-4 md:p-8 lg:p-10 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-50/50 to-transparent rounded-full blur-2xl -z-10"></div>
                {submitStatus === "success" ? (
                  <div className={`${theme.successBg} ${theme.success} border ${theme.successBorder} rounded-lg p-4 md:p-6 text-center`}>
                    <div className="flex justify-center mb-4">
                      <div className={`${theme.primary} text-white w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center`}>
                        <i className="fas fa-check text-xl md:text-2xl"></i>
                      </div>
                    </div>
                    <h3 className={`${fontSizeTheme.h3} font-bold mb-2`}>Thank You!</h3>
                    <p className="mb-0">Your message has been received. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
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
                            className={`w-full pl-10 pr-4 py-2 md:py-3 border ${
                              errors.fullName ? theme.errorBorder : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-opacity-50 focus:${theme.text} focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.fullName && (
                          <p className={`mt-2 text-sm ${theme.error}`}>
                            <i className="fas fa-exclamation-circle mr-1"></i> {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
                            className={`w-full pl-10 pr-4 py-2 md:py-3 border ${
                              errors.email ? theme.errorBorder : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-opacity-50 focus:${theme.text} focus:border-transparent transition-colors`}
                            placeholder="Enter your email address"
                          />
                        </div>
                        {errors.email && (
                          <p className={`mt-2 text-sm ${theme.error}`}>
                            <i className="fas fa-exclamation-circle mr-1"></i> {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
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
                            className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                          Company/Organization <span className="text-gray-400 font-normal">(Optional)</span>
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
                            className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message <span className="text-gray-400 font-normal">(Optional)</span>
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
                          className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
                          placeholder="How can we help you?"
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
                        className={`${theme.primary} text-white px-6 md:px-8 py-2 md:py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center w-full md:w-auto min-w-[180px] relative overflow-hidden group`}
                      >
                        <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="relative">
                          {isSubmitting ? (
                            <>
                              <i className="fas fa-circle-notch fa-spin mr-2"></i>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 