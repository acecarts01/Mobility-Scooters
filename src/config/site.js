// src/config/site.js

export const SITE = {
  name: 'LIFESTYLE MOBILITY SCOOTERS Australia',
  tagline: 'Mobility Scooters for Sale Australia | Premium Electric Specialists',
  domain: 'lifestylemobilityscooters.com.au',
  locale: 'en-AU',
  currency: 'AUD',
  target: 'vercel',
  primaryColor: '#007A78',
  secondaryColor: '#00A896',
  accentColor: '#F4F1EA',
  charcoal: '#1E252B',
  gscVerification: '',
  indexNowKey: 'lifestyle-mobility-key-2024',
  cartKey: 'lifestyle-mobility-cart',
}

export const CONTACT = {
  email: 'sales@lifestylemobilityscooters.com.au',
  supportEmail: 'support@lifestylemobilityscooters.com.au',
  phone: '1800 703 244',
  whatsapp: '+61400000000',
  address: '3 Shepley Ave, Panorama SA 5041, Australia',
  hq: 'Panorama, Adelaide, SA',
  country: 'Australia',
  entity: 'BUTLER TRADING PTY. LTD.',
  abn: '84 008 071 323',
  acn: '008 071 323',
}

export const SHOP = {
  minOrder: 0,
  freeShippingThreshold: 150,
  flatMetroFreight: 149,
  cryptoDiscount: 5,
  paymentMethods: [
    'crypto-BTC',
    'crypto-USDT',
    'bank-transfer-bsb',
    'payid',
    'zip-money',
    'afterpay'
  ],
}

export const FORMS = {
  provider: 'api', // Custom API routes for Zoho webhooks
  web3formsKey: '',
  turnstileSiteKey: '',
}

export const CHAT = {
  channels: [
    { type: 'whatsapp', value: '+61400000000', label: 'SMS Concierge' },
    { type: 'phone', value: '1800 703 244', label: 'Call 1800' },
    { type: 'email', value: 'support@lifestylemobilityscooters.com.au', label: 'Email Support' }
  ]
}

export const BRAND = {
  foundingYear: '1985',
  foundingLocation: 'Panorama, Adelaide, South Australia',
  description: 'Australia’s trusted choice to buy mobility scooter online. Backed by nearly 40 years of medical heritage, we specialise in electric mobility scooter Australia solutions including heavy-duty and all-terrain models.',
  milestones: [
    { year: '1985', event: 'Butler Trading Pty. Ltd. established in Adelaide' },
    { year: '2024', event: 'Lifestyle Mobility Scooters brand launch and national expansion' }
  ],
  differentiation: [
    '100% Pedestrian Legal (ARR 204)',
    'GST-Free Medical Device Pricing',
    'Expert Local Support',
    'Rapid National Delivery'
  ],
  sameAs: [],
  awards: [],
}

export const CATEGORIES = [
  {
    slug: 'portable-folding',
    name: 'Folding Mobility Scooters',
    description: 'Lightweight and auto-folding mobility scooters for sale. Ideal for travel and car boots.',
    image: 'portable-cat.webp'
  },
  {
    slug: 'mid-size-everyday',
    name: 'Pavement & Shopping Scooters',
    description: 'Compact 4-wheel mobile scooters for sale. Best for shopping centres and daily use.',
    image: 'midsize-cat.webp'
  },
  {
    slug: 'heavy-duty-all-terrain',
    name: 'Heavy Duty Mobility Scooters',
    description: 'Bariatric-ready large mobility scooters. High capacity and all-terrain performance.',
    image: 'heavyduty-cat.webp'
  },
  {
    slug: 'ramps-hoists',
    name: 'Ramps & Vehicle Hoists',
    description: 'Technical solutions for loading your mobility cart or scooter.',
    image: 'ramps-cat.webp'
  },
  {
    slug: 'batteries-accessories',
    name: 'Scooter Parts & Accessories',
    description: 'Replacement batteries, chargers, and custom mobility scooter accessories.',
    image: 'accessories-cat.webp'
  }
]

