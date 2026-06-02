'use client';

import Link from 'next/link';
import Header from '../../../components/en/Header';
import Footer from '../../../components/en/Footer';

export default function NewarkCampusPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center">
              <span className="relative z-10 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 bg-clip-text text-transparent drop-shadow-sm"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), 0px 0px 8px rgba(29, 78, 216, 0.25)',
                  filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.15))'
                }}>
                Smart Campus / Overseas Warehouse
              </span>
            </h1>
            <p className="text-xl text-gray-600">Core Project of the US West Coast Incubation Zone</p>
          </div>

          <div className="flex gap-8 items-stretch mb-8">
            <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Details</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Address</h3>
                    <p className="text-gray-600 text-lg">8407 Central Ave, Newark CA 94560</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-ruler-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Total Area</h3>
                    <p className="text-gray-600 text-lg">31,500 sq ft (~3,500 ㎡)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Key Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">Prime Silicon Valley location with rich tech resources</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">Large-scale warehouse space to meet enterprise needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">Comprehensive incubation service system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">Convenient transportation and logistics network</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-16 mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
              <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Smart Campus — Real Photos
              </span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">Modern office and warehouse environment providing a world-class workspace</p>

            <div className="overflow-x-auto">
              <div className="flex space-x-10 pb-8" style={{ width: 'max-content' }}>
                {[
                  { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/7668691c01b308089a38bb962f55ab98.png', alt: 'Smart Campus exterior' },
                  { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/d2f7437dea22da71d801aa6eed4e7f31.png', alt: 'Smart Campus interior' },
                  { src: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/887336879b81ae8bdb9e7786fcd25e6c.png', alt: 'Smart Campus facilities' },
                ].map((img, i) => (
                  <div key={i} className="flex-shrink-0">
                    <img src={img.src} alt={img.alt} className="w-[500px] h-96 object-cover object-top rounded-lg shadow-md" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-base text-gray-500 text-center mt-8">Scroll horizontally to view all photos</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Floor Plans</h2>
            <div className="space-y-8">
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <img src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/ce2b5b8de16c658a9a79d98d339e339b.png" alt="Ground floor plan" className="w-full max-w-4xl mx-auto h-auto object-contain" />
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <img src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8374934d90fd7313cbab9536def8d099.png" alt="Second floor plan" className="w-full max-w-4xl mx-auto h-auto object-contain" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#f1f5f9' }}>
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mx-auto mb-4">
                    <i className="ri-building-line text-2xl text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Private Offices</h4>
                  <p className="text-sm text-gray-600">Multiple private offices for teams of all sizes</p>
                </div>

                <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#f0fdf4' }}>
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mx-auto mb-4">
                    <i className="ri-store-line text-2xl text-green-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Warehouse Area</h4>
                  <p className="text-sm text-gray-600">Large-scale storage space for overseas warehouse and logistics needs</p>
                </div>

                <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#faf9fc' }}>
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mx-auto mb-4">
                    <i className="ri-community-line text-2xl text-purple-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Shared Facilities</h4>
                  <p className="text-sm text-gray-600">Full suite of amenities including meeting rooms and lounge areas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Services Offered</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-200 to-red-200 rounded-full mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Acceleration</h3>
                <p className="text-gray-600">Comprehensive incubation and acceleration services for startups</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg border border-teal-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mx-auto mb-4">
                  <i className="ri-megaphone-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Promotion</h3>
                <p className="text-gray-600">Professional North American marketing and brand promotion support</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mx-auto mb-4">
                  <i className="ri-settings-3-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tech Resources</h3>
                <p className="text-gray-600">Rich technology resources and professional talent networks</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/en"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
