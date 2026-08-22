import React from "react";

const HeroSection = ({ searchQuery, setSearchQuery, selectedCategory, onSelectCategory, onSearchSubmit }) => {
  return (
    <section id="accueil" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
      
      {/* Hero Image Container with Rounded Frame from mockup */}
      <div className="relative w-full h-[540px] sm:h-[580px] lg:h-[620px] rounded-[36px] overflow-hidden shadow-xl bg-slate-900 flex items-center justify-center">
        
        {/* Architectural Background Image */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&auto=format&fit=crop&q=80"
          alt="Immobilier de prestige en France"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/20" />

        {/* Hero Central Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto space-y-6">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Trouvez Votre Propriété d'Exception
          </h1>
          
          <p className="text-sm sm:text-base text-gray-200 font-medium max-w-xl mx-auto drop-shadow">
            Appartements haussmanniens, penthouses et villas contemporaines d'architecte à Paris, Lyon, Bordeaux et sur la Côte d'Azur.
          </p>

          {/* Floating Pill Search Bar from mockup */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              onSearchSubmit();
            }}
            className="bg-white/95 backdrop-blur-md rounded-full p-2 pl-6 shadow-2xl border border-white/40 max-w-xl mx-auto flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 flex-1">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher par ville (Paris, Cannes, Lyon...), type de bien..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#1e2b85] hover:bg-[#162169] text-white flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-md"
              title="Rechercher"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
