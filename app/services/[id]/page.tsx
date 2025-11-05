import React from "react";


export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Service ID: {params.id}
        </h2>
        <p className="text-lg text-gray-600">
          Détails du service avec l'ID {params.id} seront affichés ici.
        </p>
      </div>
      {/* Additional content can be added here */}
    </section>
  );
}