import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center h-screen bg-black text-white">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" src="../assets/herobg.mp4" autoPlay loop muted />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold">Explore the World with Us</h1>
        <p className="text-lg md:text-xl mt-4">Your journey starts here. Discover new places, cultures, and experiences.</p>
        <a href="#features" className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-lg rounded-full transition duration-300">Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
