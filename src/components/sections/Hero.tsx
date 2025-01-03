import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="pt-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">ConnectHub</h1>
            <p className="text-2xl font-light mb-4">Première startup togolaise d'innovation technologique</p>
            <p className="text-xl mb-8">"Propulser les entreprises africaines dans l'ère numérique grâce à des solutions technologiques sur mesure."</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2">
              Découvrez nos solutions
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
              alt="Innovation technologique"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <StatCard number="100+" text="Projets réalisés" />
          <StatCard number="50+" text="Partenaires" />
          <StatCard number="95%" text="Clients satisfaits" />
          <StatCard number="24/7" text="Support client" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm opacity-80">{text}</div>
    </div>
  );
}