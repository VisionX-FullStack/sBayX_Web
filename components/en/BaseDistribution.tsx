'use client';

import Link from 'next/link';

export default function BaseDistribution() {
  const bases = [
    {
      id: 'silicon-valley',
      name: 'Silicon Valley Shenzhen Bay Building Incubator',
      location: 'Silicon Valley, California',
      area: 'Near Google / NVIDIA',
      features: ['Tech Innovation Hub', 'Premier Incubation Environment', 'Rich VC Resources', 'Concentration of Tech Talent'],
      image: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/82747c32093ae094883627329a83e78d.png',
      link: '/silicon-valley-campus'
    },
    {
      id: 'newark-campus',
      name: 'Smart Campus / Overseas Warehouse',
      location: 'Newark, California',
      area: '31,500 sq ft',
      features: ['Large Warehouse Space', 'Smart Management', 'Convenient Logistics Network', 'Integrated Services'],
      image: 'https://readdy.ai/api/search-image?query=Large%20modern%20warehouse%20and%20office%20complex%20in%20Newark%20California%2C%20smart%20campus%20facility%20with%20integrated%20storage%20and%20office%20spaces%2C%20contemporary%20industrial%20architecture%20with%20loading%20docks%20and%20office%20areas&width=600&height=400&seq=base-002&orientation=landscape',
      link: '/newark-campus'
    },
    {
      id: 'east-coast',
      name: 'East Coast Incubation Base',
      location: 'US East Coast',
      area: 'Strategic Location',
      features: ['East Coast Market Access', 'Proximity to Financial Centers', 'International Trade Facilitation', 'Rich Policy Resources'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20incubator%20facility%20on%20US%20East%20Coast%2C%20modern%20office%20building%20with%20financial%20district%20skyline%20in%20background%2C%20contemporary%20architecture%20representing%20business%20growth%20and%20innovation&width=600&height=400&seq=base-003&orientation=landscape',
      link: '/east-coast-campus'
    },
    {
      id: 'chicago-ftz',
      name: 'Chicago Free Trade Zone Base',
      location: 'Chicago, Illinois',
      area: '2,900 Acres of Bonded Land',
      features: ['FTZ Policy Benefits', 'Tariff Advantages', 'Product Assembly', 'Trade Facilitation'],
      image: 'https://readdy.ai/api/search-image?query=Chicago%20free%20trade%20zone%20facility%20with%20cargo%20operations%2C%20modern%20logistics%20and%20manufacturing%20complex%20near%20airport%2C%20industrial%20buildings%20with%20trade%20zone%20signage%20and%20shipping%20containers&width=600&height=400&seq=base-004&orientation=landscape',
      link: '/chicago-ftz'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            sBayX has established a comprehensive service network across North America. Our four strategically
            positioned incubation bases span the US West Coast, East Coast, and Midwest free trade zone,
            delivering full-spectrum support for Chinese enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {bases.map((base) => (
            <div key={base.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${base.image})` }}>
                <div className="h-full bg-black bg-opacity-20 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{base.name}</h3>
                    <p className="text-sm opacity-90">{base.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span className="text-sm">{base.area}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {base.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={base.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer group"
                >
                  <span className="mr-2">Learn More</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Coverage, Local Service</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our four bases form a complete service network. Wherever your target market is in the United States,
            we provide nearby professional support tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <div className="flex items-center">
              <i className="ri-building-line mr-2 text-blue-600"></i>
              <span>4 Incubation Bases</span>
            </div>
            <div className="flex items-center">
              <i className="ri-global-line mr-2 text-blue-600"></i>
              <span>Both Coasts Covered</span>
            </div>
            <div className="flex items-center">
              <i className="ri-truck-line mr-2 text-blue-600"></i>
              <span>2 Overseas Warehouses</span>
            </div>
            <div className="flex items-center">
              <i className="ri-shield-check-line mr-2 text-blue-600"></i>
              <span>1 Free Trade Zone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
