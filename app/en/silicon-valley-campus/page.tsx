'use client';

import Link from 'next/link';
import Header from '../../../components/en/Header';
import Footer from '../../../components/en/Footer';

export default function SiliconValleyCampusPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16 pb-20">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/57dd5f691ac26f65aa685f12466b689b.png)` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse"
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3), 0 4px 20px rgba(0, 0, 0, 0.3)',
                  filter: 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.4))'
                }}>
                AI International Space Station
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-cyan-100 animate-fade-in-up animation-delay-300"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(34, 211, 238, 0.3)' }}>
              Silicon Valley Shenzhen Bay Building Incubation Hub
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in-up animation-delay-500"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}>
              An AI industry hub at the heart of Silicon Valley, bridging Chinese tech enterprises with the Silicon Valley ecosystem
            </p>
            <div className="flex items-center justify-center text-cyan-200 text-lg animate-fade-in-up animation-delay-700"
              style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)' }}>
              <i className="ri-map-pin-line mr-2 text-2xl animate-bounce-slow"></i>
              <span>3120 SCOTT BLVD, Santa Clara, CA</span>
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl mb-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-400 rounded-lg rotate-45 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl animate-float"></div>
            </div>

            <div className="relative z-10 text-center text-white px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Vision
                </span>
              </h2>

              <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed">
                <p className="text-cyan-100">
                  <span className="text-2xl font-bold text-cyan-300">AI & Robotics</span>{' '}
                  represent the most critical productivity force, partner, and carrier propelling humanity into the next civilization.
                </p>

                <p className="text-blue-100">
                  As technology accelerates and AI matures rapidly,{' '}
                  <span className="text-xl font-semibold text-blue-300">nations and capital worldwide are prioritizing this track.</span>
                </p>

                <p className="text-purple-100">
                  <span className="text-xl font-bold text-purple-300">3120 SCOTT BLVD</span>{' '}
                  sits at the core of Silicon Valley. We leverage this prime location to build a world-class AI industry hub.
                </p>

                <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border border-cyan-400/20">
                  <p className="text-2xl font-bold text-white mb-4">
                    Bridging Chinese tech enterprises with the Silicon Valley ecosystem
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Becoming an "AI International Space Station"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Floor Plans */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl mb-20">
            <div className="px-8">
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Venue Information
                </span>
              </h2>

              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Floor Plan</h3>
                  <img
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/5236c88b0de083f8f4a5f8429f70e01f.png"
                    alt="Floor plan"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 text-center mb-6">Detailed floor layout</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Floor Layout</h3>
                  <img
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8856231970172784cc3b256d0ba73640.png"
                    alt="Detailed floor layout"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 text-center mt-4">Functional zone distribution by floor</p>
                </div>
              </div>
            </div>
          </section>

          {/* Concept */}
          <section className="mb-20">
            <div className="bg-white rounded-xl shadow-lg px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Overall Concept
                </span>
              </h2>

              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  <span className="text-2xl font-bold text-blue-900 mr-2">AI Space Station</span>
                  is the core concept of our Silicon Valley campus — an innovative ecosystem integrating AI R&D, incubation, and collaboration.
                  We believe that in this era of boundless AI potential, only through cross-disciplinary collaboration and creative collision
                  can we drive breakthroughs in AI technology and contribute to global technological progress.
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-8">Time-travel concept design — exploring the fusion of future technology and cultural heritage</p>
                <img
                  src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/e08566c7a47510a49f0a4db6c637e6e0.png"
                  alt="Concept visualization"
                  className="w-full h-auto object-contain rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Visual Gallery */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Visual Design
                </span>
              </h2>

              <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center leading-relaxed mb-12">
                  Modern visual design showcasing the innovative spirit and future vision of the AI International Space Station
                </p>

                <div className="relative overflow-hidden">
                  <div className="flex space-x-8 pb-4 overflow-x-auto scrollbar-hide" id="visualGallery">
                    {[
                      { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/28f3c1ee8db43eaec0c3a0c5a56b4b61.png', alt: 'Elevator lobby' },
                      { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/de0b7a7179e4b6fdbbe6933f3746b65b.png', alt: 'AI R&D lab' },
                      { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8fab6241d2fd8fe49a88f93ee7d583ed.png', alt: 'Space supply station' },
                      { src: 'https://readdy.ai/api/search-image?query=collaborative%20meeting%20rooms%20with%20digital%20displays%20and%20modern%20furniture%2C%20bright%20natural%20lighting%2C%20glass%20partitions%2C%20contemporary%20design%20for%20tech%20companies&width=480&height=320&seq=visual3&orientation=landscape', alt: 'Collaborative meeting rooms' },
                      { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8f51965c0bc65e8f7c1a938f9c1f706e.png', alt: 'Smart reception lobby' },
                      { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/c1a0bed64d9af9396ab9be320695632d.png', alt: 'AI research lab' },
                    ].map((img, i) => (
                      <div key={i} className="flex-shrink-0 w-[480px]">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                          <img src={img.src} alt={img.alt} className="w-full h-80 object-cover" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-8 space-x-4">
                    <button
                      onClick={() => { const g = document.getElementById('visualGallery'); if (g) g.scrollLeft -= 480; }}
                      className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer shadow-md hover:shadow-lg transition-all"
                    >
                      <i className="ri-arrow-left-line text-gray-600 text-lg"></i>
                    </button>
                    <button
                      onClick={() => { const g = document.getElementById('visualGallery'); if (g) g.scrollLeft += 480; }}
                      className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer shadow-md hover:shadow-lg transition-all"
                    >
                      <i className="ri-arrow-right-line text-gray-600 text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Begin Your AI Journey</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the AI International Space Station and explore the future alongside the world's leading tech enterprises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/en#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-medium whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                <i className="ri-mail-line mr-2"></i>
                Contact Us
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Back to Home
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(45deg); } to { transform: rotate(405deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        .animation-delay-300 { animation-delay: 0.3s; opacity: 0; }
        .animation-delay-500 { animation-delay: 0.5s; opacity: 0; }
        .animation-delay-700 { animation-delay: 0.7s; opacity: 0; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
