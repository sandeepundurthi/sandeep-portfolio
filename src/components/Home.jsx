import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src="/IMG_1450.jpeg"
        alt="Sandeep Undurthi"
        className="w-32 h-32 rounded-full border-4 border-teal-500 shadow-lg mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Sandeep Undurthi</h1>
      <p className="text-lg md:text-xl text-teal-400 mb-4">Turning Complex Data Into Actionable Insights</p>
      <p className="text-base md:text-lg max-w-xl text-gray-300 mb-6">
        Data Scientist | ML Engineer | AI Innovator
      </p>
      <ChevronDown className="animate-bounce text-teal-400 w-6 h-6" />
    </section>
  );
}

