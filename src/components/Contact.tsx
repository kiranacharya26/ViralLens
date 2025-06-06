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
      <section className="pt-36 pb-20 min-h-screen relative overflow-hidden">
        {/* Background Image Collage */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 opacity-90">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20korean%20beauty%20woman%20glowing%20skin%20applying%20luxury%20facial%20oil%20serum%20professional%20beauty%20photography%20minimalist%20clean%20background%20high%20end%20cosmetic%20campaign%20style%20soft%20lighting%20dreamy%20atmosphere&width=400&height=300&seq=1&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=young%20asian%20woman%20with%20perfect%20skin%20applying%20moisturizer%20luxury%20skincare%20routine%20professional%20beauty%20photography%20soft%20lighting%20dreamy%20atmosphere%20minimalist%20background&width=400&height=300&seq=2&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=korean%20model%20close%20up%20portrait%20glowing%20dewy%20skin%20natural%20makeup%20professional%20beauty%20photography%20soft%20ethereal%20lighting%20clean%20background&width=400&height=300&seq=3&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20asian%20beauty%20influencer%20applying%20serum%20droplets%20luxury%20skincare%20routine%20professional%20photography%20soft%20lighting%20minimalist%20studio&width=400&height=300&seq=4&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=korean%20skincare%20expert%20demonstrating%20facial%20massage%20techniques%20professional%20beauty%20photography%20soft%20lighting%20clean%20background&width=400&height=300&seq=5&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20korean%20beauty%20products%20flatlay%20with%20flowers%20professional%20product%20photography%20soft%20lighting%20marble%20surface&width=400&height=300&seq=6&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=asian%20beauty%20model%20side%20profile%20perfect%20skin%20professional%20beauty%20photography%20ethereal%20lighting%20minimalist%20background&width=400&height=300&seq=7&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=korean%20skincare%20routine%20essence%20application%20close%20up%20shot%20professional%20beauty%20photography%20soft%20lighting%20studio&width=400&height=300&seq=8&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20asian%20woman%20beauty%20portrait%20glowing%20skin%20professional%20photography%20dreamy%20atmosphere%20clean%20background&width=400&height=300&seq=9&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=korean%20beauty%20expert%20facial%20massage%20demonstration%20professional%20photography%20soft%20lighting%20minimalist%20studio&width=400&height=300&seq=10&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20korean%20skincare%20products%20arrangement%20professional%20product%20photography%20soft%20lighting%20clean%20background&width=400&height=300&seq=11&orientation=landscape')`,
            }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=asian%20beauty%20influencer%20skincare%20tutorial%20professional%20beauty%20photography%20ethereal%20lighting%20studio%20setting&width=400&height=300&seq=12&orientation=landscape')`,
            }}
          ></div>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
        {/* Content */}
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

      {/* Features Section with Background Image */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20korean%20skincare%20products%20arrangement%20with%20flowers%20and%20natural%20elements%20on%20marble%20surface%20professional%20product%20photography%20soft%20lighting%20elegant%20composition%20high%20end%20beauty%20campaign&width=1440&height=800&seq=2&orientation=landscape')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white/90"></div>
        {/* Content */}
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span
              className={`inline-block ${theme.text} text-sm font-semibold tracking-wider uppercase mb-2`}
            >
              Why Choose LunaGlow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Experience the Korean Beauty Secret
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our products combine traditional Korean beauty wisdom with
              cutting-edge skincare technology for unparalleled results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div
                className={`w-16 h-16 ${theme.bgLightest} rounded-full flex items-center justify-center mb-6`}
              >
                <i className={`fas fa-leaf ${theme.text} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Natural Ingredients
              </h3>
              <p className="text-gray-600 mb-4">
                Sourced from pristine Korean landscapes, our ingredients are
                carefully selected for their purity and effectiveness.
              </p>
              <a
                href="#"
                className={`inline-flex items-center ${theme.text} font-medium cursor-pointer`}
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div
                className={`w-16 h-16 ${theme.bgLightest} rounded-full flex items-center justify-center mb-6`}
              >
                <i className={`fas fa-flask ${theme.text} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Advanced Formulations
              </h3>
              <p className="text-gray-600 mb-4">
                Our team of scientists develops innovative formulas that deliver
                visible results from the first application.
              </p>
              <a
                href="#"
                className={`inline-flex items-center ${theme.text} font-medium cursor-pointer`}
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div
                className={`w-16 h-16 ${theme.bgLightest} rounded-full flex items-center justify-center mb-6`}
              >
                <i className={`fas fa-heart ${theme.text} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Cruelty-Free Promise
              </h3>
              <p className="text-gray-600 mb-4">
                We're committed to ethical beauty. All our products are
                cruelty-free and developed with sustainable practices.
              </p>
              <a
                href="#"
                className={`inline-flex items-center ${theme.text} font-medium cursor-pointer`}
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 