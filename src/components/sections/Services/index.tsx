import React from 'react';
import { Code, Brain, Shield, Cloud, ShoppingBag, Glasses, Wifi, LineChart } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const servicesList = [
  {
    title: "Développement Logiciel",
    description: "Applications sur mesure pour optimiser vos processus métier",
    icon: Code
  },
  {
    title: "IA & Data Science",
    description: "Automatisation intelligente et analyse prédictive",
    icon: Brain
  },
  {
    title: "Cybersécurité",
    description: "Protection et sécurisation de vos systèmes",
    icon: Shield
  },
  {
    title: "Cloud Computing",
    description: "Solutions cloud scalables et performantes",
    icon: Cloud
  },
  {
    title: "E-commerce",
    description: "Plateformes de vente en ligne optimisées",
    icon: ShoppingBag
  },
  {
    title: "AR/VR",
    description: "Expériences immersives innovantes",
    icon: Glasses
  },
  {
    title: "IoT",
    description: "Solutions connectées intelligentes",
    icon: Wifi
  },
  {
    title: "Consulting",
    description: "Accompagnement stratégique digital",
    icon: LineChart
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Nos Services</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Des solutions technologiques innovantes pour propulser votre entreprise vers l'avenir
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}