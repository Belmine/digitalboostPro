'use client';
import React from 'react';
import { Target, Users, Zap, Heart } from 'lucide-react';


export default function ValueSection() {
     const values = [
    {
      icon: Target,
      title: "Résultats mesurables",
      description: "Chaque action est orientée vers des objectifs concrets et quantifiables pour votre entreprise."
    },
    {
      icon: Users,
      title: "Expertise reconnue",
      description: "Une équipe de spécialistes certifiés avec plus de 10 ans d'expérience en marketing digital."
    },
    {
      icon: Zap,
      title: "Approche innovante",
      description: "Nous utilisons les dernières technologies et stratégies pour vous démarquer de la concurrence."
    },
    {
      icon: Heart,
      title: "Engagement total",
      description: "Votre succès est notre priorité. Nous nous investissons pleinement dans chaque projet."
    }
  ];


    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ce qui nous <span className="text-green-600">différencie</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des valeurs fortes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:bg-green-600 border-2 border-transparent hover:border-green-600"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    );
}