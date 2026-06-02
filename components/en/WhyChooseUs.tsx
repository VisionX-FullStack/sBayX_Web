
'use client';

export default function WhyChooseUs() {
  const stats = [
    {
      number: '500+',
      label: 'Successful Cases',
      icon: 'ri-trophy-line'
    },
    {
      number: '15年',
      label: 'Industry Experience',
      icon: 'ri-calendar-line'
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      icon: 'ri-star-line'
    },
    {
      number: '50+',
      label: 'Professional Consultants',
      icon: 'ri-team-line'
    }
  ];

  const advantages = [
    {
      icon: 'ri-map-pin-line',
      title: 'Localized Expertise',
      description: 'In-depth understanding of the North American market, with extensive localized experience and expertise.'
    },
    {
      icon: 'ri-handshake-line',
      title: 'End-to-End Services',
      description: 'From market research to business operations, we provide seamless professional services throughout the entire process.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance Assurance',
      description: 'Ensure your business complies with local laws and regulations at every stage.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Bilingual Support',
      description: 'Our Chinese-English bilingual team eliminates language barriers and provides a seamless communication experience.'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With extensive experience and a professional team, we are your best partner for expansion into the North American market.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-md">
                <i className={`${advantage.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
