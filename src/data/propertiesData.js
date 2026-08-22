export const CATEGORIES_PILLS = [
  {
    id: "duplex",
    name: "Duplex & Triplex",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80",
    count: "24 biens",
    city: "Paris & Île-de-France"
  },
  {
    id: "appartements",
    name: "Appartements & Penthouses",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
    count: "48 biens",
    city: "Grandes Métropoles"
  },
  {
    id: "residences",
    name: "Résidences de Prestige",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    count: "32 biens",
    city: "Côte d'Azur & Alpes"
  },
  {
    id: "architecture",
    name: "Architecture Contemporaine",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    count: "19 biens",
    city: "Villas & Domaines"
  }
];

export const STATS_DATA = [
  {
    id: 1,
    value: "350+",
    label: "Clients Satisfaits",
    highlight: false
  },
  {
    id: 2,
    value: "5k+",
    label: "Acquéreurs Enregistrés",
    highlight: true // blue card from mockup
  },
  {
    id: 3,
    value: "18+",
    label: "Années d'Expérience",
    highlight: false
  },
  {
    id: 4,
    value: "120+",
    label: "Projets Livrés",
    highlight: false
  }
];

export const SERVICES_DATA = [
  {
    id: "fiscalite",
    title: "Optimisation Fiscale & Investissement",
    description: "Conseil patrimonial sur-mesure pour structurer vos acquisitions : dispositifs Pinel, LMNP/LMP, Loi Malraux, Monuments Historiques et démembrement de propriété.",
    icon: "tax",
    active: true,
    details: ["Audit patrimonial personnalisé", "Simulation fiscale détaillée", "Accompagnement bancaire & courtage"]
  },
  {
    id: "certification",
    title: "Biens Immobiliers Certifiés Haute Qualité",
    description: "Tous nos biens font l'objet d'un audit technique strict : diagnostics énergétiques DPE A/B, conformité juridique, état des copropriétés et estimation indépendante.",
    icon: "home",
    active: false,
    details: ["Dossier technique complet fourni", "Garantie décennale et dommage-ouvrage", "Vérification des PV d'assemblée"]
  },
  {
    id: "cle-en-main",
    title: "Accompagnement Rapide & Clé en Main",
    description: "De la recherche exclusive au compromis et jusqu'à la remise des clés chez le notaire, votre conseiller dédié orchestre l'ensemble des démarches.",
    icon: "clock",
    active: false,
    details: ["Chasseur immobilier dédié", "Négociation au juste prix", "Coordination notaires et architectes"]
  },
  {
    id: "gestion",
    title: "Assurance & Gestion Locative Sérénité",
    description: "Déléguez la gestion de votre patrimoine en toute tranquillité : sélection minutieuse des locataires, garantie loyers impayés et conciergerie privée.",
    icon: "shield",
    active: false,
    details: ["Garantie loyers impayés à 100%", "Gestion des états des lieux & réparations", "Espace propriétaire en ligne 24/7"]
  },
  {
    id: "chasse",
    title: "Chasse Immobilière & Off-Market",
    description: "Accédez à notre portefeuille secret de propriétés d'exception non publiées sur le marché traditionnel grâce à notre réseau privé exclusif.",
    icon: "key",
    active: false,
    details: ["Biens confidentiels en exclusivité", "Veille permanente du marché", "Visites privées VIP prioritaires"]
  },
  {
    id: "homestaging",
    title: "Architecture d'Intérieur & Valorisation",
    description: "Sublimez votre bien pour une vente rapide au meilleur prix grâce à nos architectes d'intérieur et notre service de modélisation 3D haute définition.",
    icon: "palette",
    active: false,
    details: ["Plans 3D et rendus photoréalistes", "Mise en scène Home Staging", "Chiffrage précis des travaux"]
  }
];

