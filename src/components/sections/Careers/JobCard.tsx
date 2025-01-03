import React from 'react';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
}

export function JobCard({ title, department, location, type }: JobCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="space-y-2 text-gray-600">
        <p>Département : {department}</p>
        <p>Localisation : {location}</p>
        <p>Type : {type}</p>
      </div>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Postuler
      </button>
    </div>
  );
}