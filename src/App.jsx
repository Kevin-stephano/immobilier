import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SubHeroPills from "./components/SubHeroPills";
import AdvisorsSection from "./components/AdvisorsSection";
import ServicesSection from "./components/ServicesSection";
import PropertiesSection from "./components/PropertiesSection";
import PropertyDetailModal from "./components/PropertyDetailModal";
import VisitModal from "./components/VisitModal";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutPageFull from "./components/AboutPageFull";
import ServicesPageFull from "./components/ServicesPageFull";
import PropertiesPageFull from "./components/PropertiesPageFull";
import LoanSimulator from "./components/LoanSimulator";
import FavoritesDrawer from "./components/FavoritesDrawer";
import { PROPERTIES_DATA } from "./data/propertiesData";

const App = () => {
  const [activeTab, setActiveTab] = useState("accueil");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("Tous");
  
  // Modals state
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [visitingProperty, setVisitingProperty] = useState(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  
  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("nova_favorites");
      return saved ? JSON.parse(saved) : ["prop-1", "prop-2"];
    } catch {
      return ["prop-1", "prop-2"];
    }
  });

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem("nova_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  // Filter properties for Homepage
  const featuredProperties = PROPERTIES_DATA.filter((p) => {
    if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
    if (selectedCity !== "Tous" && p.city !== selectedCity) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.location.toLowerCase().includes(q) ||
                    p.city.toLowerCase().includes(q) ||
                    p.type.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const handleSearchSubmit = () => {
    setActiveTab("biens");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId === selectedCategory ? "all" : catId);
    setActiveTab("biens");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenContact = () => {
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f0f3f8] text-[#1e293b] flex flex-col font-sans selection:bg-[#1e2b85] selection:text-white">
      
      {/* Sticky Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenContact={handleOpenContact}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        
        {/* PAGE 1: ACCUEIL / HOMEPAGE (Faithful Mockup Reproduction) */}
        {activeTab === "accueil" && (
          <div className="space-y-16">
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
              onSearchSubmit={handleSearchSubmit}
            />

            <SubHeroPills
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            <AdvisorsSection onOpenContact={handleOpenContact} />

            <ServicesSection onOpenContact={() => setActiveTab("services")} />

            <PropertiesSection
              properties={featuredProperties.slice(0, 6)}
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onBookVisit={(prop) => setVisitingProperty(prop)}
              selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
            />

            <ContactSection />
          </div>
        )}

        {/* PAGE 2: À PROPOS (Full About Page) */}
        {activeTab === "apropos" && (
          <AboutPageFull onOpenContact={handleOpenContact} />
        )}

        {/* PAGE 3: SERVICES (Full Services + Simulator) */}
        {activeTab === "services" && (
          <ServicesPageFull onOpenContact={handleOpenContact} />
        )}

        {/* PAGE 4: BIENS & CATALOGUE COMPLET */}
        {activeTab === "biens" && (
          <PropertiesPageFull
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onBookVisit={(prop) => setVisitingProperty(prop)}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        )}

        {/* PAGE 5: SIMULATEUR DE PRÊT IMMOBILIER */}
        {activeTab === "simulateur" && (
          <div className="py-8">
            <LoanSimulator onOpenContact={handleOpenContact} />
          </div>
        )}

        {/* PAGE 6: CONTACT & ESTIMATION */}
        {activeTab === "contact" && (
          <div className="py-8">
            <ContactSection />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookVisit={(prop) => setVisitingProperty(prop)}
      />

      <VisitModal
        property={visitingProperty}
        onClose={() => setVisitingProperty(null)}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onBookVisit={(prop) => setVisitingProperty(prop)}
      />

    </div>
  );
};

export default App;
