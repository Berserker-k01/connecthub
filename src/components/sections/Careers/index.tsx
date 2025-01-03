import React from 'react';
import { JobCard } from './JobCard';

const openPositions = [
  {
    title: "Développeur Full Stack Senior",
    department: "Développement",
    location: "Paris",
    type: "CDI"
  },
  {
    title: "Data Scientist",
    department: "IA & Analytics",
    location: "Remote",
    type: "CDI"
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Lyon",
    type: "CDI"
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Paris",
    type: "CDI"
  }
];

export function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Rejoignez ConnectHub</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Participez à la transformation numérique en rejoignant une équipe passionnée et innovante
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Pourquoi nous rejoindre ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Travaillez sur des projets innovants avec les dernières technologies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Développement</h3>
              <p className="text-gray-600">Formation continue et évolution de carrière personnalisée</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Bien-être</h3>
              <p className="text-gray-600">Équilibre vie pro/perso et environnement de travail stimulant</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-8">Postes ouverts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {openPositions.map((position, index) => (
            <JobCard key={index} {...position} />
          ))}
        </div>
      </div>
    </div>
  );
}