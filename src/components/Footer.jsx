import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200/80 pt-16 pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-100">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="NOVA IMMOBILIER Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-extrabold text-sm tracking-tight text-[#1e2b85] uppercase">
                NOVA IMMOBILIER
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Maison de référence de l'immobilier d'exception et de l'art de vivre en France.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">Nos Agences</h4>
            <p className="text-gray-500">Paris 8e (Avenue Hoche)</p>
            <p className="text-gray-500">Cannes (Boulevard de la Croisette)</p>
            <p className="text-gray-500">Lyon 2e (Place Bellecour)</p>
            <p className="text-gray-500">Bordeaux (Triangle d'Or)</p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">Navigation</h4>
            <p><a href="#accueil" className="text-gray-500 hover:text-[#1e2b85]">Accueil</a></p>
            <p><a href="#apropos" className="text-gray-500 hover:text-[#1e2b85]">Conseillers</a></p>
            <p><a href="#services" className="text-gray-500 hover:text-[#1e2b85]">Services</a></p>
            <p><a href="#biens" className="text-gray-500 hover:text-[#1e2b85]">Biens Coup de Cœur</a></p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">Contact & Horaires</h4>
            <p className="text-gray-500">+33 (0)1 42 68 55 00</p>
            <p className="text-gray-500">contact@nova-immobilier.fr</p>
            <p className="text-gray-400 mt-2">Du Lundi au Samedi : 9h00 - 19h30</p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2025 NOVA IMMOBILIER France. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Mentions Légales</a>
            <a href="#" className="hover:text-gray-600">Politique de Confidentialité</a>
            <a href="#" className="hover:text-gray-600">Barème d'Honoraires</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
