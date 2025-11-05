import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "DigitalBoost Pro a révolutionné notre stratégie marketing. En 6 mois, nous avons multiplié notre chiffre d'affaires par 3 !",
      author: {
        name: "Marc Dubois",
        role: "CEO",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
      },
      company: "TechStart Solutions",
      rating: 5
    },
    {
      id: 2,
      text: "Notre taux de conversion a augmenté de 250% grâce à leur expertise. Une équipe exceptionnelle !",
      author: {
        name: "Sophie Martin",
        role: "Directrice Marketing",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face"
      },
      company: "EcoMode",
      rating: 5
    },
    {
      id: 3,
      text: "+400% d'engagement sur nos réseaux sociaux et une communauté 10 fois plus active. Incroyable !",
      author: {
        name: "Thomas Laurent",
        role: "Fondateur",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
      },
      company: "FitLife Club",
      rating: 5
    },
    
    
   
  ];

  return (
    <div className='bg-gradient-to-br from-gray-50 to-green-50'>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Témoignages clients
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Ils nous font <span className="text-green-600">confiance</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez comment nous avons transformé la présence digitale de nos clients 
            et propulsé leur croissance avec des résultats concrets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-serif text-base sm:text-lg mb-3 sm:mb-4 relative z-10 shadow-md">
                "
              </div>

              {/* Rating Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 relative z-10" role="img" aria-label={`${testimonial.rating} étoiles sur 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                <img 
                  src={testimonial.author.avatar} 
                  alt={`Photo de ${testimonial.author.name}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-500 shadow-sm flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 truncate">
                    {testimonial.author.name}
                  </h4>
                  <p className="text-gray-600 text-xs truncate">
                    {testimonial.author.role}
                  </p>
                  <p className="text-green-600 text-xs font-medium truncate">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-20 px-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 lg:p-12 text-white min-h-[280px] sm:h-80 flex items-center justify-center shadow-2xl">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                Prêt à obtenir ces résultats ?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-5 sm:mb-6 leading-relaxed">
                Découvrez comment nous pouvons transformer votre présence digitale
              </p>
              <button className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-700 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Obtenir un audit gratuit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;