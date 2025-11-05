// components/sections/ServicesSection.js
import { BarChart2, Layout, Zap, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <BarChart2 className="w-8 h-8 text-green-600" />,
    title: "SEO Performance",
    description: "Classement durable en 1ère page Google avec notre approche technique et sémantique.",
    cta: "Voir cas clients →"
  },
  {
    icon: <Zap className="w-8 h-8 text-green-600" />,
    title: "Publicité Digitale",
    description: "Campagnes Google Ads et Meta payantes optimisées pour le ROI.",
    cta: "Audit gratuit →"
  },
  {
    icon: <Layout className="w-8 h-8 text-green-600" />,
    title: "Content Marketing",
    description: "Stratégie éditoriale qui convertit vos visiteurs en clients.",
    cta: "Exemples →"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    title: "Conversion Rate",
    description: "Optimisation de votre tunnel pour multiplier vos ventes.",
    cta: "Analyse gratuite →"
  }
];

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nos <span className="text-green-600">Expertises</span> Clés
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Des solutions sur-mesure pour chaque étape de votre croissance digitale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">
              {service.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}