'use client';

import Link from 'next/link';

export default function ProjectOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 border-2 border-gray-200 rounded-2xl p-12 bg-gray-50/50">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Us
          </h2>
          <div className="max-w-6xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              sBayX is dedicated to becoming the preferred partner for Chinese enterprises entering the North American market.
              We have built a comprehensive service network across the United States — including four incubation zones,
              two overseas warehouses, and one free trade zone — offering end-to-end support from company registration
              and talent matching to marketing and market expansion.
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To empower Chinese enterprises to establish a strong foothold and grow rapidly in the North American market
                through comprehensive one-stop expansion services. We are not just a service provider — we are your trusted
                partner and steadfast support system abroad.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>1M㎡ Bonded Warehouse</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>100+ Incubated Companies</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>7 Service Bases</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>500+ Professionals</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xl whitespace-nowrap cursor-pointer group"
              >
                <span className="mr-2">Learn More</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
