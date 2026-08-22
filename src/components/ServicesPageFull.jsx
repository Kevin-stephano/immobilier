import React, { useState } from "react";
import { SERVICES_DATA } from "../data/propertiesData";
import LoanSimulator from "./LoanSimulator";

const ServicesPageFull = ({ onOpenContact }) => {
  const [hoveredService, setHoveredService] = useState("fiscalite");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fadeUp">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider block">
          Solutions Immobilières 360°
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Nos Services Immobiliers d'Excellence
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          De la première réflexion stratégique jusqu'à la gestion quotidienne de vos biens, nous vous offrons un accompagnement sur mesure partout en France.
        </p>
      </div>

      {/* Interactive 6 Services Cards with Hover State */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((srv) => {
          const isSelected = hoveredService === srv.id;
          return (
            <div
              key={srv.id}
              onMouseEnter={() => setHoveredService(srv.id)}
              className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                isSelected
                  ? "bg-[#1e2b85] text-white shadow-xl shadow-[#1e2b85]/20 border-transparent -translate-y-1"
                  : "bg-white text-gray-800 border-gray-100 hover:border-gray-300 shadow-sm"
              }`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  isSelected ? "bg-white/15 text-white" : "bg-blue-50 text-[#1e2b85]"
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className={`text-lg font-bold transition-colors ${isSelected ? "text-white" : "text-gray-900"}`}>
                  {srv.title}
                </h3>

                <p className={`text-xs leading-relaxed transition-colors ${isSelected ? "text-blue-100" : "text-gray-500"}`}>
                  {srv.description}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t transition-colors ${isSelected ? "border-white/20 text-blue-100" : "border-gray-100 text-gray-600"}`}>
                <ul className="space-y-1.5 text-[11px]">
                  {srv.details?.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span>✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulator Section included in Services */}
      <LoanSimulator onOpenContact={onOpenContact} />

      {/* CTA Box */}
      <div className="bg-[#1e2b85] rounded-3xl p-10 text-white text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold">Besoin d'un audit personnalisé pour votre projet ?</h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Nos spécialistes en droit immobilier et fiscalité française sont à votre disposition pour un premier échange confidentiel sans engagement.
        </p>
        <button
          onClick={onOpenContact}
          className="bg-white text-[#1e2b85] hover:bg-blue-50 text-xs font-bold px-8 py-3.5 rounded-full uppercase tracking-wider shadow-lg transition-all cursor-pointer"
        >
          Prendre contact avec un expert
        </button>
      </div>

    </div>
  );
};

export default ServicesPageFull;
