import React from "react";

const PropertyDetailModal = ({ property, onClose, onBookVisit }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 animate-fadeUp">
        
        {/* Header Image */}
        <div className="relative h-64 sm:h-72">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer text-sm"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4 bg-[#1e2b85] text-white font-extrabold text-base px-4 py-1.5 rounded-xl shadow-lg">
            {property.priceFormatted}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e2b85]">
              {property.type} · {property.city}
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
              {property.name}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{property.location}</span>
            </div>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-3 gap-3 text-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div>
              <div className="text-xl font-bold text-gray-900">{property.beds}</div>
              <div className="text-[11px] text-gray-500 font-medium">Chambres</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{property.baths}</div>
              <div className="text-[11px] text-gray-500 font-medium">Salles de bain</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{property.area} m²</div>
              <div className="text-[11px] text-gray-500 font-medium">Surface habitable</div>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            {property.description}
          </p>

          {/* Features pills */}
          <div>
            <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">
              Prestations & Équipements
            </h4>
            <div className="flex flex-wrap gap-2">
              {property.features?.map((f, i) => (
                <span key={i} className="text-xs font-medium bg-blue-50 text-[#1e2b85] px-3 py-1 rounded-lg flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#1e2b85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{f}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-bold text-gray-500 hover:text-gray-800 px-4 py-2.5"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onBookVisit(property);
              }}
              className="bg-[#1e2b85] hover:bg-[#162169] text-white text-xs font-bold px-6 py-3 rounded-xl uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Demander une Visite Privée
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PropertyDetailModal;
