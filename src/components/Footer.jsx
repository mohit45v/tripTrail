import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-white text-center">
      <p>© 2024 TripTide. All rights reserved.</p>
      
      <section className="flex justify-center py-6 bg-gray-900">
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
