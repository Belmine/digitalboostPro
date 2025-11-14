"use client"
import React from 'react';
import ServiceDetailPage from '@/componentstwo/ServiceDetailPage';
import { Search, Share2, Target, BarChart3, Megaphone, Globe, TrendingUp, Users, Zap, LucideIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import Header from '@/componentstwo/Header';
import Footer from '@/componentstwo/Footer';

// Interfaces complètes pour correspondre à ServiceDetailPage
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

// Données complètes des services
const servicesData: Record<string, ServiceData> = {
  'seo-referencement': {
    icon: Search,
    title: 'SEO & Référencement',
    subtitle: 'Dominez la première page de Google',
    description: 'Positionnez votre site en première page de Google avec notre expertise SEO avancée.',
    gradient: 'from-blue-500 to-cyan-500',
    benefits: [
      {
        icon: TrendingUp,
        title: 'Augmentation du trafic organique',
        description: 'Multipliez votre trafic naturel par 3 en moyenne dans les 6 premiers mois'
      },
      {
        icon: Target,
        title: 'Ciblage de mots-clés stratégiques',
        description: 'Positionnement sur les requêtes à fort potentiel de conversion'
      },
      {
        icon: Users,
        title: 'Amélioration de la notoriété',
        description: 'Renforcez votre autorité dans votre domaine d\'expertise'
      },
      {
        icon: Zap,
        title: 'ROI mesurable et durable',
        description: 'Investissement rentable avec des résultats pérennes'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Audit SEO complet',
        description: 'Analyse approfondie de votre site : technique, contenu, backlinks et concurrence.',
        duration: '1 semaine'
      },
      {
        step: '02',
        title: 'Stratégie personnalisée',
        description: 'Élaboration d\'une roadmap SEO sur-mesure adaptée à vos objectifs.',
        duration: '1 semaine'
      },
      {
        step: '03',
        title: 'Optimisation technique',
        description: 'Corrections techniques et amélioration de la vitesse du site.',
        duration: '2-3 semaines'
      },
      {
        step: '04',
        title: 'Content & Link Building',
        description: 'Création de contenu optimisé et acquisition de backlinks.',
        duration: 'En continu'
      },
      {
        step: '05',
        title: 'Suivi & Optimisation',
        description: 'Monitoring des positions et ajustements réguliers.',
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
          'Optimisation complète',
          'Contenu illimité',
          'Link building premium',
          'Rapports personnalisés',
          'Account manager dédié',
          'Stratégie internationale',
          'Formation équipe'
        ]
      }
    },
    testimonial: {
      text: "Grâce à leur expertise SEO, notre trafic organique a été multiplié par 5 en 8 mois. Un investissement qui se rentabilise largement !",
      author: "Marc Dubois",
      role: "CEO",
      company: "TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    faqs: [
      {
        question: 'Combien de temps avant de voir les premiers résultats ?',
        answer: 'Les premiers résultats apparaissent généralement après 2-3 mois, avec une progression significative à partir du 6ème mois.'
      },
      {
        question: 'Garantissez-vous une position en première page ?',
        answer: 'Nous mettons en œuvre les meilleures pratiques pour maximiser vos chances d\'atteindre les premières positions.'
      },
      {
        question: 'Le SEO fonctionne-t-il pour tous les secteurs ?',
        answer: 'Oui, nous adaptons notre stratégie à votre marché et vos objectifs spécifiques.'
      },
      {
        question: 'Quelle est la différence entre SEO et SEA ?',
        answer: 'Le SEO génère du trafic organique gratuit mais demande du temps. Le SEA offre des résultats immédiats mais nécessite un budget continu.'
      }
    ]
  },
  // Répétez la structure complète pour les autres services...
  'social-media': {
    icon: Share2,
    title: 'Social Media',
    subtitle: 'Développez votre communauté',
    description: 'Créez une communauté engagée autour de votre marque sur les réseaux sociaux.',
    gradient: 'from-purple-500 to-pink-500',
    // ... (même structure que ci-dessus avec des données adaptées)
    benefits: [
      { icon: TrendingUp, title: 'Croissance communauté', description: 'Augmentez votre audience rapidement' },
      { icon: Target, title: 'Engagement élevé', description: 'Créez des interactions authentiques' },
      { icon: Users, title: 'Brand awareness', description: 'Renforcez votre image de marque' },
      { icon: Zap, title: 'Leads qualifiés', description: 'Générez des prospects intéressés' }
    ],
    process: [
      { step: '01', title: 'Audit social media', description: 'Analyse de votre présence actuelle', duration: '1 semaine' },
      { step: '02', title: 'Stratégie de contenu', description: 'Planification éditoriale personnalisée', duration: '1 semaine' },
      { step: '03', title: 'Création de contenu', description: 'Production de posts engageants', duration: 'En continu' },
      { step: '04', title: 'Community management', description: 'Gestion et animation quotidienne', duration: 'En continu' },
      { step: '05', title: 'Analyse & reporting', description: 'Suivi des performances', duration: 'Mensuel' }
    ],
    features: [
      'Stratégie social media complète',
      'Création de contenu visuel',
      'Community management actif',
      'Publicités ciblées',
      'Gestion de crise',
      'Influencer marketing',
      'Analytics détaillés',
      'Calendrier éditorial',
      'Stories et reels',
      'Support dédié'
    ],
    pricing: {
      starter: {
        name: 'Starter',
        price: '799€',
        period: '/mois',
        description: 'Pour débuter',
        features: ['2 réseaux sociaux', '12 posts/mois', 'Community management basique', 'Rapport mensuel']
      },
      professional: {
        name: 'Professional',
        price: '1 599€',
        period: '/mois',
        description: 'Le plus populaire',
        features: ['4 réseaux sociaux', '24 posts/mois', 'Community management pro', 'Stories quotidiennes', 'Publicités incluses', 'Rapport hebdomadaire'],
        popular: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Sur mesure',
        period: '',
        description: 'Solution complète',
        features: ['Tous réseaux sociaux', 'Posts illimités', 'Community manager dédié', 'Influencer marketing', 'Campagnes publicitaires', 'Reporting personnalisé']
      }
    },
    testimonial: {
      text: "Notre engagement a été multiplié par 4 et nous générons maintenant 50 leads qualifiés par mois via les réseaux sociaux !",
      author: "Sophie Martin",
      role: "Directrice Marketing",
      company: "EcoMode",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    faqs: [
      { question: 'Sur quels réseaux sociaux êtes-vous actifs ?', answer: 'Nous gérons tous les principaux réseaux : Instagram, Facebook, LinkedIn, TikTok, Twitter/X et YouTube.' },
      { question: 'Combien de posts par semaine recommandez-vous ?', answer: 'Cela dépend de votre secteur, mais généralement 4-7 posts par semaine minimum pour maintenir l\'engagement.' },
      { question: 'Gérez-vous aussi les publicités ?', answer: 'Oui, nous créons et optimisons vos campagnes publicitaires sur tous les réseaux sociaux.' },
      { question: 'Répondez-vous aux commentaires ?', answer: 'Absolument ! Le community management inclut la gestion des commentaires, messages et interactions.' }
    ]
  },
  // Ajoutez les autres services avec la même structure...
};

export default function ServicePage() {
  const params = useParams();
  
  const slug = typeof params?.slug === 'string' 
    ? params.slug 
    : Array.isArray(params?.slug) 
      ? params.slug[0] 
      : '';
  
  const service = slug ? servicesData[slug] : null;
  
  if (!service) {
    return (
        
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service non trouvé
          </h1>
          <p className="text-gray-600 mb-8">
            Le service que vous recherchez n'existe pas.
          </p>
          <a 
            href="/"
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors inline-block"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return <ServiceDetailPage service={service} />;
}