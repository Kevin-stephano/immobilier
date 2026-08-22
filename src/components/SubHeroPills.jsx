import React from "react";
import { CATEGORIES_PILLS } from "../data/propertiesData";

const SubHeroPills = ({ selectedCategory, onSelectCategory }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES_PILLS.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group bg-white rounded-2xl p-2.5 shadow-lg border transition-all duration-300 cursor-pointer hover:-translate-y-1.5 ${
                isSelected ? "border-[#1e2b85] ring-2 ring-[#1e2b85]/20 shadow-xl" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden relative mb-2.5">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  {cat.count}
                </span>
              </div>
              
              <div className="px-1.5 pb-1">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1e2b85] transition-colors leading-tight">
                  {cat.name}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">{cat.city}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SubHeroPills;
