import React, { useState } from "react";
import { STATS_DATA, TEAM_MEMBERS, TESTIMONIALS_DATA } from "../data/propertiesData";

const AboutPageFull = ({ onOpenContact }) => {
  const [hoveredStat, setHoveredStat] = useState(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 animate-fadeUp">
      
      {/* Hero About */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider block">
            Maison de Haute Expertise Immobilière
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            L'Excellence Immobilière au Cœur de la France
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Fondée en 2005 à Paris, <strong>NOVA IMMOBILIER</strong> s'est imposée comme la référence incontournable de la transaction de prestige et de l'art de vivre à la française.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Avec des bureaux permanents à Paris (Avenue Hoche), Cannes (Croisette), Lyon (Bellecour) et Bordeaux (Triangle d'Or), nos collaborateurs allient discrétion absolue, maîtrise juridique et passion de l'architecture.
          </p>

          <div className="pt-2 flex gap-4">
            <button
              onClick={onOpenContact}
              className="bg-[#1e2b85] hover:bg-[#162169] text-white text-xs font-bold px-6 py-3.5 rounded-xl uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Rencontrer un Conseiller Privé
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80"
            alt="Siège Nova Immobilier Paris"
            className="w-full h-[420px] object-cover rounded-[36px] shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
            <div className="text-3xl font-extrabold text-[#1e2b85]">98.7 %</div>
            <p className="text-xs text-gray-500 font-medium mt-1">
              De taux de satisfaction parmi nos acquéreurs et vendeurs de prestige en 2024.
            </p>
          </div>
        </div>
      </div>

      {/* Stats 2x2 section with hover effect */}
      <div className="bg-white rounded-3xl p-10 border border-gray-200/80 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider">Chiffres Clés</span>
          <h2 className="text-3xl font-extrabold text-gray-900">Notre Impact en France</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => {
            const isSelected = hoveredStat === stat.id;
            return (
              <div
                key={stat.id}
                onMouseEnter={() => setHoveredStat(stat.id)}
                className={`p-6 rounded-2xl text-center transition-all duration-300 cursor-pointer ${
                  isSelected ? "bg-[#1e2b85] text-white shadow-xl -translate-y-1" : "bg-gray-50 text-gray-900"
                }`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{stat.value}</div>
                <div className={`text-xs font-medium mt-1 ${isSelected ? "text-blue-100" : "text-gray-500"}`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider">Les Hommes & Femmes de NOVA</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Notre Équipe d'Experts Dédiés</h2>
          <p className="text-sm text-gray-500">Des spécialistes passionnés prêts à vous accompagner à chaque étape.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-4 text-center space-y-3 hover:shadow-md transition-all">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-56 object-cover rounded-2xl"
              />
              <h4 className="text-sm font-bold text-gray-900">{member.name}</h4>
              <p className="text-xs text-[#1e2b85] font-semibold">{member.role}</p>
              
              <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{member.location}</span>
              </div>

              <p className="text-xs text-gray-600 font-medium">{member.phone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials with clean SVG stars */}
      <div className="bg-[#1e2b85] rounded-[36px] p-8 sm:p-14 text-white space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Témoignages</span>
          <h2 className="text-3xl font-extrabold">Ce que nos clients disent de nous</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl space-y-4 border border-white/10">
              <div className="flex gap-1 text-yellow-300">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-blue-100 italic leading-relaxed">"{t.text}"</p>
              <div className="pt-2 border-t border-white/15">
                <div className="text-xs font-bold text-white">{t.client}</div>
                <div className="text-[10px] text-blue-200">{t.deal} · {t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutPageFull;
