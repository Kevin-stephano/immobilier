import React, { useState } from "react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-[#1e2b85] rounded-[36px] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
        
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Parlons de Votre Projet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Vous Souhaitez Vendre ou Acquérir un Bien ?
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              Bénéficiez d'une estimation confidentielle gratuite et de l'accès à notre catalogue off-market de propriétés d'exception partout en France.
            </p>

            <div className="space-y-3.5 text-xs font-medium text-blue-100 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Siège : 28 Avenue Hoche, 75008 Paris, France</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>Ligne directe : +33 (0)1 42 68 55 00</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contact@nova-immobilier.fr</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Demande d'Estimation & Contact
              </h3>

              {sent ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-green-700">Message envoyé avec succès !</h4>
                  <p className="text-xs text-gray-500">Un conseiller vous répondra dans la journée.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Prénom & Nom"
                      className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#1e2b85]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Téléphone"
                      className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#1e2b85]"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Email professionnel ou personnel"
                    className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#1e2b85]"
                  />

                  <select className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-600 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#1e2b85]">
                    <option>Nature de votre projet : Achat d'une résidence</option>
                    <option>Vente d'un bien d'exception</option>
                    <option>Investissement locatif & fiscalité</option>
                    <option>Autre demande</option>
                  </select>

                  <textarea
                    rows="3"
                    placeholder="Décrivez votre recherche ou votre bien..."
                    className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#1e2b85]"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#1e2b85] hover:bg-[#162169] text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md cursor-pointer mt-2"
                  >
                    Envoyer ma Demande
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