export const PROPERTIES_DATA = [
  {
    id: "prop-1",
    name: "Résidence Haussmann Étoile",
    location: "Avenue Hoche, 75008 Paris",
    city: "Paris",
    type: "Appartement de Prestige",
    category: "appartements",
    price: 1450000,
    priceFormatted: "1 450 000 €",
    beds: 4,
    baths: 3,
    area: 210,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80",
    description: "Sublime appartement haussmannien entièrement rénové avec parquet point de Hongrie, moulures raffinées et cheminées en marbre d'époque. Prestations haut de gamme.",
    features: ["Balcon filant", "Ascenseur privatif", "Cave voûtée", "Climatisation réversible", "DPE B", "Gardiennage 24/7"]
  },
  {
    id: "prop-2",
    name: "Penthouse Vue Mer & Croisette",
    location: "Boulevard de la Croisette, Cannes",
    city: "Cannes",
    type: "Penthouse d'Exception",
    category: "residences",
    price: 3250000,
    priceFormatted: "3 250 000 €",
    beds: 5,
    baths: 4,
    area: 320,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=80",
    description: "Penthouse d'exception en dernier étage avec terrasse panoramique de 140 m² offrant une vue imprenable sur la baie de Cannes et les îles de Lérins.",
    features: ["Terrasse panoramique 140m²", "Piscine privée sur toit", "Garage double fermé", "Domotique complète", "Accès direct plage"]
  },
  {
    id: "prop-3",
    name: "Duplex Contemporain Presqu'île",
    location: "Place Bellecour, 69002 Lyon",
    city: "Lyon",
    type: "Duplex & Rooftop",
    category: "duplex",
    price: 890000,
    priceFormatted: "890 000 €",
    beds: 3,
    baths: 2,
    area: 165,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
    description: "Magnifique duplex aux volumes cathédrales, baigné de lumière naturelle, situé dans un hôtel particulier réhabilité au cœur de la Presqu'île de Lyon.",
    features: ["Hauteur sous plafond 4.8m", "Terrasse tropézienne", "Cuisine Gaggenau", "Parking sécurisé", "Proche métro"]
  },
  {
    id: "prop-4",
    name: "Villa d'Architecte Triangle d'Or",
    location: "Parc Bordelais, 33000 Bordeaux",
    city: "Bordeaux",
    type: "Villa Contemporaine",
    category: "architecture",
    price: 1850000,
    priceFormatted: "1 850 000 €",
    beds: 5,
    baths: 4,
    area: 280,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=80",
    description: "Écrin de verdure en plein centre-ville. Villa contemporaine aux lignes épurées avec grand jardin paysager, piscine miroir chauffée et suite parentale de plain-pied.",
    features: ["Piscine miroir chauffée", "Jardin paysager 800m²", "Cave à vin vitrée", "Triple garage", "Norme RT2020"]
  },
  {
    id: "prop-5",
    name: "Appartement de Réception Neuilly",
    location: "Boulevard Maurice Barrès, Neuilly-sur-Seine",
    city: "Paris",
    type: "Appartement Terrasse",
    category: "appartements",
    price: 2150000,
    priceFormatted: "2 150 000 €",
    beds: 4,
    baths: 3,
    area: 195,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&auto=format&fit=crop&q=80",
    description: "Face au Bois de Boulogne, appartement de grand standing avec vaste séjour de 70 m² donnant sur un jardin suspendu sans vis-à-vis.",
    features: ["Vue Bois de Boulogne", "Jardin suspendu", "Deux places de parking", "Service de conciergerie", "Cheminée au bioéthanol"]
  },
  {
    id: "prop-6",
    name: "Domaine & Bastide Privée St-Tropez",
    location: "Route des Plages, Ramatuelle (St-Tropez)",
    city: "Côte d'Azur",
    type: "Domaine de Prestige",
    category: "architecture",
    price: 4900000,
    priceFormatted: "4 900 000 €",
    beds: 6,
    baths: 6,
    area: 450,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&auto=format&fit=crop&q=80",
    description: "Bastide néo-provençale d'exception implantée sur un parc d'un hectare avec oliviers centenaires, pool-house équipé et héliport privatif.",
    features: ["Parc 10 000m²", "Piscine à débordement 18m", "Maison d'amis indépendante", "Terrain de tennis privé", "Héliport"]
  },
  {
    id: "prop-7",
    name: "Chalet d'Alpage de Luxe Courchevel",
    location: "Courchevel 1850, Alpes Françaises",
    city: "Alpes",
    type: "Chalet Alpin",
    category: "residences",
    price: 6800000,
    priceFormatted: "6 800 000 €",
    beds: 7,
    baths: 7,
    area: 520,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop&q=80",
    description: "Ski-in / ski-out prestigieux chalet avec spa privé, piscine intérieure chauffée, sauna, hammam, salle de cinéma et vue spectaculaire sur les sommets.",
    features: ["Accès direct pistes", "Piscine intérieure chauffée & Spa", "Salle de cinéma privée", "Ski room équipé", "Ascenseur"]
  },
  {
    id: "prop-8",
    name: "Hôtel Particulier Marais Historique",
    location: "Rue des Francs-Bourgeois, 75004 Paris",
    city: "Paris",
    type: "Hôtel Particulier",
    category: "architecture",
    price: 5400000,
    priceFormatted: "5 400 000 €",
    beds: 5,
    baths: 5,
    area: 380,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80",
    description: "Joyau du XVIIe siècle entièrement restauré au cœur du Marais. Cour pavée privée arborée, plafonds à la française, salon d'apparat et caveau de dégustation.",
    features: ["Cour pavée privative", "Plafonds peints à la française", "Caveau à vin voûté", "Climatisation intégrée", "Calme absolu"]
  },
  {
    id: "prop-9",
    name: "Villa Contemporaine Vue Baie d'Annecy",
    location: "Veyrier-du-Lac, 74290 Annecy",
    city: "Alpes",
    type: "Villa d'Architecte",
    category: "architecture",
    price: 2750000,
    priceFormatted: "2 750 000 €",
    beds: 4,
    baths: 4,
    area: 310,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&auto=format&fit=crop&q=80",
    description: "Spectaculaire villa suspendue face aux eaux turquoise du lac d'Annecy. Baies vitrées toute hauteur, terrasse en teck avec piscine suspendue et ponton privé.",
    features: ["Vue panoramique lac 180°", "Ponton privé pour bateau", "Piscine à débordement", "Suite master avec dressing", "Garage 4 voitures"]
  },
  {
    id: "prop-10",
    name: "Triplex d'Artiste & Verrière Eiffel",
    location: "Boulevard Saint-Germain, 75006 Paris",
    city: "Paris",
    type: "Duplex & Triplex",
    category: "duplex",
    price: 1980000,
    priceFormatted: "1 980 000 €",
    beds: 3,
    baths: 3,
    area: 175,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&auto=format&fit=crop&q=80",
    description: "Triplex atypique sous verrière façon atelier d'artiste avec vue sur les toits de Paris et le clocher de Saint-Germain-des-Prés.",
    features: ["Verrière d'artiste zénithale", "Vue toits de Paris", "Cuisine en marbre de Carrare", "Cheminée", "Dernier étage"]
  },
  {
    id: "prop-11",
    name: "Propriété Néo-Basque Biarritz Phare",
    location: "Avenue de l'Impératrice, 64200 Biarritz",
    city: "Bordeaux",
    type: "Propriété de Caractère",
    category: "residences",
    price: 3400000,
    priceFormatted: "3 400 000 €",
    beds: 6,
    baths: 5,
    area: 400,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1000&auto=format&fit=crop&q=80",
    description: "Élégante demeure néo-basque des années 1930 à quelques pas de l'Océan et du Golf du Phare. Parc clos de 2500 m² avec piscine chauffée.",
    features: ["Proximité immédiate océan", "Parc arboré 2500 m²", "Piscine chauffée", "Maison de gardien", "Charme historique"]
  },
  {
    id: "prop-12",
    name: "Penthouse Vue Cathédrale Fourvière",
    location: "Quai Saint-Antoine, 69002 Lyon",
    city: "Lyon",
    type: "Penthouse & Terrasse",
    category: "appartements",
    price: 1250000,
    priceFormatted: "1 250 000 €",
    beds: 3,
    baths: 2,
    area: 150,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1000&auto=format&fit=crop&q=80",
    description: "Dernier étage baigné de soleil avec vaste terrasse de 60 m² offrant une vue panoramique sur les quais de Saône et la colline de Fourvière illuminée.",
    features: ["Terrasse 60 m² vue Saône", "Ascenseur direct dans l'appartement", "Suite parentale vue fleuve", "Double garage en sous-sol"]
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Jean-Baptiste de Montmirail",
    role: "Fondateur & Directeur Associé",
    location: "Paris 8e",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    phone: "+33 1 42 68 55 01"
  },
  {
    name: "Sophie Valadier-Laurent",
    role: "Responsable Propriétés Riviera & Cannes",
    location: "Cannes Croisette",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    phone: "+33 4 93 39 40 00"
  },
  {
    name: "Alexandre Moreau",
    role: "Expert Investissement & Fiscalité",
    location: "Lyon & Rhône-Alpes",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    phone: "+33 4 78 42 50 00"
  },
  {
    name: "Camille d'Argenteuil",
    role: "Chasseuse Immobilière & Off-Market",
    location: "Bordeaux & Sud-Ouest",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    phone: "+33 5 56 48 30 00"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    client: "Famille de Courcelles",
    city: "Paris 8e",
    deal: "Acquisition d'un appartement haussmannien 240 m²",
    text: "Un accompagnement irréprochable de la première sélection jusqu'à la signature finale. L'équipe a su dénicher le bien off-market dont nous rêvions.",
    rating: 5
  },
  {
    id: 2,
    client: "Marc & Valérie S.",
    city: "Cannes",
    deal: "Vente d'une villa contemporaine vue mer",
    text: "Notre villa a été vendue en moins de 4 semaines au prix souhaité, en toute discrétion et avec des acquéreurs ultra-qualifiés. Merci NOVA IMMOBILIER.",
    rating: 5
  },
  {
    id: 3,
    client: "Dr. Philippe G.",
    city: "Lyon Presqu'île",
    deal: "Investissement patrimonial & démembrement",
    text: "L'expertise fiscale et la sélection rigoureuse des biens m'ont permis de sécuriser l'avenir de mes enfants avec un rendement optimal.",
    rating: 5
  }
];
