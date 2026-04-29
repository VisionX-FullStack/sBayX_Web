'use client';

export default function FTZIntroduction() {
  const ftzBenefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Tariff Advantages',
      description: 'Defer import duties and effectively reduce operating costs.',
      benefits: ['Deferred import tariffs', 'Partial tax exemptions', 'Simplified customs procedures']
    },
    {
      icon: 'ri-time-line',
      title: 'Streamlined Customs',
      description: 'Simplified clearance processes that speed up import and export efficiency.',
      benefits: ['24-hour customs clearance', 'Simplified declaration procedures', 'Priority processing']
    },
    {
      icon: 'ri-database-line',
      title: 'Flexible Warehousing',
      description: 'Flexible inventory management supporting multiple cargo handling methods.',
      benefits: ['Indefinite storage', 'Free manufacturing & processing', 'Flexible distribution']
    },
    {
      icon: 'ri-global-line',
      title: 'Trade Freedom',
      description: 'Greater trade flexibility to facilitate international business operations.',
      benefits: ['Free trade policies', 'Diversified business operations', 'International expansion']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            US Free Trade Zone (FTZ)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The US Foreign Trade Zone (FTZ) program offers unique policy advantages and operational conveniences
            for Chinese companies doing business in America. sBayX helps you fully leverage these benefits for efficient operations.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">FTZ Advantages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ftzBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
