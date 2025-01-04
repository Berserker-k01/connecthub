import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

const teamMembers = [
  {
    name: "MOGLO Kossi Daniel",
    role: "CEO",
    image: "daniel.jpg"
  },
  {
    name: "BEGUEDOU Essokila Victoire",
    role: "CTO",
    image: "victoir.jpg"
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Notre Équipe</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Une équipe passionnée dédiée à l'innovation technologique en Afrique
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
