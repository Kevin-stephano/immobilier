import React, { useState } from "react";

const VisitModal = ({ property, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  if (!property) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 animate-fadeUp">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl mx-auto font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900">Demande Enregistrée !</h3>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              Notre conseiller dédié pour le bien <strong>{property.name}</strong> vous contactera sous 2 heures pour confirmer votre créneau.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1e2b85]">
                Rendez-vous sur place
              </span>
              <h3 className="text-xl font-extrabold text-gray-900">
                Visite Privée : {property.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {property.priceFormatted} · {property.location}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <input
                type="text"
                required
                placeholder="Nom complet"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e2b85]"
              />

              <input
                type="email"
                required
                placeholder="Adresse email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e2b85]"
              />

              <input
                type="tel"
                required
                placeholder="Téléphone (+33 ...)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e2b85]"
              />

              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e2b85]"
              />

              <textarea
                rows="3"
                placeholder="Précisions ou questions éventuelles..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e2b85]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e2b85] hover:bg-[#162169] text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md mt-2 cursor-pointer"
            >
              Confirmer la Demande de Visite
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default VisitModal;
