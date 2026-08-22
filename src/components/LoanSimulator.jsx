import React, { useState, useMemo } from "react";

const LoanSimulator = ({ onOpenContact }) => {
  const [price, setPrice] = useState(1200000);
  const [apport, setApport] = useState(250000);
  const [duree, setDuree] = useState(20);
  const [taux, setTaux] = useState(3.45);

  const dureeOptions = [10, 15, 20, 25];

  const results = useMemo(() => {
    const montantEmprunte = Math.max(price - apport, 0);
    const fraisNotaire = Math.round(price * 0.075);
    const tauxMensuel = taux / 100 / 12;
    const nbMois = duree * 12;
    let mensualite = 0;
    let coutInterets = 0;
    if (tauxMensuel > 0 && montantEmprunte > 0) {
      mensualite = Math.round(
        (montantEmprunte * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -nbMois))
      );
      coutInterets = mensualite * nbMois - montantEmprunte;
    }
    return { montantEmprunte, fraisNotaire, mensualite, coutInterets: Math.round(coutInterets) };
  }, [price, apport, duree, taux]);

  const fmt = (n) => n.toLocaleString("fr-FR") + " €";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 animate-fadeUp">
      
      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <span className="text-xs font-bold tracking-widest text-[#1e2b85] uppercase">
          Outil Financier & Patrimonial
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Simulateur de Prêt Immobilier<br />France
        </h1>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Calculez vos mensualités, le montant empruntable et les frais de notaire estimés en quelques secondes.
        </p>
      </div>

      {/* Main Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        
        {/* Left - Sliders */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
          
          {/* Prix d'achat */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Prix d'achat du bien</span>
              <span className="text-sm font-bold text-gray-900">{fmt(price)}</span>
            </div>
            <input
              type="range" min={100000} max={5000000} step={50000}
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#1e2b85]"
            />
          </div>

          {/* Apport */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Votre apport personnel</span>
              <span className="text-sm font-bold text-gray-900">{fmt(apport)}</span>
            </div>
            <input
              type="range" min={0} max={price} step={10000}
              value={apport}
              onChange={e => setApport(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#1e2b85]"
            />
          </div>

          {/* Durée */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Durée du crédit</span>
              <span className="text-sm font-bold text-gray-900">{duree} ans ({duree * 12} mois)</span>
            </div>
            <div className="flex gap-2">
              {dureeOptions.map(d => (
                <button
                  key={d}
                  onClick={() => setDuree(d)}
                  className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                    duree === d
                      ? "bg-[#1e2b85] text-white border-[#1e2b85]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#1e2b85] hover:text-[#1e2b85]"
                  }`}
                >
                  {d} ans
                </button>
              ))}
            </div>
          </div>

          {/* Taux */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Taux d'intérêt annuel estimé</span>
              <span className="text-sm font-bold text-gray-900">{taux.toFixed(2)} %</span>
            </div>
            <input
              type="range" min={0.5} max={8} step={0.05}
              value={taux}
              onChange={e => setTaux(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#1e2b85]"
            />
          </div>
        </div>

        {/* Right - Results */}
        <div className="lg:col-span-2 bg-[#1e2b85] rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl shadow-[#1e2b85]/20">
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-widest text-blue-200 uppercase">
              Résultat de votre simulation
            </p>

            <div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold">
                  {results.mensualite.toLocaleString("fr-FR")} €
                </span>
                <span className="text-blue-200 text-sm mb-1">/mois</span>
              </div>
              <p className="text-blue-200 text-xs mt-1">Hors assurance emprunteur</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-blue-400/30 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-200">Montant emprunté :</span>
                <span className="font-bold">{results.montantEmprunte.toLocaleString("fr-FR")} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Frais de notaire estimés (~7.5%) :</span>
                <span className="font-bold">{results.fraisNotaire.toLocaleString("fr-FR")} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Coût total des intérêts :</span>
                <span className="font-bold">{results.coutInterets.toLocaleString("fr-FR")} €</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="mt-8 w-full bg-white text-[#1e2b85] hover:bg-blue-50 font-extrabold text-xs tracking-widest uppercase py-4 rounded-2xl transition-all cursor-pointer"
          >
            Faire étudier mon dossier par un courtier
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoanSimulator;
