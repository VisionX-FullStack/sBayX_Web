'use client';

import Link from 'next/link';

export default function OperationPlanPage() {
  const operationPlans = [
    {
      icon: 'ri-links-line',
      title: 'Talent Information Network',
      description: 'Facilitate information exchange and networking among overseas economic and tech talent.',
      details: ['Talent database', 'Communication platform', 'Information sharing', 'Network development']
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Innovation & Entrepreneurship Promotion',
      description: "Promote Shenzhen's innovation and entrepreneurship policies and environment to attract top talent.",
      details: ['Policy interpretation', 'Environment promotion', 'Case sharing', 'Talent attraction']
    },
    {
      icon: 'ri-user-voice-line',
      title: 'Talent Salon Events',
      description: 'Host regular talent salons to strengthen exchange and collaboration among professionals.',
      details: ['Regular salons', 'Themed exchanges', 'Experience sharing', 'Network expansion']
    },
    {
      icon: 'ri-discuss-line',
      title: 'Professional Seminars & Workshops',
      description: 'Organize industry seminars and workshops to create opportunities for exchange and cooperation.',
      details: ['Industry seminars', 'Technical exchange', 'Partnership matchmaking', 'Trend analysis']
    },
    {
      icon: 'ri-calendar-event-line',
      title: 'Event & Conference Hosting',
      description: 'Organize and host events and conferences for enterprises, governments, and organizations in Silicon Valley.',
      details: ['Event planning', 'Conference organization', 'Venue coordination', 'Service support']
    },
    {
      icon: 'ri-handshake-fill',
      title: 'Enterprise-Talent Matchmaking',
      description: 'Host enterprise and talent matchmaking events to accelerate project commercialization.',
      details: ['Matchmaking events', 'Project pairing', 'Commercialization support', 'Landing assistance']
    },
    {
      icon: 'ri-stack-line',
      title: 'Technology-Enterprise Collaboration',
      description: 'Drive collaboration between talent, technology, and enterprises with overseas project matchmaking.',
      details: ['Tech transfer', 'Project matchmaking', 'Partnership facilitation', 'Resource integration']
    },
    {
      icon: 'ri-global-line',
      title: 'Project Landing Services',
      description: 'Attract overseas tech projects, technologies, and talent for local market entry.',
      details: ['Project screening', 'Landing support', 'Resource allocation', 'Follow-up services']
    },
    {
      icon: 'ri-ship-line',
      title: 'Enterprise Overseas Expansion',
      description: 'Assist Shenzhen enterprises in going global, focusing on project-based market entry.',
      details: ['Expansion planning', 'Market analysis', 'Channel development', 'Localization support']
    },
    {
      icon: 'ri-building-2-line',
      title: 'Overseas Workstation Development',
      description: 'Partner with overseas service organizations to build overseas talent workstations.',
      details: ['Workstation setup', 'Institutional partnerships', 'Service network', 'Ongoing operations']
    }
  ];

  const teamMembers = [
    {
      name: 'Zhang Minghua',
      position: 'Chief Executive Officer',
      background: 'Former Asia-Pacific President of a multinational enterprise, 20 years of international business experience.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20business%20executive%20in%20modern%20office%2C%20confident%20CEO%20in%20business%20suit%2C%20clean%20corporate%20headshot%20with%20professional%20lighting%2C%20representing%20senior%20management%20team%20member&width=300&height=300&seq=team-001&orientation=squarish'
    },
    {
      name: 'David Miller',
      position: 'Director of Legal Affairs',
      background: 'Partner at a top US law firm, specializing in corporate legal services.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20American%20lawyer%20in%20business%20suit%2C%20experienced%20legal%20advisor%20in%20law%20office%2C%20confident%20legal%20expert%20with%20professional%20appearance%2C%20representing%20legal%20team%20director&width=300&height=300&seq=team-002&orientation=squarish'
    },
    {
      name: 'Li Huimin',
      position: 'Chief Financial Officer',
      background: 'Certified Public Accountant, formerly at a Big Four accounting firm.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20finance%20director%20in%20business%20attire%2C%20confident%20CFO%20in%20modern%20office%20setting%2C%20clean%20corporate%20headshot%20representing%20financial%20expertise&width=300&height=300&seq=team-003&orientation=squarish'
    },
    {
      name: 'Sarah Johnson',
      position: 'Director of Marketing',
      background: 'North American marketing expert with 15 years of brand management experience.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20marketing%20director%20in%20business%20attire%2C%20experienced%20brand%20manager%20in%20corporate%20environment%2C%20confident%20marketing%20expert%20with%20professional%20appearance&width=300&height=300&seq=team-004&orientation=squarish'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
             style={{backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20environment%20with%20professional%20business%20meeting%20room%2C%20international%20business%20collaboration%20setting%2C%20clean%20professional%20workspace%20with%20global%20connectivity%20theme%2C%20sophisticated%20business%20atmosphere&width=1920&height=600&seq=operation-hero-001&orientation=landscape')`}}>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Operations & Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              sBayX has developed a comprehensive operations framework built around ten core service modules,
              providing professional matchmaking and support services for Chinese enterprises and overseas talent.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Operations Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ten core modules providing comprehensive matchmaking services and support for enterprises and talent
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {operationPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <i className={`${plan.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              World-class talent united to build a professional service team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Contact us to learn more about our operations plan and team services.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/en#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap cursor-pointer">
                Contact Us
              </Link>
              <Link href="/en#services" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 font-semibold whitespace-nowrap cursor-pointer">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
