import React from "react";
import { PROPERTIES_DATA } from "../data/propertiesData";

const FavoritesDrawer = ({ isOpen, onClose, favorites, onToggleFavorite, onSelectProperty, onBookVisit }) => {
  if (!isOpen) return null;

  const favProperties = PROPERTIES_DATA.filter((p) => favorites.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-md bg-white h-full flex flex-col z-10 shadow-2xl animate-fadeLeft">
        
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Mes Biens Favoris</h3>
            <p className="text-xs text-gray-500">{favProperties.length} sélectionné(s)</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {favProperties.length === 0 ? (
            <div className="text-center py-16 text-gray-400 space-y-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-600">Aucun bien en favori</p>
              <p className="text-xs text-gray-400">Cliquez sur le cœur d'une propriété pour la sauvegarder.</p>
            </div>
          ) : (
            favProperties.map((prop) => (
              <div key={prop.id} className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 flex gap-3 items-center">
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 truncate">{prop.name}</h4>
                  <p className="text-xs font-extrabold text-[#1e2b85] mt-0.5">{prop.priceFormatted}</p>
                  <p className="text-[10px] text-gray-500 truncate">{prop.location}</p>
                  
                  <div className="flex gap-3 mt-2 text-[10px]">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      className="text-[#1e2b85] font-bold hover:underline"
                    >
                      Détails
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onBookVisit(prop);
                      }}
                      className="text-[#1e2b85] font-bold hover:underline"
                    >
                      Demander visite
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onToggleFavorite(prop.id)}
                  className="text-gray-400 hover:text-red-600 p-1 text-sm"
                  title="Supprimer"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default FavoritesDrawer;
