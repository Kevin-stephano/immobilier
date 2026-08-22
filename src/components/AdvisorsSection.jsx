import React, { useState } from "react";
import { STATS_DATA } from "../data/propertiesData";

const AdvisorsSection = ({ onOpenContact }) => {
  const [hoveredStat, setHoveredStat] = useState(2); // default to stat 2 (5k+) as in mockup

  return (
    <section id="apropos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading + 2x2 Interactive Stats Grid */}
        <div className="lg:col-span-6 space-y-8">
          
          <div>
            <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider block mb-2">
              Patrimoine & Confiance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Vos Conseillers Immobiliers de Confiance en France
            </h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              Depuis près de deux décennies, notre maison accompagne acquéreurs, propriétaires et investisseurs dans la concrétisation de leurs plus beaux projets immobiliers en France.
            </p>
          </div>

          {/* 2x2 Stats Grid with Dynamic Hover */}
          <div className="grid grid-cols-2 gap-4">
            {STATS_DATA.map((stat) => {
              const isSelected = (hoveredStat === stat.id);
              return (
                <div
                  key={stat.id}
                  onMouseEnter={() => setHoveredStat(stat.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#1e2b85] text-white shadow-xl shadow-[#1e2b85]/25 -translate-y-1"
                      : "bg-white text-gray-900 border border-gray-100 shadow-sm hover:border-gray-300"
                  }`}
                >
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
                    isSelected ? "text-white" : "text-gray-900"
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm font-medium mt-1 transition-colors ${
                    isSelected ? "text-blue-100" : "text-gray-500"
                  }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onOpenContact}
            className="bg-[#1e2b85] hover:bg-[#162169] text-white text-xs font-bold px-6 py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
          >
            Prendre Rendez-vous avec un Expert
          </button>

        </div>

        {/* Right Column: Editorial Photo Composition with Rotating Badge */}
        <div className="lg:col-span-6 relative">
          
          <div className="grid grid-cols-2 gap-4 items-center">
            
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80"
                alt="Architecture moderne France"
                className="w-full h-64 sm:h-72 object-cover rounded-3xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80"
                alt="Intérieur d'exception"
                className="w-full h-44 sm:h-52 object-cover rounded-3xl shadow-lg"
              />
            </div>

            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                alt="Équipe de conseillers immobiliers"
                className="w-full h-80 sm:h-96 object-cover rounded-3xl shadow-lg"
              />
            </div>

          </div>

          {/* Rotating Circular Stamp Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1e2b85] border-4 border-white shadow-2xl flex items-center justify-center text-white z-10">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 animate-spin-slow" viewBox="0 0 100 100">
              <path
                id="textPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[10px] font-bold uppercase tracking-[0.25em] fill-white">
                <textPath href="#textPath">
                  EXPERTISE IMMOBILIÈRE • FRANCE •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdvisorsSection;
