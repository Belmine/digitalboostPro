import React, { useState, useEffect } from 'react';
import { Search, MousePointer, Zap, TrendingUp, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Play, ArrowRight, Share2, Target, BarChart3, Megaphone, Globe } from 'lucide-react';


const ServicesCarousel = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const services = [
    {
      icon: Search,
      title: 'SEO & Référencement',
      subtitle: 'Dominez Google',
      description: 'Positionnez votre site en première page de Google avec notre expertise SEO avancée. Audit technique, optimisation on-page et stratégie de contenu.',
      features: ['Audit SEO complet', 'Optimisation technique', 'Stratégie de contenu', 'Link building qualifié'],
      gradient: 'from-blue-500 to-cyan-500',
      results: '+185% de trafic organique',
      image: '🔍'
    },
    {
      icon: MousePointer,
      title: 'Google & Meta Ads',
      subtitle: 'ROI Maximisé',
      description: 'Campagnes publicitaires ultra-performantes sur Google Ads et Meta. Ciblage précis, créatifs optimisés et suivi des conversions en temps réel.',
      features: ['Ciblage avancé', 'A/B testing continu', 'Tracking conversions', 'Optimisation ROAS'],
      gradient: 'from-purple-500 to-pink-500',
      results: '+320% de ROAS moyen',
      image: '🎯'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      subtitle: 'Vendez en dormant',
      description: 'Automatisez vos ventes avec des tunnels de conversion intelligents. Email marketing, lead nurturing et CRM intégré pour maximiser vos revenus.',
      features: ['Email sequences', 'Lead scoring', 'CRM intégration', 'Workflows avancés'],
      gradient: 'from-green-500 to-emerald-500',
      results: '+280% de conversions',
      image: '⚡'
    },
    {
      icon: TrendingUp,
      title: 'Growth Hacking',
      subtitle: 'Croissance explosive',
      description: 'Techniques de croissance disruptives pour exploser vos métriques. Expérimentation rapide, optimisation continue et scaling intelligent.',
      features: ['Expérimentation A/B', 'Viral loops', 'Product-led growth', 'Data analytics'],
      gradient: 'from-orange-500 to-red-500',
      results: '+450% de croissance',
      image: '🚀'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, services.length]);

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
    setIsAutoPlay(false);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlay(false);
  };
   
  return (
    <div className="py-20 bg-white relative overflow-hidden">
      
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos services <span className="text-green-600">experts</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour accélérer votre croissance digitale 
            et dominer votre marché
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SEO Service */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Search className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">SEO & Référencement</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Positionnez votre site en première page de Google et augmentez 
              votre trafic organique de manière durable.
            </p>
           
            <Link href="/services/seo-referencement">
            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors cursor-pointer">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          </div>

          {/* Social Media Service */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Share2 className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Créez une communauté engagée autour de votre marque et 
              générez des leads qualifiés via les réseaux sociaux.
            </p>
              <Link href="/services/social-media">
            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors cursor-pointer">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          </div>

          {/* Google Ads Service */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Target className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Google Ads</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Maximisez votre ROI avec des campagnes publicitaires 
              ciblées et optimisées pour la conversion.
            </p>

             <Link href="/services/google-adds">
            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors cursor-pointer">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          </div>

          {/* Analytics Service */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <BarChart3 className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Data</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Prenez des décisions éclairées grâce à des analyses 
              approfondies de vos performances digitales.
            </p>
              <Link href="/services/analytics-data">
            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors cursor-pointer">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          </div>

          {/* Content Marketing Service */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Megaphone className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Content Marketing</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Créez du contenu engageant qui convertit vos visiteurs 
              en clients fidèles et ambassadeurs de votre marque.
            </p>
              <Link href="/services/marketing-content">
            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors cursor-pointer">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          </div>

          {/* Web Development Service */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Globe className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Développement Web</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sites web performants et optimisés pour la conversion, 
              conçus pour offrir une expérience utilisateur exceptionnelle.
            </p>
              <Link href="/services/developpement-web">
            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors cursor-pointer">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
            Discuter de votre projet
          </button>
        </div>
      </section>
    </div> 
  );
};

export default ServicesCarousel;