import React, { useState } from "react";
import Header from "./Header";

const Contact: React.FC = () => {
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

  const theme = {
    primary: "bg-rose-600 hover:bg-rose-700",
    secondary: "border-rose-600 text-rose-600 hover:bg-rose-50",
    text: "text-rose-600",
    error: "text-rose-600",
    errorBg: "bg-rose-50",
    errorBorder: "border-rose-300",
    success: "text-emerald-600",
    successBg: "bg-emerald-50",
    successBorder: "border-emerald-300",
    bgLightest: "bg-rose-100/50",
    gradient: "from-rose-600 to-pink-600"
  };

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
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/.netlify/functions/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            message: formData.message || 'No message provided',
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to submit form');
        }

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
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus("error");
        setErrors({
          submit: error instanceof Error ? error.message : 'Failed to submit form',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      
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
                className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient}`}
              >
                Get Early Access
              </h1>
              <p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Join our exclusive early access program and be among the first
                to experience our innovative solutions.
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
                    <h3 className={`${theme.text} font-bold mb-2`}>
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
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                            <i className="fas fa-user text-gray-400 text-base" style={{ opacity: 1 }}></i>
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
                          Company{" "}
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
                        Message <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <i className="fas fa-comment text-gray-400"></i>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className={`w-full pl-10 pr-4 py-3 border ${
                            errors.message
                              ? theme.errorBorder
                              : "border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors resize-none`}
                          placeholder="Tell us why you're interested in early access"
                        ></textarea>
                      </div>
                      {errors.message && (
                        <p className={`mt-2 text-sm ${theme.error}`}>
                          <i className="fas fa-exclamation-circle mr-1"></i>{" "}
                          {errors.message}
                        </p>
                      )}
                    </div>
                    {errors.submit && (
                      <div
                        className={`${theme.errorBg} border ${theme.errorBorder} rounded-lg p-4 text-sm ${theme.error}`}
                      >
                        <i className="fas fa-exclamation-circle mr-2"></i>
                        {errors.submit}
                      </div>
                    )}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`${theme.primary} text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Submitting...
                          </span>
                        ) : (
                          "Request Early Access"
                        )}
                      </button>
                    </div>
                  </form>
                )}
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

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white">
                <div
                  className={`w-12 h-12 ${theme.bgLightest} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`fas fa-calendar-alt ${theme.text} text-xl`}></i>
                </div>
                <h3 className="font-bold mb-2">First to Know</h3>
                <p className="text-gray-600">
                  Receive updates about new products before they're publicly
                  released.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white">
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