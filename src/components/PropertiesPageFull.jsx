import React, { useState } from "react";
import { PROPERTIES_DATA } from "../data/propertiesData";

const PropertiesPageFull = ({ onSelectProperty, onBookVisit, onToggleFavorite, favorites = [] }) => {
  const [selectedCity, setSelectedCity] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(7000000);
  const [minBeds, setMinBeds] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const cities = ["Tous", "Paris", "Cannes", "Lyon", "Bordeaux", "Côte d'Azur", "Alpes"];
  const categories = [
    { id: "all", label: "Toutes les catégories" },
    { id: "duplex", label: "Duplex & Triplex" },
    { id: "appartements", label: "Appartements & Penthouses" },
    { id: "residences", label: "Résidences de Prestige" },
    { id: "architecture", label: "Architecture Contemporaine" },
  ];

  const filtered = PROPERTIES_DATA.filter((p) => {
    if (selectedCity !== "Tous" && p.city !== selectedCity) return false;
    if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
    if (p.price > maxPrice) return false;
    if (p.beds < minBeds) return false;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.location.toLowerCase().includes(q) ||
                    p.type.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeUp">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider block">
          Catalogue Immobilier France
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Nos Propriétés d'Exception
        </h1>
        <p className="text-sm text-gray-500">
          Explorez l'intégralité de nos biens de prestige disponibles à l'achat à Paris, Lyon, Bordeaux, Cannes et dans les Alpes.
        </p>
      </div>

      {/* Comprehensive Filter Bar */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Keyword search */}
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase block mb-1">Recherche</label>
            <input
              type="text"
              placeholder="Adresse, mot clé..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#1e2b85]"
            />
          </div>

          {/* City select */}
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase block mb-1">Localisation</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#1e2b85]"
            >
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Category select */}
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase block mb-1">Type de bien</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#1e2b85]"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Min beds */}
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase block mb-1">Chambres min.</label>
            <select
              value={minBeds}
              onChange={(e) => setMinBeds(Number(e.target.value))}
              className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#1e2b85]"
            >
              <option value="0">Toutes (indifférent)</option>
              <option value="3">3+ chambres</option>
              <option value="4">4+ chambres</option>
              <option value="5">5+ chambres</option>
              <option value="6">6+ chambres</option>
            </select>
          </div>

        </div>

        <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
          <span>{filtered.length} {filtered.length > 1 ? "propriétés trouvées" : "propriété trouvée"}</span>
          <button
            onClick={() => {
              setSelectedCity("Tous");
              setSelectedCategory("all");
              setMaxPrice(7000000);
              setMinBeds(0);
              setSearchTerm("");
            }}
            className="text-[#1e2b85] font-bold hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>

      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((prop) => {
          const isFav = favorites.includes(prop.id);
          return (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1e2b85]">
                  {prop.type}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(prop.id);
                  }}
                  className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                    isFav ? "bg-[#1e2b85] text-white" : "bg-black/40 hover:bg-black/70 text-white"
                  }`}
                  title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
                >
                  <svg className="w-4 h-4" fill={isFav ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/40">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-gray-900 truncate flex-1">
                      {prop.name}
                    </h4>
                    <span className="text-xs font-extrabold text-[#1e2b85] ml-2">
                      {prop.priceFormatted}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 truncate mt-0.5">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{prop.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-600 font-semibold pt-2 mt-2 border-t border-gray-200/60">
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#1e2b85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{prop.beds} ch.</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#1e2b85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>{prop.baths} sdb.</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#1e2b85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>{prop.area} m²</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="p-4 bg-gray-50/50 flex items-center justify-between gap-2 mt-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProperty(prop);
                  }}
                  className="text-xs font-bold text-[#1e2b85] hover:underline"
                >
                  Voir fiche complète →
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookVisit(prop);
                  }}
                  className="bg-[#1e2b85] hover:bg-[#162169] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all"
                >
                  Visiter
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default PropertiesPageFull;
