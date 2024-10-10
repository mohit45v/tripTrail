import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Personalized Itineraries</h3>
            <p>Get customized travel plans based on your preferences and past journeys.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Nearby Attractions</h3>
            <p>Find exciting places to visit around you, powered by Google Maps.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">User Reviews & Feedback</h3>
            <p>Read reviews and leave your own feedback to help fellow travelers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
