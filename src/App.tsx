import React, { useEffect, useState } from 'react';
import { Heart, Mountain, Waves, Flower } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100">
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637"
              alt="Romantic sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="relative text-center text-white px-4">
            <Heart className="w-16 h-16 mx-auto mb-6 text-rose-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">For My Love</h1>
            <p className="text-xl md:text-2xl italic">Every moment with you is a gift</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1494548162494-384bba4ab999"
                alt="Mountain sunrise"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <Mountain className="w-6 h-6 mb-2" />
                  <p className="text-lg font-semibold">Our next adventure awaits</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732"
                alt="Peaceful beach"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <Waves className="w-6 h-6 mb-2" />
                  <p className="text-lg font-semibold">Like waves, my love never ends</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3"
                alt="Red roses"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <Flower className="w-6 h-6 mb-2" />
                  <p className="text-lg font-semibold">Beautiful like you</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-white/80 backdrop-blur-sm py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Every day with you is like a beautiful dream
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From sunrise to sunset, my heart beats for you. Every mountain we'll climb, 
              every wave we'll watch, and every flower that blooms reminds me of your beauty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;