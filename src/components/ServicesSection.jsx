import React, { useState } from "react";
import { SERVICES_DATA } from "../data/propertiesData";

const ServicesSection = ({ onOpenContact }) => {
  const [hoveredService, setHoveredService] = useState("fiscalite"); // default to first service (Optimisation Fiscale)

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider block">
          Notre Savoir-Faire
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Nos Services Immobiliers
        </h2>
        <p className="text-sm text-gray-500 max-w-lg mx-auto">
          Optimisez vos transactions immobilières et investissements avec un accompagnement sur-mesure de haute précision.
        </p>
      </div>

      {/* 2x2 Services Cards Grid with Interactive Hover */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {SERVICES_DATA.slice(0, 4).map((srv) => {
          const isSelected = hoveredService === srv.id;
          return (
            <div
              key={srv.id}
              onMouseEnter={() => setHoveredService(srv.id)}
              className={`p-8 rounded-3xl transition-all duration-300 flex items-start gap-5 cursor-pointer ${
                isSelected
                  ? "bg-[#1e2b85] text-white shadow-xl shadow-[#1e2b85]/25 -translate-y-1"
                  : "bg-white text-gray-800 border border-gray-100 shadow-sm hover:border-gray-300"
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                isSelected ? "bg-white/15 text-white" : "bg-blue-50 text-[#1e2b85]"
              }`}>
                {srv.icon === "tax" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {srv.icon === "home" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {srv.icon === "clock" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {srv.icon === "shield" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
              </div>

              <div className="space-y-2">
                <h3 className={`text-lg font-bold transition-colors ${isSelected ? "text-white" : "text-gray-900"}`}>
                  {srv.title}
                </h3>
                <p className={`text-xs leading-relaxed transition-colors ${isSelected ? "text-blue-100" : "text-gray-500"}`}>
                  {srv.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explore Button */}
      <div className="text-center mt-10">
        <button
          onClick={onOpenContact}
          className="bg-[#1e2b85] hover:bg-[#162169] text-white text-xs font-bold px-8 py-3.5 rounded-full uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-md cursor-pointer active:scale-95"
        >
          <span>Découvrir tous nos services</span>
          <span>→</span>
        </button>
      </div>

    </section>
  );
};

export default ServicesSection;
