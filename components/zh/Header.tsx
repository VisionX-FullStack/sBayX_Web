
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/zh" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
                深贝思sBayX
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/zh" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              首页
            </Link>
            <Link href="/zh#overview" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              项目概况
            </Link>
            <Link href="/zh#operation" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              运营方案
            </Link>
            <Link href="/zh#ftz" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              美国自贸区
            </Link>
            <Link href="/zh#services" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              服务项目
            </Link>
            <Link href="/en" className="text-gray-500 hover:text-gray-700 font-medium whitespace-nowrap cursor-pointer text-sm border border-gray-300 px-3 py-1 rounded">
              English
            </Link>
            <Link href="/zh#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer">
              联系我们
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <Link href="/zh" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              首页
            </Link>
            <Link href="/zh#overview" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              项目概况
            </Link>
            <Link href="/zh#operation" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              运营方案
            </Link>
            <Link href="/zh#ftz" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              美国自贸区
            </Link>
            <Link href="/zh#services" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              服务项目
            </Link>
            <Link href="/zh#contact" className="block py-2 text-blue-600 font-medium cursor-pointer">
              联系我们
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}