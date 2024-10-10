import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}

      {/*<section 
  className="relative flex justify-center items-center h-screen parallax-bg text-white"
  style={{ backgroundImage: 'url(/images/travel-background.jpg)' }}
> */}


      <section className="hero-section flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/travel-hero.jpg)' }}>
        <h1 className="text-5xl md:text-6xl font-bold text-center">Explore the World with Us</h1>
        <p className="text-lg md:text-xl text-center mt-4">
          Discover new places, cultures, and experiences.
        </p>
        <a href="#features" className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-lg">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="feature-item p-6 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Personalized Itineraries</h3>
              <p>Get customized travel plans based on your preferences and past journeys.</p>
            </div>
            <div className="feature-item p-6 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Nearby Attractions</h3>
              <p>Find exciting places to visit around you, powered by Google Maps.</p>
            </div>
            <div className="feature-item p-6 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">User Reviews & Feedback</h3>
              <p>Read reviews and leave your own feedback to help fellow travelers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Travelers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="review-item p-6 bg-gray-700 rounded-lg">
              <p>"This app helped me plan the perfect vacation! I love the recommendations for nearby places."</p>
              <h4 className="mt-4 text-xl font-semibold">— Alex J.</h4>
            </div>
            <div className="review-item p-6 bg-gray-700 rounded-lg">
              <p>"Easy to use and so helpful when traveling to new locations. The maps are a lifesaver!"</p>
              <h4 className="mt-4 text-xl font-semibold">— Maria K.</h4>
            </div>
            <div className="review-item p-6 bg-gray-700 rounded-lg">
              <p>"Great for finding hidden gems in unfamiliar cities. Highly recommend!"</p>
              <h4 className="mt-4 text-xl font-semibold">— John P.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LandingPage;
