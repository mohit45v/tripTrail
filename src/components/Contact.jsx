import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your form submission logic here
    setThankYouMessage(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
        <br/>
      <h1 className="text-4xl mb-6">Get in Touch</h1>
      <p className="text-lg mb-10">We would love to hear from you!</p>
      <div className='bg-gray-800'>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-900 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-900 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-900 rounded"
          rows="4"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 rounded hover:bg-blue-500"
        >
          Send Message
        </button>
      </form>
      </div>
      {thankYouMessage && (
        <div className="mt-4 text-green-400">
          Thank you for your message! We will get back to you soon.
        </div>
      )}

      {/* Contact Details */}
      <div className="mt-10 text-center">
        <div className="flex justify-center items-center mb-2">
          <FaPhone className="mr-2" />
          <span>+91 97453 67890</span>
        </div>
        <div className="flex justify-center items-center mb-2">
          <FaEnvelope className="mr-2" />
          <span>contact@triptide.com</span>
        </div>
        <div className="flex justify-center items-center">
          <FaMapMarkerAlt className="mr-2" />
          <span>Nerul, Navi Mumbai</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
