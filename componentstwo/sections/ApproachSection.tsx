// components/sections/ApproachSection.js
import { Circle, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Audit Digital",
    description: "Analyse complète de votre présence en ligne et identification des opportunités.",
    duration: "3-5 jours"
  },
  {
    title: "Stratégie Sur-Mesure",
    description: "Plan d'action personnalisé avec KPI clairs et échéances.",
    duration: "1-2 semaines"
  },
  {
    title: "Exécution Agile",
    description: "Déploiement rapide avec tests et optimisations continues.",
    duration: "2-4 semaines"
  },
  {
    title: "Reporting Transparent",
    description: "Tableaux de bord en temps réel et analyses mensuelles.",
    duration: "Continue"
  }
];

export default function ApproachSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre <span className="text-green-400">Méthode</span> en 4 Étapes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Un processus éprouvé pour des résultats prévisibles et scalables
          </p>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-8 top-16 h-1 w-5/6 bg-green-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="flex items-start mb-4">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-300 mt-1">{step.description}</p>
                  </div>
                </div>
                <div className="ml-14 pl-4 border-l-2 border-gray-700">
                  <span className="text-green-400 text-sm font-medium">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial overlay */}
        <div