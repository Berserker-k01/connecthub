import React from 'react';
import { Lightbulb, Star, Users, Leaf } from 'lucide-react';

export function Values() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Nos valeurs fondamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={<Lightbulb className="w-8 h-8" />}
            title="Innovation"
            description="Toujours à l'avant-garde des technologies"
          />
          <ValueCard
            icon={<Star className="w-8 h-8" />}
            title="Excellence"
            description="Une qualité inégalée dans chaque solution"
          />
          <ValueCard
            icon={<Users className="w-8 h-8" />}
            title="Collaboration"
            description="Construire des relations solides avec nos clients"
          />
          <ValueCard
            icon={<Leaf className="w-8 h-8" />}
            title="Durabilité"
            description="Des solutions respectueuses de l'environnement"
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}