export const PRODUCTS = [
  {
    id: '001',
    slug: 'aerofold-remote-auto-folding',
    name: 'Lifestyle AeroFold™ Remote Auto-Folding Travel Scooter',
    price: 2890.00,
    category: 'portable-folding',
    shortDescription: 'The premium folding mobility scooter Australia choice. Remote-folding, 22kg, and CASA airline approved.',
    description: 'When you need to buy mobility scooter online for travel, the AeroFold™ is the leading folding mobility scooter Australia solution. Folds in 12 seconds via remote. Built with aviation-grade alloy and electromagnetic safety braking.',
    badge: 'Top Seller',
    images: ['aerofold-1.webp', 'aerofold-2.webp'],
    featured: true,
    specs: {
      weight: '22kg',
      range: '18km',
      speed: '10km/h',
      capacity: '120kg',
      battery: '24V 10Ah Lithium',
      charging: '4-6 Hours'
    }
  },
  {
    id: '115',
    slug: 'outback-cruiser-heavy-duty',
    name: 'Outback Cruiser™ Heavy-Duty All-Terrain Mobility Scooter',
    price: 4650.00,
    category: 'heavy-duty-all-terrain',
    shortDescription: 'The ultimate heavy-duty mobility scooter. All-terrain performance with a 200kg capacity and 45km range.',
    description: 'Engineered as a high-performance all-terrain mobility scooter for regional Australian conditions. This heavy-duty mobility scooter features 13-inch pneumatic tyres, double-A arm suspension, and 120mm ground clearance for total independence.',
    badge: 'All-Terrain Champ',
    images: ['outback-1.webp', 'outback-2.webp'],
    featured: true,
    specs: {
      weight: '95kg',
      range: '45km',
      speed: '10km/h',
      capacity: '200kg',
      battery: '12V 55Ah x2 AGM',
      charging: '8-10 Hours'
    }
  },
  {
    id: '059',
    slug: 'metroglide-compact-daily',
    name: 'MetroGlide™ 4-Wheel Compact Daily Pavement Scooter',
    price: 2190.00,
    category: 'mid-size-everyday',
    shortDescription: 'Your daily electric mobility scooter Australia companion. Compact, easy to disassemble, and 25km range.',
    description: 'Looking for a reliable electric mobility scooter Australia for shopping? The MetroGlide™ offers a tight turning circle and tool-free disassembly into 4 pieces. Features puncture-proof tyres and a medical-grade delta tiller.',
    badge: 'Best Value Daily',
    images: ['metroglide-1.webp', 'metroglide-2.webp'],
    featured: true,
    specs: {
      weight: '45kg',
      range: '25km',
      speed: '8km/h',
      capacity: '136kg',
      battery: '12V 20Ah x2 Lead-Acid',
      charging: '6-8 Hours'
    }
  },
  {
    id: '241',
    slug: 'outback-enclosed-canopy',
    name: 'Outback Enclosed All-Weather Hardtop Canopy Enclosure',
    price: 649.00,
    category: 'batteries-accessories',
    shortDescription: 'Premium mobility scooter accessories. UV50+ canopy with weather blinds.',
    description: 'Essential mobility scooter accessories for the Australian sun. This hardtop canopy enclosure fits most heavy-duty mobility scooter models. Features UV50+ protection and clear roll-down PVC side panels.',
    badge: 'Essential Carer Pick',
    images: ['canopy-1.webp'],
    featured: false,
    specs: {
      material: 'Powder-coated steel',
      protection: 'UV50+',
      mount: '25mm Universal Receiver'
    }
  }
]

export const POSTS = [
  {
    slug: 'mobility-scooter-road-rules-australia',
    title: 'Mobility Scooter Road Rules in Australia: What You Need to Know',
    excerpt: 'Understanding ARR Rule 204 and how it classifies you as a pedestrian for licence-free operation.',
    category: 'Buying Guides',
    date: '2024-10-15',
    readTime: '6 min',
    image: 'blog-rules.webp'
  }
]

export const PAGES = {
  about: true,
  faq: true,
  blog: true,
  wholesale: true,
  tracking: true,
  compare: true,
  search: true,
  ndis: false,
  quiz: true,
  calculator: true,
}

