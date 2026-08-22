import React from "react";

const PropertiesSection = ({ properties, onSelectProperty, onBookVisit, selectedCity, onSelectCity }) => {
  const cities = ["Tous", "Paris", "Cannes", "Lyon", "Bordeaux", "Côte d'Azur"];

  return (
    <section id="biens" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200/60">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider block mb-2">
            Sélection Exclusive
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Découvrez Nos Biens Coup de Cœur
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Des adresses prestigieuses rigoureusement sélectionnées partout en France.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => onSelectCity(city)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCity === city
                  ? "bg-[#1e2b85] text-white shadow-sm"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Properties Grid with bottom floating glass card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((prop) => (
          <div
            key={prop.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col cursor-pointer"
            onClick={() => onSelectProperty(prop)}
          >
            {/* Image Container */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={prop.image}
                alt={prop.name}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1e2b85] shadow-sm">
                {prop.type}
              </div>

              <div className="absolute top-4 right-4 bg-[#1e2b85] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                {prop.priceFormatted}
              </div>

              {/* Floating Bottom Details Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/40">
                <h4 className="text-sm font-bold text-gray-900 truncate">
                  {prop.name}
                </h4>
                
                <div className="flex items-center gap-1 text-[11px] text-gray-500 truncate mt-0.5">
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{prop.location}</span>
                </div>

                {/* Specs with SVG Icons */}
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

            {/* Bottom Actions */}
            <div className="p-4 bg-gray-50/50 flex items-center justify-between gap-2 mt-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProperty(prop);
                }}
                className="text-xs font-bold text-[#1e2b85] hover:underline"
              >
                Voir les détails →
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookVisit(prop);
                }}
                className="bg-[#1e2b85] hover:bg-[#162169] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all"
              >
                Planifier une visite
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PropertiesSection;
