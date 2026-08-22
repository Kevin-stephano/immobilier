import React, { useState } from "react";

const LoanSimulator = ({ onOpenContact }) => {
  const [propertyPrice, setPropertyPrice] = useState(1200000);
  const [downPayment, setDownPayment] = useState(250000);
  const [durationYears, setDurationYears] = useState(20);
  const [interestRate, setInterestRate] = useState(3.45);

  const loanAmount = Math.max(0, propertyPrice - downPayment);
  const notaireFees = Math.round(propertyPrice * 0.075); // ~7.5% en France pour l'ancien

  // Monthly payment formula
  const monthlyRate = (interestRate / 100) / 12;
  const numberOfPayments = durationYears * 12;
  const monthlyPayment = monthlyRate > 0
    ? Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
    : Math.round(loanAmount / numberOfPayments);

  const totalCost = (monthlyPayment * numberOfPayments) - loanAmount;

  return (
    <section id="simulateur" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold text-[#1e2b85] uppercase tracking-wider block">
          Outil Financier & Patrimonial
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Simulateur de Prêt Immobilier France
        </h2>
        <p className="text-sm text-gray-500">
          Calculez vos mensualités, le montant empruntable et les frais de notaire estimés en quelques secondes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-center">
        
        {/* Sliders Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-gray-200 space-y-6">
          
          {/* Property Price */}
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
              <span>Prix d'achat du bien</span>
              <span className="text-[#1e2b85] text-sm">{propertyPrice.toLocaleString('fr-FR')} €</span>
            </div>
            <input
              type="range"
              min="200000"
              max="6000000"
              step="50000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e2b85]"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
              <span>Votre apport personnel</span>
              <span className="text-[#1e2b85] text-sm">{downPayment.toLocaleString('fr-FR')} €</span>
            </div>
            <input
              type="range"
              min="0"
              max={propertyPrice}
              step="25000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e2b85]"
            />
          </div>

          {/* Duration */}
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
              <span>Durée du crédit</span>
              <span className="text-[#1e2b85] text-sm">{durationYears} ans ({durationYears * 12} mois)</span>
            </div>
            <div className="flex gap-2">
              {[10, 15, 20, 25].map((d) => (
                <button
                  key={d}
                  onClick={() => setDurationYears(d)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    durationYears === d
                      ? "bg-[#1e2b85] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {d} ans
                </button>
              ))}
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
              <span>Taux d'intérêt annuel estimé</span>
              <span className="text-[#1e2b85] text-sm">{interestRate} %</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="5.5"
              step="0.05"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e2b85]"
            />
          </div>

        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-[#1e2b85] text-white p-8 rounded-3xl shadow-2xl space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
            Résultat de votre simulation
          </span>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {monthlyPayment.toLocaleString('fr-FR')} € <span className="text-sm font-normal text-blue-200">/ mois</span>
            </div>
            <p className="text-xs text-blue-100 mt-1">Hors assurance emprunteur</p>
          </div>

          <div className="space-y-3 pt-4 border-t border-blue-400/30 text-xs">
            <div className="flex justify-between text-blue-100">
              <span>Montant emprunté :</span>
              <span className="font-bold text-white">{loanAmount.toLocaleString('fr-FR')} €</span>
            </div>
            <div className="flex justify-between text-blue-100">
              <span>Frais de notaire estimés (~7.5%) :</span>
              <span className="font-bold text-white">{notaireFees.toLocaleString('fr-FR')} €</span>
            </div>
            <div className="flex justify-between text-blue-100">
              <span>Coût total des intérêts :</span>
              <span className="font-bold text-white">{totalCost.toLocaleString('fr-FR')} €</span>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full bg-white text-[#1e2b85] hover:bg-blue-50 text-xs font-extrabold py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            Faire étudier mon dossier par un courtier
          </button>
        </div>

      </div>

    </section>
  );
};

export default LoanSimulator;
