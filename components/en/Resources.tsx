'use client';

import Link from 'next/link';

export default function Resources() {
  const resources = [
    {
      type: 'Guide',
      title: 'Complete Guide to Entering the North American Market',
      description: 'A comprehensive step-by-step guide covering everything from market research to company registration.',
      readTime: '15 min read',
      category: 'Market Entry',
      image: 'https://readdy.ai/api/search-image?query=Business%20planning%20documents%20and%20charts%20on%20a%20desk%2C%20professional%20workspace%20with%20market%20analysis%20reports%2C%20clean%20office%20environment%20with%20strategic%20planning%20materials%2C%20representing%20business%20guide%20resources&width=400&height=250&seq=resource-001&orientation=landscape'
    },
    {
      type: 'Report',
      title: '2024 Chinese Enterprise Expansion Trends',
      description: 'A comprehensive analysis of current trends and opportunities in the North American market.',
      readTime: '12 min read',
      category: 'Market Analysis',
      image: 'https://readdy.ai/api/search-image?query=Financial%20charts%20and%20growth%20graphs%20on%20computer%20screen%2C%20business%20analytics%20dashboard%20with%20trending%20data%2C%20professional%20office%20setting%20with%20data%20visualization%2C%20representing%20market%20research%20report&width=400&height=250&seq=resource-002&orientation=landscape'
    },
    {
      type: 'Checklist',
      title: 'Legal Compliance Checklist for Chinese Enterprises',
      description: 'Essential legal requirements and compliance steps for operating a business in North America.',
      readTime: '8 min read',
      category: 'Legal & Compliance',
      image: 'https://readdy.ai/api/search-image?query=Legal%20documents%20and%20compliance%20paperwork%20on%20desk%2C%20professional%20law%20office%20environment%20with%20contracts%20and%20legal%20files%2C%20clean%20organized%20workspace%20representing%20legal%20compliance&width=400&height=250&seq=resource-003&orientation=landscape'
    },
    {
      type: 'Template',
      title: 'Market Entry Business Plan Template',
      description: 'A customizable business plan template designed specifically for Chinese enterprises expanding abroad.',
      readTime: '10 min read',
      category: 'Business Planning',
      image: 'https://readdy.ai/api/search-image?query=Business%20plan%20template%20on%20computer%20screen%2C%20professional%20office%20workspace%20with%20strategic%20planning%20documents%2C%20clean%20modern%20desk%20setup%20with%20business%20planning%20materials&width=400&height=250&seq=resource-004&orientation=landscape'
    },
    {
      type: 'Webinar',
      title: 'Best Practices for Cultural Integration',
      description: 'Learn how to successfully adapt to and thrive in North American business culture.',
      readTime: '45 min watch',
      category: 'Cultural Integration',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20meeting%20with%20diverse%20team%20members%2C%20international%20business%20conference%20room%2C%20modern%20office%20setting%20with%20collaborative%20discussion%2C%20representing%20cultural%20integration%20training&width=400&height=250&seq=resource-005&orientation=landscape'
    },
    {
      type: 'Case Study',
      title: 'Manufacturing Success in North America',
      description: 'A detailed case study of a Chinese manufacturer that successfully expanded into the US market.',
      readTime: '20 min read',
      category: 'Success Stories',
      image: 'https://readdy.ai/api/search-image?query=Modern%20manufacturing%20facility%20with%20advanced%20equipment%2C%20clean%20industrial%20environment%20with%20production%20lines%2C%20professional%20manufacturing%20plant%20representing%20successful%20business%20expansion&width=400&height=250&seq=resource-006&orientation=landscape'
    },
    {
      type: 'Website',
      title: 'North American Business Ecosystem Navigator',
      description: 'A one-stop platform connecting you with North American business resources, partners, and service providers.',
      readTime: 'Visit Now',
      category: 'Business Network',
      image: 'https://readdy.ai/api/search-image?query=Interactive%20business%20ecosystem%20dashboard%20on%20computer%20screen%2C%20professional%20office%20with%20network%20diagrams%20and%20business%20connections%2C%20modern%20workspace%20representing%20business%20ecosystem%20platform&width=400&height=250&seq=resource-007&orientation=landscape',
      externalUrl: 'https://northamerica-business-ecosystem.com'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access valuable resources, guides, and insights to support your North American expansion journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${resource.image})` }}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {resource.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {resource.category}
                  </span>
                  {resource.externalUrl ? (
                    <a
                      href={resource.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer"
                    >
                      Visit Now →
                    </a>
                  ) : (
                    <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer">
                      Read More →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/resources" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap cursor-pointer inline-block">
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
