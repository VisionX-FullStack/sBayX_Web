'use client';

import Link from 'next/link';

export default function OperationPlan() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Operations & Team
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            sBayX has developed a comprehensive operations framework built around ten core service modules,
            providing professional matchmaking and support services for Chinese enterprises and overseas talent.
          </p>
          <Link href="/operation-plan" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap cursor-pointer inline-block">
            View Full Plan
          </Link>
        </div>
      </div>
    </section>
  );
}