export const FAQ = [
  // 1. Regulation
  {
    category: 'Regulation',
    question: 'Do I need a driver’s licence to operate a mobility scooter in Australia?',
    answer: 'No. Under Australian Road Rule 204, a mobility scooter governed to 10 km/h is legally classified as a pedestrian device. You do not require a driver licence, vehicle registration, or compulsory third-party insurance in any Australian state or territory, except Queensland where zero-fee Department of Transport registration is mandatory.'
  },
  {
    category: 'Regulation',
    question: 'Are mobility scooters GST-free under Australian tax law?',
    answer: 'Yes. All motorized mobility scooters and electric powerchairs supplied by Lifestyle Mobility are 100% GST-free under Section 38-45 of the A New Tax System (Goods and Services Tax) Act 1999 Schedule 3, as medical assistive technology specifically manufactured for individuals with mobility impairment.'
  },
  {
    category: 'Regulation',
    question: 'Where can mobility scooters be legally driven in Australia?',
    answer: 'Mobility scooters must primarily be operated on footpaths, shared pedestrian pathways, nature strips, and inside shopping centres at speeds not exceeding 10 km/h. Users may only ride on the roadway when no footpath exists or when a footpath is obstructed or impassable, keeping to the far side.'
  },
  {
    category: 'Regulation',
    question: 'Can I purchase a mobility scooter using NDIS funding?',
    answer: 'Yes. Participants with self-managed or plan-managed NDIS packages can purchase mobility scooters through Lifestyle Mobility under Assistive Technology (Capital Supports - Category 05). We supply formal written clinical quotes, TGA-exempt itemized tax invoices, and assist occupational therapists with trial verification reports.'
  },

  // 2. Shipping
  {
    category: 'Shipping',
    question: 'How are mobility scooters shipped across Australia and what is the freight cost?',
    answer: 'We deliver nationwide via specialized tail-lift logistics partners. Metro transit within Adelaide, Melbourne, Sydney, Brisbane, and Perth is flat-rate $150 AUD for large vehicles or free for accessories over $500 AUD. All freight includes comprehensive transit insurance, tracking notifications, and protective wooden-crate packaging.'
  },
  {
    category: 'Shipping',
    question: 'Do mobility scooters arrive fully assembled or do they require setup?',
    answer: 'Portable folding scooters and modular take-apart units arrive fully assembled in their travel cartons; simply unfold, insert the battery, and ride. Heavy-duty cruisers arrive 95% assembled on secure pallets; our white-glove unboxing service can be arranged in major metro regions for complete setup and orientation.'
  },
  {
    category: 'Shipping',
    question: 'Can I take a portable folding mobility scooter on commercial aeroplanes?',
    answer: 'Yes. Portable mobility scooters equipped with lithium battery packs certified under UN 38.3 standard and compliant with CASA and IATA guidelines (single batteries up to 300Wh or dual batteries up to 160Wh each) are approved for airline transit. Removable lithium packs are taken into the passenger cabin.'
  },

  // 3. Battery Care
  {
    category: 'Battery Care',
    question: 'What is the difference between AGM lead-acid and lithium scooter batteries?',
    answer: 'Lithium LiFePO4 batteries deliver up to 70% weight reduction, zero memory effect, and up to 2,000 charge cycles compared to traditional AGM lead-acid batteries (350 to 500 cycles). While AGM batteries remain cost-effective for heavier pavement cruisers, lithium is essential for lightweight boot-loading travel models.'
  },
  {
    category: 'Battery Care',
    question: 'How do I care for and charge my mobility scooter battery?',
    answer: 'Charge your scooter overnight after every day of use using the supplied 24V smart regulated automatic charger. Avoid completely depleting lead-acid or gel batteries to zero percent. If storing a scooter unused during winter, maintain battery charge by plugging in every two to three weeks.'
  },
  {
    category: 'Battery Care',
    question: 'Can I leave my mobility scooter plugged into the charger permanently?',
    answer: 'Yes, provided you use the supplied 24V microprocessor-controlled smart charger. Our chargers automatically detect full charge voltage (28.8V) and switch into floating trickle-charge mode (27.2V), preventing cell overcharging while safeguarding against sulfation during extended garage storage.'
  },

  // 4. Technical Support
  {
    category: 'Technical Support',
    question: 'What safe working load (SWL) capacity should I choose?',
    answer: 'Clinical mobility guidelines recommend choosing a scooter with a Safe Working Load at least 20 to 25 kilograms higher than the user body weight. This safety allowance accommodates groceries, mobility accessories, medical oxygen, and steep terrain without straining the motor controller or draining battery range.'
  },
  {
    category: 'Technical Support',
    question: 'What is the maximum incline or hill climbing gradient for a mobility scooter?',
    answer: 'Standard pavement scooters safely conquer 6 to 8-degree inclines (compliant with standard AS 1428 building access ramps at 1:14). Heavy-duty all-terrain models featuring high-torque 800W–1400W 4-pole motors easily climb 10 to 12-degree residential driveways and council footpath ramps.'
  },
  {
    category: 'Technical Support',
    question: 'What warranty and servicing support is provided across Australia?',
    answer: 'Every scooter includes our comprehensive 3-year structural chassis warranty and 12-month electrical/motor warranty backed by Butler Trading Pty. Ltd. (Est. 1985). We stock authentic factory replacement parts, controllers, transaxles, and tyres in our South Australian service depot with mobile technician support.'
  },
  {
    category: 'Technical Support',
    question: 'What is the difference between solid puncture-proof tyres and pneumatic tyres?',
    answer: 'Solid polyurethane tyres are 100% puncture-proof, requiring zero air pressure checks—ideal for shopping centres and paved urban paths. Pneumatic air-filled tyres offer superior shock absorption over uneven footpaths and gravel trails; for outdoor users, we recommend adding anti-puncture tyre sealant.'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Robert M.",
    location: "Adelaide, SA",
    rating: 5,
    date: "2024-11-02",
    title: "Best investment for my mobility",
    comment: "The Outback Cruiser has completely changed my life. I can now go to the local shops and even visit the park independently. The service from Butler Trading was exceptional.",
    verified: true
  },
  {
    id: 2,
    name: "Margaret S.",
    location: "Brisbane, QLD",
    rating: 5,
    date: "2024-10-28",
    title: "AeroFold is so easy to use",
    comment: "I was worried about folding it myself, but the remote control makes it a breeze. It fits perfectly in my boot and the staff were very patient explaining how it works.",
    verified: true
  },
  {
    id: 3,
    name: "John D.",
    location: "Perth, WA",
    rating: 4,
    date: "2024-10-15",
    title: "Sturdy and reliable",
    comment: "Great heavy-duty scooter. It handles the hills around my area without any trouble. Delivery was a bit slow to WA, but worth the wait.",
    verified: true
  },
  {
    id: 4,
    name: "Beryl H.",
    location: "Sydney, NSW",
    rating: 5,
    date: "2024-10-05",
    title: "Wonderful service",
    comment: "The team really know their stuff. They helped me find the right model for my needs and didn't push the most expensive one. Very happy with my MetroGlide.",
    verified: true
  },
  {
    id: 5,
    name: "Arthur W.",
    location: "Melbourne, VIC",
    rating: 5,
    date: "2024-09-22",
    title: "Freedom at last!",
    comment: "I can finally join my grandkids on walks again. The scooter is quiet and smooth. The battery life is exactly as advertised.",
    verified: true
  },
  {
    id: 6,
    name: "Sheila G.",
    location: "Hobart, TAS",
    rating: 5,
    date: "2024-09-10",
    title: "Excellent quality",
    comment: "You can tell these aren't cheap knock-offs. The build quality is superb. Highly recommend the Outback model for anyone in rural areas.",
    verified: true
  }
];

