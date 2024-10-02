import React from 'react';

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Travelers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-700 rounded-lg">
            <p>"This app helped me plan the perfect vacation! I love the recommendations for nearby places."</p>
            <h4 className="mt-4 text-xl font-semibold">— Alex J.</h4>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg">
            <p>"Easy to use and so helpful when traveling to new locations. The maps are a lifesaver!"</p>
            <h4 className="mt-4 text-xl font-semibold">— Maria K.</h4>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg">
            <p>"Great for finding hidden gems in unfamiliar cities. Highly recommend!"</p>
            <h4 className="mt-4 text-xl font-semibold">— John P.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
