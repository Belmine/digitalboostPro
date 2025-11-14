import React from 'react';
import { ArrowLeft, Check, TrendingUp, Target, Users, Zap, ArrowRight, Star, LucideIcon } from 'lucide-react';

// Interfaces TypeScript
interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  benefits: Benefit[];
  process: ProcessStep[];
  features: string[];
  pricing: {
    starter: PricingPlan;
    professional: PricingPlan;
    enterprise: PricingPlan;
  };
  testimonial: Testimonial;
  faqs: FAQ[];
}

interface ServiceDetailPageProps {
  service?: ServiceData;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  // Données par défaut pour la démo
  const serviceData: ServiceData = service || {
    icon: Target,
    title: 'SEO & Référencement',
    subtitle: 'Dominez la première page de Google',
    description: 'Positionnez votre site en première page de Google avec notre expertise SEO avancée. Nous combinons audit technique approfondi, optimisation on-page perfectionnée et stratégie de contenu sur-mesure pour générer un trafic qualifié et durable.',
    gradient: 'from-green-500 to-emerald-500',
    
    benefits: [
      {
        icon: TrendingUp,
        title: 'Augmentation du trafic organique',
        description: 'Multipliez votre trafic naturel par 3 en moyenne dans les 6 premiers mois'
      },
      {
        icon: Target,
        title: 'Ciblage de mots-clés stratégiques',
        description: 'Positionnement sur les requêtes à fort potentiel de conversion pour votre secteur'
      },
      {
        icon: Users,
        title: 'Amélioration de la notoriété',
        description: 'Renforcez votre autorité et votre crédibilité dans votre domaine d\'expertise'
      },
      {
        icon: Zap,
        title: 'ROI mesurable et durable',
        description: 'Investissement rentable avec des résultats qui perdurent dans le temps'
      }
    ],

    process: [
      {
        step: '01',
        title: 'Audit SEO complet',
        description: 'Analyse approfondie de votre site : technique, contenu, backlinks et concurrence. Identification de toutes les opportunités d\'optimisation.',
        duration: '1 semaine'
      },
      {
        step: '02',
        title: 'Stratégie personnalisée',
        description: 'Élaboration d\'une roadmap SEO sur-mesure adaptée à vos objectifs business et votre budget. Priorisation des actions à fort impact.',
        duration: '1 semaine'
      },
      {
        step: '03',
        title: 'Optimisation technique',
        description: 'Corrections techniques, amélioration de la vitesse, structure des URLs, données structurées et optimisation mobile.',
        duration: '2-3 semaines'
      },
      {
        step: '04',
        title: 'Content & Link Building',
        description: 'Création de contenu optimisé et acquisition de backlinks de qualité pour renforcer votre autorité de domaine.',
        duration: 'En continu'
      },
      {
        step: '05',
        title: 'Suivi & Optimisation',
        description: 'Monitoring des positions, analyse des performances et ajustements réguliers pour maximiser les résultats.',
        duration: 'En continu'
      }
    ],

    features: [
      'Audit technique SEO complet',
      'Recherche et analyse de mots-clés',
      'Optimisation on-page et structure',
      'Création de contenu optimisé SEO',
      'Link building qualitatif',
      'Optimisation de la vitesse',
      'SEO local et Google My Business',
      'Rapports mensuels détaillés',
      'Suivi des positions et trafic',
      'Support et accompagnement dédié'
    ],

    pricing: {
      starter: {
        name: 'Starter',
        price: '999€',
        period: '/mois',
        description: 'Parfait pour les petites entreprises',
        features: [
          'Audit SEO initial',
          'Optimisation de 10 pages',
          '5 articles SEO/mois',
          'Rapport mensuel',
          'Support email'
        ]
      },
      professional: {
        name: 'Professional',
        price: '1 999€',
        period: '/mois',
        description: 'Idéal pour la croissance',
        features: [
          'Audit SEO complet',
          'Optimisation de 30 pages',
          '10 articles SEO/mois',
          'Link building actif',
          'Rapport hebdomadaire',
          'Support prioritaire',
          'Optimisation technique avancée'
        ],
        popular: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Sur mesure',
        period: '',
        description: 'Solution personnalisée',
        features: [
          'Audit SEO illimité',
          'Optimisation complète du site',
          'Contenu illimité',
          'Link building premium',
          'Rapports personnalisés',
          'Account manager dédié',
          'Stratégie internationale',
          'Formation équipe interne'
        ]
      }
    },

    testimonial: {
      text: "Grâce à leur expertise SEO, notre trafic organique a été multiplié par 5 en 8 mois. Nous sommes désormais en première page sur tous nos mots-clés stratégiques. Un investissement qui se rentabilise largement !",
      author: "Marc Dubois",
      role: "CEO",
      company: "TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },

    faqs: [
      {
        question: 'Combien de temps avant de voir les premiers résultats ?',
        answer: 'Les premiers résultats apparaissent généralement après 2-3 mois, avec une progression significative à partir du 6ème mois. Le SEO est un investissement long terme qui génère des résultats durables.'
      },
      {
        question: 'Garantissez-vous une position en première page ?',
        answer: 'Personne ne peut garantir une position spécifique sur Google car l\'algorithme est complexe et en constante évolution. Cependant, nous mettons en œuvre les meilleures pratiques pour maximiser vos chances d\'atteindre les premières positions.'
      },
      {
        question: 'Le SEO fonctionne-t-il pour tous les secteurs ?',
        answer: 'Oui, le SEO est efficace dans tous les secteurs. Nous adaptons notre stratégie à votre marché, votre concurrence et vos objectifs spécifiques pour obtenir les meilleurs résultats.'
      },
      {
        question: 'Quelle est la différence entre SEO et SEA ?',
        answer: 'Le SEO (référencement naturel) génère du trafic organique gratuit mais demande du temps. Le SEA (Google Ads) offre des résultats immédiats mais nécessite un budget publicitaire continu. Nous recommandons souvent une combinaison des deux.'
      }
    ]
  };

  const IconComponent = serviceData.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Retour aux services</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      {/* <section className={`bg-green-100 ${serviceData.gradient} py-20 sm:py-28`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <IconComponent className="w-4 h-4" />
                Service expert
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {serviceData.title}
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                {serviceData.subtitle}
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  Demander un devis
                </button>
             
              </div>
            </div>

          
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Les bénéfices pour votre entreprise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.benefits.map((benefit: Benefit, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notre processus éprouvé
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthodologie structurée pour des résultats garantis
            </p>
          </div>

          <div className="space-y-6">
            {serviceData.process.map((step: ProcessStep, index: number) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-green-500 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-2xl font-bold text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ce qui est inclus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet pour votre succès
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceData.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos formules
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la formule adaptée à vos besoins et votre budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(serviceData.pricing).map((plan: PricingPlan, index: number) => (
              <div key={index} className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-600 shadow-lg scale-105 relative' 
                  : 'border-gray-200 hover:border-green-300 hover:shadow-md'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choisir cette formule
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="flex gap-1 mb-6">
              {[...Array(serviceData.testimonial.rating)].map((_, i: number) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl sm:text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              "{serviceData.testimonial.text}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img 
                src={serviceData.testimonial.avatar}
                alt={serviceData.testimonial.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
              />
              <div>
                <div className="font-bold text-gray-900">{serviceData.testimonial.author}</div>
                <div className="text-gray-600">{serviceData.testimonial.role}</div>
                <div className="text-green-600 font-medium">{serviceData.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir sur ce service
            </p>
          </div>

          <div className="space-y-6">
            {serviceData.faqs.map((faq: FAQ, index: number) => (
              <details key={index} className="bg-gray-50 rounded-xl p-6 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-gray-900">
                  {faq.question}
                  <ArrowRight className="w-5 h-5 text-green-600 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à booster votre {serviceData.title.toLowerCase()} ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Planifiez un appel gratuit de 30 minutes pour discuter de votre projet 
            et découvrir comment nous pouvons vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              Réserver un appel gratuit
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;