export const AGGREGATE_RATING = {
  ratingValue: 4.8,
  reviewCount: 1468,
  bestRating: 5,
  worstRating: 1
};

export const COMPLIANCE = {
  bannedTerms: [
    "Drive on highway lanes",
    "Fastest 30km/h road scooter",
    "Guaranteed NDIS approval without assessment",
    "Cures mobility disorders",
    "No road rules apply",
    "Ride anywhere in traffic without limits"
  ],
  requiredFramings: [
    "Pedestrian legal classification under Australian Road Rule 204",
    "10 km/h speed-governed for Australian footpath safety",
    "IATA Airline Travel Compliant (UN 38.3 Lithium Pack)",
    "GST-Free under Section 38-45 of the A New Tax System (GST) Act 1999"
  ],
  prohibitedClaims: [
    "Permanent recovery from disability",
    "Direct road operation at high speeds",
    "Licence-free use on motorways"
  ],
  ageGate: false,
  ageMinimum: null,
  gdpr: false,
  disclaimer: 'AUSTRALIAN REGULATORY & SAFETY ADVISORY (ARR RULE 204 & TGA): Under the Australian Road Rules (Rule 204), an individual operating a motorized mobility scooter or electric wheelchair with a maximum speed capability not exceeding 10 km/h on level ground is legally classified as a pedestrian. Machines exceeding 10 km/h are strictly classified for off-road or private property usage.',
}
