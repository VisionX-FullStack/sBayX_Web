'use client';

import Link from 'next/link';

export default function SuccessStories() {
  const stories = [
    {
      company: 'TechFlow Solutions',
      industry: 'Technology',
      achievement: '300% Revenue Growth',
      description: 'Successfully expanded from Shanghai to Silicon Valley, establishing a strong presence in the North American tech market.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20office%20with%20diverse%20team%20working%20collaboratively%2C%20clean%20professional%20environment%2C%20glass%20walls%20and%20modern%20furniture%2C%20representing%20successful%20technology%20company%20expansion%2C%20natural%20lighting%20and%20professional%20atmosphere&width=400&height=300&seq=success-001&orientation=landscape',
      results: ['3 offices opened', '50+ employees hired', 'Major contracts secured']
    },
    {
      company: 'GreenEnergy Group',
      industry: 'Renewable Energy',
      achievement: '$50M Investment Raised',
      description: 'Built a renewable energy business in North America through strategic partnerships and government support.',
      image: 'https://readdy.ai/api/search-image?query=Solar%20panels%20and%20wind%20turbines%20in%20a%20clean%20energy%20facility%2C%20modern%20renewable%20energy%20infrastructure%2C%20professional%20industrial%20setting%20with%20blue%20skies%2C%20representing%20successful%20green%20energy%20expansion&width=400&height=300&seq=success-002&orientation=landscape',
      results: ['5 solar farms built', 'Government contracts secured', 'Local partnerships established']
    },
    {
      company: 'FashionForward Co.',
      industry: 'Retail & Fashion',
      achievement: '150 Store Locations',
      description: 'Transformed from a Chinese fashion brand into a North American retail success story through strategic market positioning.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20fashion%20retail%20store%20with%20elegant%20displays%2C%20contemporary%20clothing%20boutique%20interior%2C%20professional%20retail%20environment%20with%20stylish%20clothing%20displays%2C%20clean%20minimalist%20design&width=400&height=300&seq=success-003&orientation=landscape',
      results: ['Nationwide retail chain', 'Strong brand recognition', 'High customer loyalty']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from Chinese enterprises that trusted us with their North American expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${story.image})` }}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{story.company}</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {story.industry}
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-3">
                  {story.achievement}
                </div>
                <p className="text-gray-600 mb-4">
                  {story.description}
                </p>
                <div className="space-y-2">
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/success-stories" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap cursor-pointer inline-block">
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
