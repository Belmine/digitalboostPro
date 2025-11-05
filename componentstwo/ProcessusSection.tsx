import React from 'react';
import { Search, Lightbulb, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';


const ProcessusSection = () => {
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Comment nous <span className="text-green-600">travaillons</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un processus simple et efficace en 4 étapes pour transformer votre présence digitale
        </p>
      </div>
      {/* Visual Process Flow */}
      <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Process Image */}
          <div className="relative">
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
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              De l'analyse aux <span className="text-green-600">résultats concrets</span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre processus éprouvé garantit une transformation digitale réussie. 
              Chaque étape est pensée pour maximiser votre retour sur investissement.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Résultats mesurables</div>
                  <div className="text-sm text-gray-600">KPIs clairs et reporting transparent</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Équipe dédiée</div>
                  <div className="text-sm text-gray-600">Experts spécialisés pour chaque domaine</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Suivi personnalisé</div>
                  <div className="text-sm text-gray-600">Accompagnement continu et ajustements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CTA */}
      <div className="text-center mt-16">
        <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto">
          <span>Commencer maintenant</span>
        </button>
      </div>
    </section>
  );
};

export default ProcessusSection;