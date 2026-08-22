import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    nom: "", telephone: "", email: "",
    projet: "Achat d'une résidence", description: ""
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 animate-fadeUp">
      
      {/* Full-width dark blue rounded card */}
      <div className="bg-[#1e2b85] rounded-3xl overflow-hidden shadow-2xl shadow-[#1e2b85]/30">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left - Info */}
          <div className="p-10 lg:p-14 text-white space-y-6 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase">
              Parlons de votre projet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Vous Souhaitez Vendre<br />ou Acquérir un Bien ?
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed max-w-sm">
              Bénéficiez d'une estimation confidentielle gratuite et de l'accès à notre catalogue off-market de propriétés d'exception partout en France.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span>Siège : 28 Avenue Hoche, 75008 Paris, France</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <span>Ligne directe : +33 (0)1 42 68 55 00</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span>contact@nova-immobilier.fr</span>
              </div>
            </div>
          </div>

          {/* Right - Form (white card) */}
          <div className="p-6 lg:p-10 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-gray-900">Demande d'Estimation & Contact</h3>

              {sent && (
                <div className="bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl px-4 py-3 font-semibold">
                  Votre demande a bien été envoyée. Nous vous recontactons sous 24h.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text" name="nom" placeholder="Prénom & Nom"
                    value={form.nom} onChange={handleChange} required
                    className="col-span-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1e2b85]/30 focus:border-[#1e2b85] transition-all"
                  />
                  <input
                    type="tel" name="telephone" placeholder="Téléphone"
                    value={form.telephone} onChange={handleChange}
                    className="col-span-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1e2b85]/30 focus:border-[#1e2b85] transition-all"
                  />
                </div>
                <input
                  type="email" name="email" placeholder="Email professionnel ou personnel"
                  value={form.email} onChange={handleChange} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1e2b85]/30 focus:border-[#1e2b85] transition-all"
                />
                <select
                  name="projet" value={form.projet} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#1e2b85]/30 focus:border-[#1e2b85] transition-all bg-white cursor-pointer"
                >
                  <option>Achat d'une résidence</option>
                  <option>Vente d'un bien</option>
                  <option>Investissement locatif</option>
                  <option>Estimation de mon bien</option>
                  <option>Autre projet immobilier</option>
                </select>
                <textarea
                  name="description" placeholder="Décrivez votre recherche ou votre bien..."
                  value={form.description} onChange={handleChange} rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1e2b85]/30 focus:border-[#1e2b85] transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1e2b85] hover:bg-[#162169] text-white font-extrabold text-xs tracking-widest uppercase py-4 rounded-xl transition-all cursor-pointer active:scale-[0.98]"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
