'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/en" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400" style={{ fontFamily: 'Pacifico, serif' }}>
                sBayX
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              North America gateway for Chinese enterprises — a professional one-stop expansion platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer">
                <i className="ri-linkedin-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer">
                <i className="ri-twitter-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer">
                <i className="ri-wechat-fill text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white cursor-pointer">Company Formation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white cursor-pointer">Legal & Compliance</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white cursor-pointer">Bank Account Setup</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white cursor-pointer">Finance & Tax Services</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white cursor-pointer">Market Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/overview" className="text-gray-400 hover:text-white cursor-pointer">Project Overview</Link></li>
              <li><Link href="/operation" className="text-gray-400 hover:text-white cursor-pointer">Operations Plan</Link></li>
              <li><Link href="/ftz" className="text-gray-400 hover:text-white cursor-pointer">US Free Trade Zone</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">Contact Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white cursor-pointer">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-blue-400 mt-1"></i>
                <div className="text-gray-400">
                  <div>Silicon Valley HQ</div>
                  <div>3120 Scott Blvd, Santa Clara, CA</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-blue-400"></i>
                <span className="text-gray-400">+1 (650) 690-2661</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-blue-400"></i>
                <span className="text-gray-400">support@sBayX.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-global-line text-blue-400"></i>
                <span className="text-gray-400">www.sBayX.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 sBayX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm cursor-pointer">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm cursor-pointer">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
