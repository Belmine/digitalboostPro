import React from 'react';
import { Award, Users, Target, Zap, TrendingUp, Shield, Clock, Heart } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
 
  

  

  return (
    <div className="bg-white">
      {/* Hero Section */}
    

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image/Visual */}
            <div className="relative ">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                              {/* Mock Dashboard/Analytics Interface */}
                              <div className="w-full max-w-sm space-y-4">
                                {/* /*mettre une image à la place , l'image est dans le dossier public */ }
                                <Image
                                  src="/images/two.png"
                                  alt="Croissance de votre entreprise grâce à la digitalisation de vos processus"
                                  width={1000}
                                  height={360}
                                  className="rounded-lg object-cover"
                                />         
                              </div>
                            </div>
              
              
             
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Une agence qui comprend vos défis
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Née de la frustration face aux agences traditionnelles qui promettent beaucoup 
                mais délivrent peu, <strong className="text-gray-900">DigitalBoost Pro</strong> a 
                été fondée avec une vision simple : créer une agence qui place les résultats au 
                centre de tout.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Nous ne croyons pas aux solutions génériques. Chaque entreprise est unique, avec 
                ses propres défis et opportunités. C'est pourquoi nous développons des stratégies 
                sur-mesure, basées sur des données concrètes et une compréhension approfondie de 
                votre marché.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Certifiés Google Partner
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  Meta Business Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
     
    </div>
  );
};

export default AboutSection;