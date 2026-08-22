import React, { useState } from "react";

const Navbar = ({ activeTab, setActiveTab, onOpenContact, favoritesCount, onOpenFavorites }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À Propos" },
    { id: "services", label: "Services" },
    { id: "biens", label: "Biens & Propriétés" },
    { id: "simulateur", label: "Simulateur de Prêt" },
    { id: "contact", label: "Contact & Estimation" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-3">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-5 sm:px-8 py-2.5 border border-gray-200/90 shadow-md flex items-center justify-between transition-all">
        
        {/* Left Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-gray-700">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`transition-all cursor-pointer ${
                  isActive
                    ? "text-[#1e2b85] font-extrabold border-b-2 border-[#1e2b85] pb-0.5"
                    : "text-gray-600 hover:text-[#1e2b85]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Center Logo with the Uploaded House Image */}
        <div 
          onClick={() => setActiveTab("accueil")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img
            src="/logo.png"
            alt="NOVA IMMOBILIER Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#1e2b85] uppercase hidden sm:inline">
            NOVA IMMOBILIER
          </span>
        </div>

        {/* Right CTA / Phone Button / Favorites */}
        <div className="flex items-center gap-3">
          
          {/* Favorites Button */}
          <button
            onClick={onOpenFavorites}
            className="text-gray-600 hover:text-[#1e2b85] relative p-1.5 transition-colors cursor-pointer"
            title="Biens favoris"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#1e2b85] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          <button 
            onClick={onOpenContact}
            className="bg-[#1e2b85] hover:bg-[#162169] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">+33 1 42 68 55 00</span>
            <span className="sm:hidden">Appel</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#1e2b85] p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-3xl p-5 shadow-2xl border border-gray-200 space-y-3 animate-fadeUp">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === item.id ? "bg-[#1e2b85] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </header>
  );
};

export default Navbar;
