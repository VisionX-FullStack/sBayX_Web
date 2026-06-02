'use client';

import Header from '../../../components/en/Header';
import Footer from '../../../components/en/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/b349e6c779d18317080a5713af35b2e4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About sBayX
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <p className="text-xl text-gray-700 leading-relaxed">
                sBayX is a strategic platform dedicated to supporting the global expansion of Chinese enterprises. Rooted in North America and leveraging Silicon Valley's innovation ecosystem, we have built four incubation hubs spanning the US West Coast, East Coast, and the Central Free Trade Zone — offering office space, overseas warehousing, free trade zone resources, and end-to-end landing services to help businesses expand efficiently, compliantly, and cost-effectively.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-700">
                To bridge the commercial gap between China and the US, empowering Chinese enterprises to succeed in global markets.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Advantages</h2>
              <div className="text-xl text-gray-700 space-y-4">
                <p><strong>Strategic Locations:</strong> Silicon Valley (near Google/NVIDIA), Chicago O'Hare Airport, Free Trade Zone (2,900 acres of bonded land)</p>
                <p><strong>Diverse Incubation Spaces:</strong> Showrooms, office areas, gardens, conference and training facilities — all under one roof</p>
                <p><strong>One-Stop Expansion Services:</strong> From company registration, legal & financial services, to warehousing, fulfillment, returns handling, talent incubation, and investor matchmaking — full support throughout your journey</p>
                <p><strong>Resource Synergy:</strong> Partnering with government agencies, universities, research institutions, and investors to host salons, seminars, and project matchmaking events that turn technology and ideas into real business value</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="text-xl text-gray-700 space-y-2">
                <p>Company registration & annual report filing</p>
                <p>Virtual office & dedicated desk rental</p>
                <p>Overseas warehousing & fulfillment (supporting TikTok Shop & Xiaohongshu e-commerce)</p>
                <p>Free trade zone product assembly & tax optimization</p>
                <p>Project incubation, talent acquisition & market promotion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
