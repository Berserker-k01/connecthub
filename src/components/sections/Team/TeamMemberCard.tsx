import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

export function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
      </div>
    </div>
  );
}