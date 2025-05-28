import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    date: null,
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [loading, setLoading] = useState(false); // State for loading
  const formRef = useRef(null);
  const faqRef = useRef(null);
  const emailFormRef = useRef();

  useEffect(() => {
    if (formRef.current) {
      formRef.current.style.opacity = '0';
      formRef.current.style.transform = 'translateY(20px)';
      formRef.current.style.transition = 'all 0.7s ease-in-out';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
          }
        });
      },
      { threshold: 0.3 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!formData.package) newErrors.package = 'Please select a package';
    if (!formData.date) newErrors.date = 'Event date is required';
    if (!formData.details) newErrors.details = 'Please provide details about your event';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Set loading to true on submit
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          emailFormRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccessMessage('Form submitted successfully! A confirmation email has been sent.');
            setShowPopup(true); // Show the popup
            setFormData({
              name: '',
              email: '',
              phone: '',
              package: '',
              date: null,
              details: '',
            });
            setErrors({});
            setTimeout(() => setSuccessMessage(''), 5000);
          },
          (error) => {
            console.error('EmailJS Error:', error.text);
          }
        )
        .finally(() => {
          setLoading(false); // Reset loading state
        });
    } else {
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div className="p-6 pb-15 sm:p-10 bg-[#1a1244] text-[#FBE4D6] min-h-screen" id="contact">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-10 text-[#A86523]">
        Let's make it happen..
      </h1>
      <p className="text-lg sm:text-xl text-center mb-6 sm:mb-10">
        We'd love to hear from you! Fill out the form below to get a quote.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        {/* Left Side: Form */}
        <div ref={formRef}>
          <form
            ref={emailFormRef}
            onSubmit={handleSubmit}
            className="bg-[#2a1b5b] p-6 sm:p-8 rounded-lg shadow-lg space-y-4 sm:space-y-6"
          >
            {/* Name Field */}
            <div>
              <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-lg bg-[#1a1244] text-[#FBE4D6] border border-[#A86523] focus:outline-none focus:ring-2 focus:ring-[#A86523]"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-lg bg-[#1a1244] text-[#FBE4D6] border border-[#A86523] focus:outline-none focus:ring-2 focus:ring-[#A86523]"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-lg bg-[#1a1244] text-[#FBE4D6] border border-[#A86523] focus:outline-none focus:ring-2 focus:ring-[#A86523]"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Select Package Field */}
            <div>
              <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="package">
                Select Package
              </label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-lg bg-[#1a1244] text-[#FBE4D6] border border-[#A86523] focus:outline-none focus:ring-2 focus:ring-[#A86523]"
              >
                <option value="">-- Select a Package --</option>
                <option value="Silver Package">Silver Package</option>
                <option value="Gold Package">Gold Package</option>
                <option value="Diamond Package">Diamond Package</option>
              </select>
              {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package}</p>}
            </div>

            {/* Event Date Field */}
            <div>
              <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="date">
                Date of Event
              </label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                dateFormat="yyyy-MM-dd"
                className="w-full p-2 sm:p-3 rounded-lg bg-[#1a1244] text-[#FBE4D6] border border-[#A86523] focus:outline-none focus:ring-2 focus:ring-[#A86523]"
                placeholderText="Select a date"
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            {/* Event Details Field */}
            <div>
              <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="details">
                Tell us more about your event and your vision
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 sm:p-3 rounded-lg bg-[#1a1244] text-[#FBE4D6] border border-[#A86523] focus:outline-none focus:ring-2 focus:ring-[#A86523]"
              ></textarea>
              {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-[#A86523] text-white font-bold rounded-lg hover:bg-[#8a4e1c] transition-all duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading} // Disable the button when loading
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: FAQ Section */}
        <div
          ref={faqRef}
          className="opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="bg-[#2a1b5b] p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#A86523] mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Do you have questions? We have answers! We have added our top frequently asked questions to make sure all of your questions are answered.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {/* Question 1 */}
              <div className="bg-[#1a1244] p-4 sm:p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-lg sm:text-xl font-semibold text-[#FBE4D6]">
                  Can we customize the package?
                </h3>
                <p className="text-[#FBE4D6] mt-2">
                  Yes, Let’s make a package that fulfills your budget and requirements.
                </p>
              </div>
              {/* Question 2 */}
              <div className="bg-[#1a1244] p-4 sm:p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-lg sm:text-xl font-semibold text-[#FBE4D6]">
                  How Many Hours Do You Offer?
                </h3>
                <p className="text-[#FBE4D6] mt-2">
                  Six hours is the standard. Of course, we can customize that to fit your needs.
                </p>
              </div>
              {/* Question 3 */}
              <div className="bg-[#1a1244] p-4 sm:p-6  rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-lg sm:text-xl font-semibold text-[#FBE4D6]">
                  Do You Deal With Setup And Teardown Of Rental Equipment?
                </h3>
                <p className="text-[#FBE4D6] mt-2">
                  Setup and teardown are always included in our fee. No additional costs added.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-[#1c1236] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="text-lg mb-4">Your email has been sent successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-[#A86523] text-white font-bold rounded-lg hover:bg-[#8a4e1c] transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;