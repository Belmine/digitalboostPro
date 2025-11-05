import React from 'react';
import { useState } from 'react';
import { Play, ArrowRight, Search, Share2, Target, BarChart3, Megaphone, Globe } from 'lucide-react';
import Header from '@/componentstwo/Header';


 

const HeroSection = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      
     
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Propulsez votre croissance avec notre approche{' '}
                <span className="text-green-600">digitale innovante</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Agence marketing digital experte avec une approche disciplinée 
                pour transformer votre présence en ligne et booster vos résultats.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                Audit Gratuit
              </button>
              
              <button className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white ml-1" />
                </div>
                <span className="font-medium">Voir nos résultats</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
              <div className="flex items-center space-x-8 text-gray-400">
                <span className="font-semibold">ManiAgency</span>
                <span className="font-semibold">OgSending</span>
                <span className="font-semibold">QuiZo</span>
                <span className="font-semibold">Nuicu</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Cards */}
          <div className="relative">
            {/* Main Card - 230+ */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">230+</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Grandes entreprises qui<br />
                    nous font confiance et<br />
                    nous recommandent
                  </p>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Mockup */}
            <div className="absolute top-8 right-8 z-20">
              <div className="w-32 h-20 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-2 bg-gray-300 rounded-t-lg"></div>
                <div className="p-2 bg-white">
                  <div className="w-full h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
                </div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-green-400 text-sm">
                  Augmentez votre trafic<br />
                  et vos ventes
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              
              {/* Chart */}
              <div className="flex items-end space-x-2 h-16 mb-4">
                <div className="bg-green-500 w-4 h-8 rounded-sm"></div>
                <div className="bg-green-500 w-4 h-12 rounded-sm"></div>
                <div className="bg-green-500 w-4 h-16 rounded-sm"></div>
                <div className="bg-green-500 w-4 h-10 rounded-sm"></div>
                <div className="bg-green-500 w-4 h-14 rounded-sm"></div>
              </div>
            </div>

            {/* Floating Circle */}
            <div className="absolute top-16 -left-8 w-24 h-24 bg-gray-200 rounded-full opacity-80"></div>
          </div>
        </div>
      </section>


      {/* Stats Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card bg-white rounded-2xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl font-bold text-green-600 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 text-base font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>     */}

      
    </div>
  );
};

export default HeroSection;