'use client';

import Link from 'next/link';
import Header from '../../../components/en/Header';
import Footer from '../../../components/en/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: 'ri-building-line',
      title: 'Company Registration & Formation',
      description: 'Full assistance with US company registration, including selecting the right business entity type and state of incorporation.',
      items: [
        { name: 'California Company Registration', price: '$680', note: 'Excludes business address' },
        { name: 'Annual Report Service', price: '$520', note: '' },
        { name: 'Zero-Income Tax Filing', price: '$520', note: '' }
      ]
    },
    {
      icon: 'ri-home-office-line',
      title: 'Silicon Valley Shenzhen Bay Incubation Hub',
      description: 'Located in the heart of Silicon Valley, offering flexible office space solutions for growing enterprises.',
      items: [
        { name: 'Small Office Space', price: '$3.68/sqft/mo', note: '' },
        { name: 'Virtual Office', price: '$900/year', note: '' },
        { name: 'Dedicated Desk', price: '$300/mo', note: '' }
      ]
    },
    {
      icon: 'ri-cpu-line',
      title: 'Smart Campus Incubation Hub',
      description: 'A modern smart campus integrating office, warehousing, and logistics in one comprehensive service base.',
      items: [
        { name: 'Small Office Space', price: '$3.68/sqft/mo', note: '' },
        { name: 'Dedicated Desk', price: '$300/mo', note: '' },
        { name: 'Overseas Warehouse Storage', price: 'From $0.5/CMB/day', note: '' },
        { name: 'Overseas Warehouse Fulfillment', price: 'From $0.1/item', note: '' }
      ]
    },
    {
      icon: 'ri-map-pin-line',
      title: 'East Coast Incubation Hub',
      description: 'Strategically located on the US East Coast to serve the needs of businesses targeting the Eastern seaboard.',
      items: [
        { name: 'Small Office Space', price: '$3.68/sqft/mo', note: '' },
        { name: 'Dedicated Desk', price: '$300/mo', note: '' }
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Chicago Free Trade Zone',
      description: 'Take advantage of free trade zone benefits, including product assembly and trade facilitation services.',
      items: [
        { name: 'Product Assembly', price: '$20/hr/person', note: 'Tariff reduction eligible' }
      ]
    },
    {
      icon: 'ri-truck-line',
      title: 'Overseas Warehouse Services',
      description: 'Professional overseas warehousing and logistics services for cross-border e-commerce and trade businesses.',
      items: [
        { name: 'General Cargo Storage', price: 'From $0.5/CMB/day', note: 'Flexible billing' },
        { name: 'General Cargo Fulfillment', price: 'From $0.1/item', note: 'Fast processing' }
      ]
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                sBayX provides comprehensive expansion services for Chinese enterprises, helping them successfully enter the North American market.
              </p>
            </div>
          </div>
        </div>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          {item.note && <div className="text-xs text-gray-500 mt-1">{item.note}</div>}
                        </div>
                        <div className="text-sm font-semibold text-blue-600 ml-4">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your North American Journey?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our professional team for a personalized service plan and detailed quote.
              </p>
              <Link href="/en">
                <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
