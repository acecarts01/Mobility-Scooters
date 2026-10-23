export interface ProductImageConfig {
  id: string;
  slug: string;
  localPath: string;
  altText: string;
  officialMediaSource: string;
}

export const CATALOG_IMAGE_REGISTRY: Record<string, ProductImageConfig> = {
  // =========================================================================
  // CATEGORY 1: PORTABLE & FOLDING MOBILITY SCOOTERS
  // =========================================================================
  "LMS-001": {
    id: "LMS-001",
    slug: "lifestyle-aerofold-remote-auto-fold",
    localPath: "",
    altText: "Lifestyle AeroFold Remote Auto-Folding Electric Mobility Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/aerofold-main.webp"
  },
  "LMS-002": {
    id: "LMS-002",
    slug: "solax-transformer-automatic-folding",
    localPath: "/images/products/solax-transformer-automatic-folding.webp",
    altText: "Solax Transformer 4-Wheel Automatic Remote Folding Scooter",
    officialMediaSource: "https://www.solaxmobility.com/copy-of-genie-automatic-folding-sco"
  },
  "LMS-003": {
    id: "LMS-003",
    slug: "solax-genie-plus-auto-folding",
    localPath: "/images/products/solax-genie-plus-auto-folding.webp",
    altText: "Solax Genie Plus Portable Auto Folding Scooter Red",
    officialMediaSource: "https://www.solaxmobility.com/"
  },
  "LMS-004": {
    id: "LMS-004",
    slug: "solax-maleta-lightweight-folding",
    localPath: "/images/products/solax-maleta-lightweight-folding.webp",
    altText: "Solax Maleta Lightweight Manual-Fold Travel Scooter",
    officialMediaSource: "https://www.solaxmobility.com/"
  },
  "LMS-005": {
    id: "LMS-005",
    slug: "solax-charge-auto-folding-induction",
    localPath: "/images/products/solax-charge-auto-folding-induction.webp",
    altText: "Solax Charge Automatic Folding Scooter with Wireless Induction",
    officialMediaSource: "local scooter-catalogue #83"
  },
  "LMS-006": {
    id: "LMS-006",
    slug: "solax-mobie-plus-compact-folding",
    localPath: "/images/products/solax-mobie-plus-compact-folding.webp",
    altText: "Solax Mobie Plus Compact Folding Travel Scooter",
    officialMediaSource: "https://www.solaxmobility.com/media-photos-"
  },
  "LMS-007": {
    id: "LMS-007",
    slug: "lifestyle-metrofold-auto-folding",
    localPath: "",
    altText: "Lifestyle MetroFold Auto-Folding Boot Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-008": {
    id: "LMS-008",
    slug: "monarch-air-auto-folding",
    localPath: "/images/products/monarch-air-auto-folding.webp",
    altText: "Monarch Air Featherweight Magnesium Auto-Fold Scooter",
    officialMediaSource: "https://scootersaus.com.au/"
  },
  "LMS-009": {
    id: "LMS-009",
    slug: "drive-devilbiss-mojo-auto-fold",
    localPath: "",
    altText: "Drive DeVilbiss Mojo Auto-Fold Split Frame Scooter",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-010": {
    id: "LMS-010",
    slug: "drive-devilbiss-zoome-auto-flex",
    localPath: "/images/products/drive-devilbiss-zoome-auto-flex.webp",
    altText: "Drive DeVilbiss ZooMe Auto-Flex Electric Folding Scooter",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-011": {
    id: "LMS-011",
    slug: "drive-devilbiss-flex-folding",
    localPath: "/images/products/drive-devilbiss-flex-folding.webp",
    altText: "Drive DeVilbiss Flex Folding Travel Scooter",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-012": {
    id: "LMS-012",
    slug: "pride-go-go-auto-fold",
    localPath: "",
    altText: "Pride Go-Go Auto-Fold Remote Electric Travel Scooter",
    officialMediaSource: "https://www.pridemobility.com/go-go-travel-mobility/"
  },
  "LMS-013": {
    id: "LMS-013",
    slug: "kymco-k-lite-f-auto-folding",
    localPath: "/images/products/kymco-k-lite-f-auto-folding.webp",
    altText: "Kymco K-Lite F Automatic Electric Folding Scooter",
    officialMediaSource: "https://www.kymco.com.au/"
  },
  "LMS-014": {
    id: "LMS-014",
    slug: "luggie-elite-automatic-electric-folding",
    localPath: "/images/products/luggie-elite-automatic-electric-folding.webp",
    altText: "FreeRider Luggie Elite Automatic Electric Folding Travel Scooter",
    officialMediaSource: "https://luggiescooter.com/"
  },
  "LMS-015": {
    id: "LMS-015",
    slug: "luggie-standard-compact-folding",
    localPath: "/images/products/luggie-standard-compact-folding.webp",
    altText: "FreeRider Luggie Standard Compact Folding Scooter",
    officialMediaSource: "https://luggiescooter.com/"
  },
  "LMS-016": {
    id: "LMS-016",
    slug: "luggie-classic-compact-folding-sla",
    localPath: "/images/products/luggie-classic-compact-folding-sla.webp",
    altText: "FreeRider Luggie Classic Compact Folding Scooter SLA",
    officialMediaSource: "https://luggiescooter.com/"
  },
  "LMS-017": {
    id: "LMS-017",
    slug: "luggie-super-heavy-duty-folding",
    localPath: "/images/products/luggie-super-heavy-duty-folding.webp",
    altText: "FreeRider Luggie Super Heavy-Duty 164kg Folding Scooter",
    officialMediaSource: "https://luggiescooter.com/"
  },
  "LMS-018": {
    id: "LMS-018",
    slug: "lifestyle-carbonlite-carbon-fibre-travel",
    localPath: "",
    altText: "Lifestyle CarbonLite Carbon Fibre Ultra-Light Travel Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-021": {
    id: "LMS-021",
    slug: "pride-go-go-ultra-x-4-wheel",
    localPath: "/images/products/pride-go-go-ultra-x-4-wheel.webp",
    altText: "Pride Go-Go Ultra X 4-Wheel Modular Disassembly Scooter",
    officialMediaSource: "https://www.pridemobility.com/go-go-travel-mobility/go-go-ultra-x-gen-3/"
  },
  "LMS-022": {
    id: "LMS-022",
    slug: "pride-go-go-ultra-x-3-wheel",
    localPath: "/images/products/pride-go-go-ultra-x-3-wheel.webp",
    altText: "Pride Go-Go Ultra X 3-Wheel Compact Disassembly Scooter",
    officialMediaSource: "https://www.pridemobility.com/"
  },
  "LMS-023": {
    id: "LMS-023",
    slug: "pride-go-go-elite-traveller-4-wheel",
    localPath: "/images/products/pride-go-go-elite-traveller-4-wheel.webp",
    altText: "Pride Go-Go Elite Traveller 4-Wheel Micro-Travel Scooter",
    officialMediaSource: "https://www.pridemobility.com/go-go-travel-mobility/go-go-elite-traveller-2-4-wheel/"
  },
  "LMS-024": {
    id: "LMS-024",
    slug: "pride-go-go-elite-traveller-plus",
    localPath: "/images/products/pride-go-go-elite-traveller-plus.webp",
    altText: "Pride Go-Go Elite Traveller Plus High-Torque Take-Apart Scooter",
    officialMediaSource: "https://www.pridemobility.com/go-go-travel-mobility/go-go-elite-traveller-gen-3-platinum/"
  },
  "LMS-025": {
    id: "LMS-025",
    slug: "pride-go-go-sport-4-wheel",
    localPath: "/images/products/pride-go-go-sport-4-wheel.webp",
    altText: "Pride Go-Go Sport 4-Wheel High-Capacity Modular Scooter",
    officialMediaSource: "https://www.pridemobility.com/go-go-travel-mobility/go-go-sport-4-wheel/"
  },
  "LMS-026": {
    id: "LMS-026",
    slug: "pride-go-go-endurance-li-lithium",
    localPath: "/images/products/pride-go-go-endurance-li-lithium.webp",
    altText: "Pride Go-Go Endurance Li Lithium Long-Range Modular Scooter",
    officialMediaSource: "https://www.pridemobility.com/go-go-travel-mobility/go-go-endurance-li/"
  },
  "LMS-027": {
    id: "LMS-027",
    slug: "pride-apex-rapid-cts-suspension",
    localPath: "/images/products/pride-apex-rapid-cts-suspension.webp",
    altText: "Pride Apex Rapid with CTS Comfort-Trac Suspension",
    officialMediaSource: "https://www.pridemobility.com/"
  },
  "LMS-028": {
    id: "LMS-028",
    slug: "pride-iride-ultra-lightweight-scooter",
    localPath: "/images/products/pride-iride-ultra-lightweight-scooter.webp",
    altText: "Pride iRide Ultra-Lightweight 14.5kg Folding Travel Scooter",
    officialMediaSource: "https://www.pridemobility.com/"
  },
  "LMS-029": {
    id: "LMS-029",
    slug: "invacare-colibri-4-wheel-take-apart",
    localPath: "/images/products/invacare-colibri-4-wheel-take-apart.webp",
    altText: "Invacare Colibri 4-Wheel Modular Micro Travel Scooter",
    officialMediaSource: "https://www.invacare.com.au/micro-mobility/colibri"
  },
  "LMS-030": {
    id: "LMS-030",
    slug: "invacare-colibri-outdoor-large-wheels",
    localPath: "/images/products/invacare-colibri-outdoor-large-wheels.webp",
    altText: "Invacare Colibri Outdoor Large-Wheel Modular Scooter",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-031": {
    id: "LMS-031",
    slug: "drive-scout-4-wheel-compact-travel",
    localPath: "/images/products/drive-scout-4-wheel-compact-travel.webp",
    altText: "Drive Scout 4-Wheel Compact Disassembly Travel Scooter",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-032": {
    id: "LMS-032",
    slug: "drive-spitfire-ex2-modular-scooter",
    localPath: "/images/products/drive-spitfire-ex2-modular-scooter.webp",
    altText: "Drive Spitfire EX2 4-Wheel Modular High-Capacity Scooter",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-033": {
    id: "LMS-033",
    slug: "shoprider-dasher-4-compact",
    localPath: "/images/products/shoprider-dasher-4-compact.webp",
    altText: "Shoprider Dasher 4 Compact Modular Pavement Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-034": {
    id: "LMS-034",
    slug: "merits-roadster-4-wheel-take-apart",
    localPath: "/images/products/merits-roadster-4-wheel-take-apart.webp",
    altText: "Merits Roadster 4-Wheel Compact Take-Apart Scooter",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-041": {
    id: "LMS-041",
    slug: "efoldi-lite-magnesium-alloy-folding",
    localPath: "/images/products/efoldi-lite-magnesium-alloy-folding.webp",
    altText: "eFOLDi Lite Magnesium Alloy 15kg Flight-Approved Scooter",
    officialMediaSource: "https://efoldi.com/"
  },
  "LMS-042": {
    id: "LMS-042",
    slug: "efoldi-explorer-long-range-folding",
    localPath: "/images/products/efoldi-explorer-long-range-folding.webp",
    altText: "eFOLDi Explorer Long-Range High-Clearance Folding Scooter",
    officialMediaSource: "https://efoldi.com/"
  },
  "LMS-043": {
    id: "LMS-043",
    slug: "supascoota-supalite-portable-travel",
    localPath: "/images/products/supascoota-supalite-portable-travel.webp",
    altText: "SupaScoota SupaLite 13.6kg Portable Travel Scooter",
    officialMediaSource: "https://www.supamobility.com/product/supascoota-supalite-fio-mobility-scooter/"
  },
  "LMS-044": {
    id: "LMS-044",
    slug: "supascoota-microlite-ultra-lightweight",
    localPath: "/images/products/supascoota-microlite-ultra-lightweight.webp",
    altText: "SupaScoota MicroLite Monocoque Ultra-Lightweight Scooter",
    officialMediaSource: "https://www.supamobility.com/"
  },
  "LMS-045": {
    id: "LMS-045",
    slug: "supascoota-spartan-heavy-duty-folding",
    localPath: "/images/products/supascoota-spartan-heavy-duty-folding.webp",
    altText: "SupaScoota Spartan Heavy-Duty 140kg Portable Folding Scooter",
    officialMediaSource: "https://www.supamobility.com/product/supascoota-spartan-sp-sumo-sp-mobility-scooter/"
  },
  "LMS-046": {
    id: "LMS-046",
    slug: "tzora-easy-travel-elite-lightweight",
    localPath: "/images/products/tzora-easy-travel-elite-lightweight.webp",
    altText: "Tzora Easy Travel Elite Lightweight Foldable Scooter",
    officialMediaSource: "https://www.tzora.com/"
  },
  "LMS-047": {
    id: "LMS-047",
    slug: "tzora-titan-hummer-4-wheel-foldable",
    localPath: "/images/products/tzora-titan-hummer-4-wheel-foldable.webp",
    altText: "Tzora Titan Hummer 4-Wheel High-Capacity Foldable Scooter",
    officialMediaSource: "https://www.tzora.com/"
  },
  "LMS-048": {
    id: "LMS-048",
    slug: "moving-life-atto-transfolding-travel",
    localPath: "/images/products/moving-life-atto-transfolding-travel.webp",
    altText: "Moving Life ATTO Transfolding Suitcase Travel Mobility Scooter",
    officialMediaSource: "https://us.movinglife.com/products/atto"
  },
  "LMS-049": {
    id: "LMS-049",
    slug: "moving-life-atto-sport-travel-scooter",
    localPath: "/images/products/moving-life-atto-sport-travel-scooter.webp",
    altText: "Moving Life ATTO Sport High-Performance Edition Travel Scooter",
    officialMediaSource: "https://us.movinglife.com/products/atto-sport-mobility-scooter-with-armrest"
  },
  "LMS-050": {
    id: "LMS-050",
    slug: "whill-model-f-foldable-connected",
    localPath: "/images/products/whill-model-f-foldable-connected.webp",
    altText: "WHILL Model F Foldable Lightweight Connected Travel Scooter",
    officialMediaSource: "https://whill.inc/us/model-f"
  },
  "LMS-051": {
    id: "LMS-051",
    slug: "merits-yoga-lightweight-folding",
    localPath: "/images/products/merits-yoga-lightweight-folding.webp",
    altText: "Merits Yoga Lightweight Folding Travel Scooter with Armrests",
    officialMediaSource: "local scooter-catalogue #101"
  },
  "LMS-052": {
    id: "LMS-052",
    slug: "shoprider-sovereign-4-classic-pavement",
    localPath: "/images/products/shoprider-sovereign-4-classic-pavement.webp",
    altText: "Shoprider Sovereign 4 Classic Daily Pavement Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-053": {
    id: "LMS-053",
    slug: "shoprider-deluxe-4-wheel-suburban",
    localPath: "/images/products/shoprider-deluxe-4-wheel-suburban.webp",
    altText: "Shoprider Deluxe 4-Wheel Suburban Pavement Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-054": {
    id: "LMS-054",
    slug: "shoprider-gk9-little-shopper-compact",
    localPath: "/images/products/shoprider-gk9-little-shopper-compact.webp",
    altText: "Shoprider GK-9 Little Shopper 4-Wheel Compact Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-055": {
    id: "LMS-055",
    slug: "pride-pathrider-9-4-wheel-compact",
    localPath: "",
    altText: "Pride Pathrider 9 4-Wheel Compact Suburban Scooter",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-056": {
    id: "LMS-056",
    slug: "pride-pathrider-9-3-wheel-manoeuvrable",
    localPath: "",
    altText: "Pride Pathrider 9 3-Wheel Ultra-Manoeuvrable Shopping Scooter",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-057": {
    id: "LMS-057",
    slug: "pride-go-go-sport-4-wheel-compact-cruiser",
    localPath: "/images/products/pride-go-go-sport-4-wheel.webp",
    altText: "Pride Go-Go Sport 4-Wheel High-Capacity Compact Cruiser",
    officialMediaSource: "https://www.pridemobility.com/"
  },
  "LMS-058": {
    id: "LMS-058",
    slug: "pride-apex-rapid-cts-comfort-suspension",
    localPath: "/images/products/pride-apex-rapid-cts-suspension.webp",
    altText: "Pride Apex Rapid CTS Comfort Suspension Pavement Scooter",
    officialMediaSource: "https://www.pridemobility.com/"
  },
  "LMS-059": {
    id: "LMS-059",
    slug: "metroglide-4-wheel-compact-daily",
    localPath: "",
    altText: "MetroGlide 4-Wheel Compact Daily Pavement Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/metroglide.webp"
  },
  "LMS-060": {
    id: "LMS-060",
    slug: "metroglide-urban-tourer-deluxe-shopper",
    localPath: "",
    altText: "MetroGlide Urban Tourer 4-Wheel Deluxe Shopper",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-061": {
    id: "LMS-061",
    slug: "afikim-afiscooter-c3-precision-urban",
    localPath: "/images/products/afikim-afiscooter-c3-precision-urban.webp",
    altText: "Afikim Afiscooter C3 3-Wheel Precision Steering Urban Scooter",
    officialMediaSource: "https://www.afiscooters.com/"
  },
  "LMS-062": {
    id: "LMS-062",
    slug: "afikim-afiscooter-c4-luxury-urban",
    localPath: "/images/products/afikim-afiscooter-c4-luxury-urban.webp",
    altText: "Afikim Afiscooter C4 4-Wheel Luxury Urban Pavement Scooter",
    officialMediaSource: "https://www.afiscooters.com/"
  },
  "LMS-063": {
    id: "LMS-063",
    slug: "invacare-leo-4-wheel-high-reliability",
    localPath: "/images/products/invacare-leo-4-wheel-high-reliability.webp",
    altText: "Invacare Leo 4-Wheel High-Reliability Pavement Scooter",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-064": {
    id: "LMS-064",
    slug: "invacare-leo-3-wheel-compact-radius",
    localPath: "",
    altText: "Invacare Leo 3-Wheel Compact Radius Shopping Scooter",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-065": {
    id: "LMS-065",
    slug: "drive-medical-envoy-4-everyday-pavement",
    localPath: "/images/products/drive-medical-envoy-4-everyday-pavement.webp",
    altText: "Drive Medical Envoy 4 Modern Everyday Pavement Scooter",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-066": {
    id: "LMS-066",
    slug: "drive-spitfire-scout-4-sport-compact",
    localPath: "",
    altText: "Drive Medical Spitfire Scout 4 Sport Compact Runabout",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-067": {
    id: "LMS-067",
    slug: "kymco-super-4-compact-high-agility",
    localPath: "/images/products/kymco-super-4-compact-high-agility.webp",
    altText: "Kymco Super 4 Compact High-Agility Pavement Scooter",
    officialMediaSource: "https://kymco.com.au/"
  },
  "LMS-068": {
    id: "LMS-068",
    slug: "pride-pathrider-10-deluxe-long-range",
    localPath: "/images/products/pride-pathrider-10-deluxe-long-range.webp",
    altText: "Pride Pathrider 10 Deluxe Long-Range Pavement Scooter",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-069": {
    id: "LMS-069",
    slug: "pride-pathrider-10-3-wheel-touring",
    localPath: "/images/products/pride-pathrider-10-3-wheel-touring.webp",
    altText: "Pride Pathrider 10 3-Wheel Touring Mobility Scooter",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-070": {
    id: "LMS-070",
    slug: "pride-zero-turn-10-manoeuvrability-cruiser",
    localPath: "/images/products/pride-zero-turn-10-manoeuvrability-cruiser.webp",
    altText: "Pride Zero Turn 10 4-Wheel High-Manoeuvrability Cruiser",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-071": {
    id: "LMS-071",
    slug: "invacare-pegasus-pro-long-distance-touring",
    localPath: "/images/products/invacare-pegasus-pro-long-distance-touring.webp",
    altText: "Invacare Pegasus Pro Ergonomic Long-Distance Touring Scooter",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-072": {
    id: "LMS-072",
    slug: "invacare-pegasus-metro-high-safety",
    localPath: "/images/products/invacare-pegasus-metro-high-safety.webp",
    altText: "Invacare Pegasus Metro High-Safety Everyday Cruiser",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-073": {
    id: "LMS-073",
    slug: "invacare-orion-metro-advanced-suspension",
    localPath: "/images/products/invacare-orion-metro-advanced-suspension.webp",
    altText: "Invacare Orion Metro Advanced Suspension Suburban Cruiser",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-074": {
    id: "LMS-074",
    slug: "drive-envoy-4-plus-extended-range",
    localPath: "/images/products/drive-envoy-4-plus-extended-range.webp",
    altText: "Drive Medical Envoy 4 Plus Extended-Range Suspension Cruiser",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-075": {
    id: "LMS-075",
    slug: "kymco-midi-xls-high-performance-cruiser",
    localPath: "/images/products/kymco-midi-xls-high-performance-cruiser.webp",
    altText: "Kymco Midi XLS High-Performance Ergonomic Pavement Cruiser",
    officialMediaSource: "https://kymco.com.au/"
  },
  "LMS-076": {
    id: "LMS-076",
    slug: "kymco-agility-comfort-high-torque",
    localPath: "/images/products/kymco-agility-comfort-high-torque.webp",
    altText: "Kymco Agility Comfort 10km/h High-Torque Pavement Scooter",
    officialMediaSource: "https://kymco.com.au/"
  },
  "LMS-077": {
    id: "LMS-077",
    slug: "shoprider-allrounder-4-wheel-suspension",
    localPath: "/images/products/shoprider-allrounder-4-wheel-suspension.webp",
    altText: "Shoprider AllRounder 4-Wheel Suspension Long-Distance Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-078": {
    id: "LMS-078",
    slug: "shoprider-puma-4-independent-suspension",
    localPath: "",
    altText: "Shoprider Puma 4 Mid-Wheel Independent Suspension Cruiser",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-079": {
    id: "LMS-079",
    slug: "merits-pioneer-1-suburban-touring",
    localPath: "",
    altText: "Merits Pioneer 1 4-Wheel Mid-Size Suburban Touring Scooter",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-080": {
    id: "LMS-080",
    slug: "merits-pioneer-2-heavy-chassis-cruiser",
    localPath: "/images/products/merits-pioneer-2-heavy-chassis-cruiser.webp",
    altText: "Merits Pioneer 2 4-Wheel Heavy-Chassis Suburban Cruiser",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-081": {
    id: "LMS-081",
    slug: "monarch-buzzaround-extreme-dual-suspension",
    localPath: "/images/products/monarch-buzzaround-extreme-dual-suspension.webp",
    altText: "Monarch Buzzaround Extreme 4-Wheel Dual Suspension Touring Scooter",
    officialMediaSource: "https://monarchmobility.com.au/"
  },
  "LMS-082": {
    id: "LMS-082",
    slug: "sterling-s425-high-visibility-touring",
    localPath: "/images/products/sterling-s425-high-visibility-touring.webp",
    altText: "Sterling S425 High-Visibility Pavement Touring Scooter",
    officialMediaSource: "https://www.sunrisemedical.com.au/"
  },
  "LMS-083": {
    id: "LMS-083",
    slug: "top-gun-classic-factory-sun-canopy",
    localPath: "/images/products/top-gun-classic-factory-sun-canopy.webp",
    altText: "Top Gun Classic 4-Wheel Suburban Scooter with Factory Sun Canopy",
    officialMediaSource: "https://topgunmobility.com.au/"
  },
  "LMS-084": {
    id: "LMS-084",
    slug: "top-gun-royal-4-deluxe-canopy",
    localPath: "/images/products/top-gun-royal-4-deluxe-canopy.webp",
    altText: "Top Gun Royal 4 Deluxe Pavement Runabout with Weather Canopy",
    officialMediaSource: "https://topgunmobility.com.au/"
  },
  "LMS-085": {
    id: "LMS-085",
    slug: "merits-pioneer-4-canopy-edition-protection",
    localPath: "/images/products/merits-pioneer-4-canopy-edition-protection.webp",
    altText: "Merits Pioneer 4 Canopy Edition with UV Sun & Rain Protection",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-086": {
    id: "LMS-086",
    slug: "shoprider-rocky-4-urban-pavement-canopy",
    localPath: "/images/products/shoprider-rocky-4-urban-pavement-canopy.webp",
    altText: "Shoprider Rocky 4 Urban Pavement Cruiser with Hardtop Canopy",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-087": {
    id: "LMS-087",
    slug: "pride-pathrider-10-canopy-touring",
    localPath: "/images/products/pride-pathrider-10-canopy-touring.webp",
    altText: "Pride Pathrider 10 Canopy Touring Edition",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-088": {
    id: "LMS-088",
    slug: "invacare-leo-sun-shield-hardtop-shade",
    localPath: "/images/products/invacare-leo-sun-shield-hardtop-shade.webp",
    altText: "Invacare Leo Sun-Shield Urban Cruiser with Hardtop Shade",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-089": {
    id: "LMS-089",
    slug: "afikim-afiscooter-c4-all-weather-canopy",
    localPath: "/images/products/afikim-afiscooter-c4-all-weather-canopy.webp",
    altText: "Afikim Afiscooter C4 All-Weather Hard Canopy Edition",
    officialMediaSource: "https://www.afiscooters.com/"
  },
  "LMS-090": {
    id: "LMS-090",
    slug: "lifestyle-pavement-shield-all-weather-enclosed",
    localPath: "",
    altText: "Lifestyle Pavement Shield All-Weather Enclosed Suburban Runabout",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-091": {
    id: "LMS-091",
    slug: "pride-pathrider-140-xl-heavy-duty",
    localPath: "/images/products/pride-pathrider-140-xl-heavy-duty.webp",
    altText: "Pride Pathrider 140 XL High-Output Bariatric Cruiser",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-092": {
    id: "LMS-092",
    slug: "pride-maxima-bariatric-heavy-duty",
    localPath: "/images/products/pride-maxima-bariatric-heavy-duty.webp",
    altText: "Pride Maxima 4-Wheel 227kg Ultra-Heavy-Duty Bariatric Scooter",
    officialMediaSource: "https://www.pridemobility.com/"
  },
  "LMS-093": {
    id: "LMS-093",
    slug: "shoprider-rocky-4-heavy-duty",
    localPath: "/images/products/shoprider-rocky-4-heavy-duty.webp",
    altText: "Shoprider Rocky 4 Heavy Duty Double Suspension Bariatric Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-094": {
    id: "LMS-094",
    slug: "merits-silverado-extreme-heavy-duty",
    localPath: "/images/products/merits-silverado-extreme-heavy-duty.webp",
    altText: "Merits Silverado Extreme Heavy Duty 200kg Touring Scooter",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-095": {
    id: "LMS-095",
    slug: "merits-pioneer-3-heavy-duty-high-capacity",
    localPath: "/images/products/merits-pioneer-3-heavy-duty-high-capacity.webp",
    altText: "Merits Pioneer 3 Heavy-Duty High-Capacity Mobility Scooter",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-096": {
    id: "LMS-096",
    slug: "afikim-afiscooter-s4-heavy-duty",
    localPath: "/images/products/afikim-afiscooter-s4-heavy-duty.webp",
    altText: "Afikim Afiscooter S4 Heavy-Duty 200kg Luxury Cruiser",
    officialMediaSource: "https://www.afiscooters.com/"
  },
  "LMS-097": {
    id: "LMS-097",
    slug: "invacare-comet-alpine-plus-hill-climber",
    localPath: "/images/products/invacare-comet-alpine-plus-hill-climber.webp",
    altText: "Invacare Comet Alpine Plus Heavy-Duty Hill-Climbing Scooter",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-098": {
    id: "LMS-098",
    slug: "invacare-comet-ultra-bariatric-power",
    localPath: "/images/products/invacare-comet-ultra-bariatric-power.webp",
    altText: "Invacare Comet Ultra 220kg Bariatric Power Scooter",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-099": {
    id: "LMS-099",
    slug: "drive-cobra-gt4-heavy-duty-executive",
    localPath: "/images/products/drive-cobra-gt4-heavy-duty-executive.webp",
    altText: "Drive Medical Cobra GT4 Heavy-Duty 200kg Executive Cruiser",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-100": {
    id: "LMS-100",
    slug: "kymco-maxi-xls-heavy-duty-touring",
    localPath: "/images/products/kymco-maxi-xls-heavy-duty-touring.webp",
    altText: "Kymco Maxi XLS 200kg Heavy-Duty Pavement Touring Scooter",
    officialMediaSource: "https://kymco.com.au/"
  },
  "LMS-101": {
    id: "LMS-101",
    slug: "top-gun-outback-high-capacity-rural",
    localPath: "",
    altText: "Top Gun Outback 200kg High-Capacity Rural Mobility Scooter",
    officialMediaSource: "https://topgunmobility.com.au/"
  },
  "LMS-102": {
    id: "LMS-102",
    slug: "monarch-royale-4-heavy-duty-bariatric",
    localPath: "/images/products/monarch-royale-4-heavy-duty-bariatric.webp",
    altText: "Monarch Royale 4 Heavy-Duty 180kg Bariatric Cruiser",
    officialMediaSource: "https://monarchmobility.com.au/"
  },
  "LMS-103": {
    id: "LMS-103",
    slug: "lifestyle-bariatricpro-220kg-reinforced",
    localPath: "",
    altText: "Lifestyle BariatricPro 220kg Reinforced High-Torque Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-104": {
    id: "LMS-104",
    slug: "shoprider-889xlsbn-double-suspension-bariatric",
    localPath: "/images/products/shoprider-889xlsbn-double-suspension-bariatric.webp",
    altText: "Shoprider 889XLSBN High-Output Double Suspension Bariatric",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-105": {
    id: "LMS-105",
    slug: "pride-baja-bandit-off-road-trail",
    localPath: "/images/products/pride-baja-bandit-off-road-trail.webp",
    altText: "Pride Baja Bandit 4-Wheel Off-Road Suspension Trail Scooter",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-106": {
    id: "LMS-106",
    slug: "pride-baja-wrangler-2-extreme-outdoor",
    localPath: "/images/products/pride-baja-wrangler-2-extreme-outdoor.webp",
    altText: "Pride Baja Wrangler 2 Extreme Outdoor Dual-Motor Scooter",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-107": {
    id: "LMS-107",
    slug: "pride-ranger-all-terrain-extreme",
    localPath: "/images/products/pride-ranger-all-terrain-extreme.webp",
    altText: "Pride Ranger 4WD Dual-Motor Extreme Outdoor Cruiser",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-108": {
    id: "LMS-108",
    slug: "heartway-vita-monster-all-terrain",
    localPath: "/images/products/heartway-vita-monster-all-terrain.webp",
    altText: "Heartway Vita Monster 900W High-Torque 4WD-Style Trail Explorer",
    officialMediaSource: "https://www.heartway.com.tw/"
  },
  "LMS-109": {
    id: "LMS-109",
    slug: "horizon-mayan-ac-all-terrain-off-road",
    localPath: "/images/products/horizon-mayan-ac-all-terrain-off-road.webp",
    altText: "Horizon Mayan AC All-Terrain Extreme Off-Road Scooter",
    officialMediaSource: "https://www.horizonmobility.com/"
  },
  "LMS-110": {
    id: "LMS-110",
    slug: "tga-vita-x-all-terrain-suspension-explorer",
    localPath: "/images/products/tga-vita-x-all-terrain-suspension-explorer.webp",
    altText: "TGA Vita X Heavy-Duty All-Terrain Suspension Explorer",
    officialMediaSource: "https://www.tgamobility.co.uk/"
  },
  "LMS-111": {
    id: "LMS-111",
    slug: "afikim-afiscooter-s3-rough-terrain-manoeuvrable",
    localPath: "/images/products/afikim-afiscooter-s3-rough-terrain-manoeuvrable.webp",
    altText: "Afikim Afiscooter S3 3-Wheel Rough-Terrain High-Manoeuvrability Scooter",
    officialMediaSource: "https://www.afiscooters.com/"
  },
  "LMS-112": {
    id: "LMS-112",
    slug: "afikim-afiscooter-s4-wide-wheel-farm-golf",
    localPath: "/images/products/afikim-afiscooter-s4-wide-wheel-farm-golf.webp",
    altText: "Afikim Afiscooter S4 Wide-Wheel Farm & Golf Course Explorer",
    officialMediaSource: "https://www.afiscooters.com/"
  },
  "LMS-113": {
    id: "LMS-113",
    slug: "shoprider-landcruiser-889sl-rough-pathway",
    localPath: "/images/products/shoprider-landcruiser-889sl-rough-pathway.webp",
    altText: "Shoprider LandCruiser 889SL Extreme Rough-Pathway Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-114": {
    id: "LMS-114",
    slug: "shoprider-allrounder-hd-rural-explorer",
    localPath: "/images/products/shoprider-allrounder-hd-rural-explorer.webp",
    altText: "Shoprider AllRounder HD 4-Wheel Rural Explorer",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-115": {
    id: "LMS-115",
    slug: "outback-cruiser-all-terrain-heavy-duty",
    localPath: "",
    altText: "Outback Cruiser Heavy-Duty All-Terrain Mobility Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/outback-cruiser.webp"
  },
  "LMS-116": {
    id: "LMS-116",
    slug: "merits-regal-rough-terrain-heavy-cruiser",
    localPath: "/images/products/merits-regal-rough-terrain-heavy-cruiser.webp",
    altText: "Merits Regal 4-Wheel Rough-Terrain Heavy Cruiser",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-117": {
    id: "LMS-117",
    slug: "top-gun-boss-extreme-off-road",
    localPath: "",
    altText: "Top Gun Boss Extreme Dual-Suspension Off-Road Cruiser",
    officialMediaSource: "https://topgunmobility.com.au/"
  },
  "LMS-118": {
    id: "LMS-118",
    slug: "kymco-foru-agility-all-terrain-long-distance",
    localPath: "",
    altText: "Kymco ForU Agility All-Terrain Long-Distance Scooter",
    officialMediaSource: "https://kymco.com.au/"
  },
  "LMS-119": {
    id: "LMS-119",
    slug: "pride-pursuit-2-heavy-duty-wilderness",
    localPath: "/images/products/pride-pursuit-2-heavy-duty-wilderness.webp",
    altText: "Pride Pursuit 2 Heavy-Duty Dual 12V 100Ah Wilderness Cruiser",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-120": {
    id: "LMS-120",
    slug: "drive-medical-king-cobra-luxury-explorer",
    localPath: "/images/products/drive-medical-king-cobra-luxury-explorer.webp",
    altText: "Drive Medical King Cobra All-Terrain Luxury Explorer",
    officialMediaSource: "https://www.drivedevilbiss.com.au/"
  },
  "LMS-121": {
    id: "LMS-121",
    slug: "top-gun-safari-hardtop-enclosed-cabin",
    localPath: "/images/products/top-gun-safari-hardtop-enclosed-cabin.webp",
    altText: "Top Gun Safari Integrated Hardtop Enclosed Cabin Scooter",
    officialMediaSource: "https://topgunmobility.com.au/"
  },
  "LMS-122": {
    id: "LMS-122",
    slug: "cabin-car-mk2e-fully-enclosed-luxury",
    localPath: "/images/products/cabin-car-mk2e-fully-enclosed-luxury.webp",
    altText: "Cabin Car Mk2e Fully Enclosed Luxury Electric Mobility Scooter",
    officialMediaSource: "https://scooterpac.com/"
  },
  "LMS-123": {
    id: "LMS-123",
    slug: "scooterpac-cabin-car-plus-heated-enclosure",
    localPath: "/images/products/scooterpac-cabin-car-plus-heated-enclosure.webp",
    altText: "Scooterpac Cabin Car Plus Dual-Motor Heated Enclosure Scooter",
    officialMediaSource: "https://scooterpac.com/"
  },
  "LMS-124": {
    id: "LMS-124",
    slug: "shoprider-rain-canopy-deluxe-all-weather",
    localPath: "/images/products/shoprider-rain-canopy-deluxe-all-weather.webp",
    altText: "Shoprider Rain Canopy Deluxe All-Weather Heavy-Duty Scooter",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-125": {
    id: "LMS-125",
    slug: "afikim-afiscooter-s4-hardtop-rain-canopy",
    localPath: "/images/products/afikim-afiscooter-s4-hardtop-rain-canopy.webp",
    altText: "Afikim Afiscooter S4 Hardtop Rain Canopy & Windscreen Edition",
    officialMediaSource: "https://www.afiscooters.com/"
  },
  "LMS-126": {
    id: "LMS-126",
    slug: "lifestyle-weathermaster-enclosed-lockable-cabin",
    localPath: "",
    altText: "Lifestyle WeatherMaster Fully Enclosed Lockable Cabin Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-127": {
    id: "LMS-127",
    slug: "invacare-comet-alpine-hardtop-weather-shield",
    localPath: "/images/products/invacare-comet-alpine-hardtop-weather-shield.webp",
    altText: "Invacare Comet Alpine Hardtop Enclosed Weather Shield Scooter",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-128": {
    id: "LMS-128",
    slug: "merits-silverado-enclosed-cabin-all-season",
    localPath: "",
    altText: "Merits Silverado Enclosed Cabin All-Season Touring Scooter",
    officialMediaSource: "https://www.merits.com.au/"
  },
  "LMS-129": {
    id: "LMS-129",
    slug: "top-gun-cruiser-deluxe-enclosed-hardtop",
    localPath: "",
    altText: "Top Gun Cruiser Deluxe Enclosed Hardtop Weather Protected Scooter",
    officialMediaSource: "https://topgunmobility.com.au/"
  },
  "LMS-130": {
    id: "LMS-130",
    slug: "pride-baja-wrangler-enclosed-all-weather-shield",
    localPath: "",
    altText: "Pride Baja Wrangler Enclosed All-Weather Expedition Shield",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-131": {
    id: "LMS-131",
    slug: "lifestyle-stepfree-2ft-single-fold-ramp",
    localPath: "",
    altText: "Lifestyle StepFree 2ft Single-Fold Aluminium Threshold Ramp",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/ramps/stepfree-2ft.webp"
  },
  "LMS-132": {
    id: "LMS-132",
    slug: "lifestyle-stepfree-3ft-aluminium-ramp",
    localPath: "",
    altText: "Lifestyle StepFree 3ft Aluminium Portable Suitcase Ramp",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/ramps/stepfree-3ft.webp"
  },
  "LMS-133": {
    id: "LMS-133",
    slug: "lifestyle-stepfree-4ft-anti-slip-folding-ramp",
    localPath: "",
    altText: "Lifestyle StepFree 4ft Anti-Slip Folding Suitcase Ramp",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/ramps/stepfree-4ft.webp"
  },
  "LMS-134": {
    id: "LMS-134",
    slug: "lifestyle-stepfree-5ft-bifold-high-traction-ramp",
    localPath: "",
    altText: "Lifestyle StepFree 5ft Bi-Fold High-Traction Mobility Ramp",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/ramps/stepfree-5ft.webp"
  },
  "LMS-135": {
    id: "LMS-135",
    slug: "lifestyle-stepfree-6ft-multifold-portable-ramp",
    localPath: "",
    altText: "Lifestyle StepFree 6ft Multi-Fold Portable Access Ramp",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/ramps/stepfree-6ft.webp"
  },
  "LMS-136": {
    id: "LMS-136",
    slug: "lifestyle-stepfree-7ft-heavy-duty-trifold-ramp",
    localPath: "",
    altText: "Lifestyle StepFree 7ft Heavy-Duty Tri-Fold Wheelchair & Scooter Ramp",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/ramps/stepfree-7ft.webp"
  },
  "LMS-137": {
    id: "LMS-137",
    slug: "lifestyle-stepfree-8ft-extended-multifold-ramp",
    localPath: "",
    altText: "Lifestyle StepFree 8ft Extended Multi-Fold Van & Step Ramp",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/ramps/stepfree-8ft.webp"
  },
  "LMS-138": {
    id: "LMS-138",
    slug: "decpac-ebl-165cm-fibreglass-ultralight-ramp",
    localPath: "/images/products/decpac-ebl-165cm-fibreglass-ultralight-ramp.webp",
    altText: "Decpac EBL 165cm Fibreglass Ultralight Folding Ramp",
    officialMediaSource: "https://www.decpacramps.com/"
  },
  "LMS-139": {
    id: "LMS-139",
    slug: "roll-a-ramp-8ft-aluminium-modular-system",
    localPath: "/images/products/roll-a-ramp-8ft-aluminium-modular-system.webp",
    altText: "Roll-A-Ramp 8ft Aluminium Roll-Up Modular Access System",
    officialMediaSource: "https://www.rollaramp.com/"
  },
  "LMS-140": {
    id: "LMS-140",
    slug: "pvi-6ft-multifold-aluminium-utility-ramp",
    localPath: "",
    altText: "Prairie View Industries (PVI) 6ft Multifold Aluminium Utility Ramp",
    officialMediaSource: "https://www.pviramps.com/"
  },
  "LMS-141": {
    id: "LMS-141",
    slug: "autochair-smart-lifter-lm-40kg",
    localPath: "/images/products/autochair-smart-lifter-lm-40kg.webp",
    altText: "Autochair Smart Lifter LM 40kg Mini Scooter Boot Hoist",
    officialMediaSource: "https://www.autochair.co.uk/"
  },
  "LMS-142": {
    id: "LMS-142",
    slug: "autochair-smart-lifter-lc-80kg",
    localPath: "",
    altText: "Autochair Smart Lifter LC 80kg Medium Power Scooter Hoist",
    officialMediaSource: "https://www.autochair.co.uk/"
  },
  "LMS-143": {
    id: "LMS-143",
    slug: "autochair-smart-lifter-lp-150kg",
    localPath: "/images/products/autochair-smart-lifter-lp-150kg.webp",
    altText: "Autochair Smart Lifter LP 150kg Heavy-Duty Bariatric Vehicle Hoist",
    officialMediaSource: "https://www.autochair.co.uk/"
  },
  "LMS-144": {
    id: "LMS-144",
    slug: "autochair-smart-lifter-lp-200kg",
    localPath: "/images/products/autochair-smart-lifter-lp-200kg.webp",
    altText: "Autochair Smart Lifter LP 200kg Extreme Capacity Boot Hoist",
    officialMediaSource: "https://www.autochair.co.uk/"
  },
  "LMS-145": {
    id: "LMS-145",
    slug: "braunability-carolift-40-light-hoist",
    localPath: "/images/products/braunability-carolift-40-light-hoist.webp",
    altText: "BraunAbility Carolift 40 Light Vehicle Wheelchair Hoist",
    officialMediaSource: "https://www.braunability.eu/"
  },
  "LMS-146": {
    id: "LMS-146",
    slug: "braunability-carolift-6900-high-capacity-lifter",
    localPath: "/images/products/braunability-carolift-6900-high-capacity-lifter.webp",
    altText: "BraunAbility Carolift 6900 High-Capacity Swivel Arm Lifter",
    officialMediaSource: "https://www.braunability.eu/"
  },
  "LMS-147": {
    id: "LMS-147",
    slug: "harmar-al055-economy-inside-vehicle-lift",
    localPath: "/images/products/harmar-al055-economy-inside-vehicle-lift.webp",
    altText: "Harmar AL055 Economy Inside-Vehicle Electric Lift",
    officialMediaSource: "https://www.harmar.com/"
  },
  "LMS-148": {
    id: "LMS-148",
    slug: "harmar-al100-universal-outside-platform-lift",
    localPath: "/images/products/harmar-al100-universal-outside-platform-lift.webp",
    altText: "Harmar AL100 Universal Outside Power Scooter Platform Lift",
    officialMediaSource: "https://www.harmar.com/"
  },
  "LMS-149": {
    id: "LMS-149",
    slug: "harmar-al500-heavy-duty-universal-carrier",
    localPath: "/images/products/harmar-al500-heavy-duty-universal-carrier.webp",
    altText: "Harmar AL500 Heavy-Duty Universal Platform Carrier",
    officialMediaSource: "https://www.harmar.com/"
  },
  "LMS-150": {
    id: "LMS-150",
    slug: "lifestyle-hitchhauler-50mm-towbar-carrier",
    localPath: "",
    altText: "Lifestyle HitchHauler 50mm Towbar Mobility Scooter Carrier",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/carriers/hitchhauler.webp"
  },
  "LMS-151": {
    id: "LMS-151",
    slug: "lifestyle-hitchhauler-powered-electric-tilt-carrier",
    localPath: "",
    altText: "Lifestyle HitchHauler Powered 12V Electric Tilt Platform Carrier",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-152": {
    id: "LMS-152",
    slug: "lifestyle-transittie-4-point-retractor-kit",
    localPath: "",
    altText: "Lifestyle TransitTie 4-Point Retractor Mobility Scooter Vehicle Tie-Down Kit",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-153": {
    id: "LMS-153",
    slug: "lifestyle-safestep-rubber-threshold-ramp-25mm",
    localPath: "",
    altText: "Lifestyle SafeStep 1:8 Gradient Recycled Rubber Threshold Ramp 25mm",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-154": {
    id: "LMS-154",
    slug: "lifestyle-safestep-rubber-threshold-ramp-50mm",
    localPath: "",
    altText: "Lifestyle SafeStep 1:8 Gradient Recycled Rubber Threshold Ramp 50mm",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-155": {
    id: "LMS-155",
    slug: "lifestyle-safestep-rubber-threshold-ramp-75mm",
    localPath: "",
    altText: "Lifestyle SafeStep 1:8 Gradient Recycled Rubber Modular Doorway Ramp 75mm",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-156": {
    id: "LMS-156",
    slug: "lifestyle-24v-10ah-iata-lithium-pack",
    localPath: "",
    altText: "Lifestyle 24V 10Ah IATA UN38.3 Flight Certified Lithium Battery",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/batteries/24v-10ah.webp"
  },
  "LMS-157": {
    id: "LMS-157",
    slug: "lifestyle-24v-15ah-long-range-lithium-upgrade",
    localPath: "",
    altText: "Lifestyle 24V 15Ah Long-Range Lithium-Ion Battery Upgrade",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-158": {
    id: "LMS-158",
    slug: "mk-battery-12v-34ah-deep-cycle-gel-pair",
    localPath: "/images/products/mk-battery-12v-34ah-deep-cycle-gel-pair.webp",
    altText: "MK Battery 12V 34Ah Deep-Cycle Gel Mobility Batteries Pair",
    officialMediaSource: "https://www.mkbattery.com/"
  },
  "LMS-159": {
    id: "LMS-159",
    slug: "mk-battery-12v-50ah-heavy-duty-gel-pair",
    localPath: "/images/products/mk-battery-12v-50ah-heavy-duty-gel-pair.webp",
    altText: "MK Battery 12V 50Ah Heavy-Duty Gel Mobility Batteries Pair",
    officialMediaSource: "https://www.mkbattery.com/"
  },
  "LMS-160": {
    id: "LMS-160",
    slug: "mk-battery-12v-75ah-high-capacity-agm-pair",
    localPath: "/images/products/mk-battery-12v-75ah-high-capacity-agm-pair.webp",
    altText: "MK Battery 12V 75Ah High-Capacity AGM Mobility Batteries Pair",
    officialMediaSource: "https://www.mkbattery.com/"
  },
  "LMS-161": {
    id: "LMS-161",
    slug: "invacare-12v-40ah-premium-agm-pair",
    localPath: "",
    altText: "Invacare 12V 40Ah Premium AGM Mobility Scooter Battery Pair",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-162": {
    id: "LMS-162",
    slug: "shoprider-12v-75ah-industrial-deep-cycle-pair",
    localPath: "",
    altText: "Shoprider 12V 75Ah Industrial Deep-Cycle Battery Replacement Pair",
    officialMediaSource: "https://www.shoprider.com.au/"
  },
  "LMS-163": {
    id: "LMS-163",
    slug: "pride-12v-55ah-high-output-sealed-pair",
    localPath: "",
    altText: "Pride 12V 55Ah High-Output Sealed Lead Acid Batteries Pair",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-164": {
    id: "LMS-164",
    slug: "lifestyle-powercharge-24v-2a-charger",
    localPath: "",
    altText: "Lifestyle PowerCharge 24V 2A 3-Pin XLR Off-Board Smart Charger",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/chargers/powercharge-2a.webp"
  },
  "LMS-165": {
    id: "LMS-165",
    slug: "lifestyle-powercharge-24v-4a-regulated-fast-charger",
    localPath: "",
    altText: "Lifestyle PowerCharge 24V 4A Regulated Fast Charger",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-166": {
    id: "LMS-166",
    slug: "lifestyle-powercharge-24v-5a-fan-cooled-charger",
    localPath: "",
    altText: "Lifestyle PowerCharge 24V 5A High-Output Fan-Cooled Smart Charger",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-167": {
    id: "LMS-167",
    slug: "lifestyle-powercharge-24v-8a-commercial-charger",
    localPath: "",
    altText: "Lifestyle PowerCharge 24V 8A Heavy-Duty Commercial Scooter Charger",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-168": {
    id: "LMS-168",
    slug: "ctek-mxt-4-24v-precision-maintainer",
    localPath: "/images/products/ctek-mxt-4-24v-precision-maintainer.webp",
    altText: "CTEK MXT 4.0 24V 8-Step Automatic Battery Charger & Maintainer",
    officialMediaSource: "https://www.ctek.com/"
  },
  "LMS-169": {
    id: "LMS-169",
    slug: "pride-mobility-24v-35a-off-board-charger",
    localPath: "",
    altText: "Pride Mobility 24V 3.5A Off-Board XLR Charging Assembly",
    officialMediaSource: "https://www.pridemobility.com.au/"
  },
  "LMS-170": {
    id: "LMS-170",
    slug: "invacare-24v-8a-heavy-duty-external-charger",
    localPath: "/images/products/invacare-24v-8a-heavy-duty-external-charger.webp",
    altText: "Invacare 24V 8A Heavy-Duty External Fan-Cooled Charger",
    officialMediaSource: "https://www.invacare.com.au/"
  },
  "LMS-171": {
    id: "LMS-171",
    slug: "outback-all-weather-hardtop-canopy",
    localPath: "",
    altText: "Outback Hardtop UV50+ Sun Canopy & Clear Roll-Down Shield",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/accessories/canopy-hardtop.webp"
  },
  "LMS-172": {
    id: "LMS-172",
    slug: "lifestyle-lockable-rear-cargo-trunk-35l",
    localPath: "",
    altText: "Lifestyle Lockable Rear Hard Shell Cargo Trunk 35L",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-173": {
    id: "LMS-173",
    slug: "lifestyle-deluxe-dual-walking-cane-holder",
    localPath: "",
    altText: "Lifestyle Deluxe Dual Walking Stick Crutch Holder 25mm Mount",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/accessories/cane-holder.webp"
  },
  "LMS-174": {
    id: "LMS-174",
    slug: "lifestyle-oxygen-cylinder-rear-carrier-bracket",
    localPath: "",
    altText: "Lifestyle Oxygen Cylinder Heavy-Duty Rear Carrier Bracket",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-175": {
    id: "LMS-175",
    slug: "lifestyle-rollator-walker-rear-carrier-rack",
    localPath: "",
    altText: "Lifestyle Rollator Walker Rear Scooter Hitch Carrier Rack",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-176": {
    id: "LMS-176",
    slug: "lifestyle-heavy-duty-waterproof-scooter-rain-cover",
    localPath: "",
    altText: "Lifestyle Heavy-Duty UV50+ Waterproof Scooter Rain Cover (Large)",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-177": {
    id: "LMS-177",
    slug: "lifestyle-fleece-lined-scooter-cosy-thermal-wrap",
    localPath: "",
    altText: "Lifestyle Fleece-Lined Scooter Cosy Thermal Leg Warmer Wrap",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-178": {
    id: "LMS-178",
    slug: "lifestyle-universal-scooter-rear-view-safety-mirrors",
    localPath: "",
    altText: "Lifestyle Universal Scooter Rear View Safety Mirrors Pair",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-179": {
    id: "LMS-179",
    slug: "solid-pu-puncture-proof-tyre-280-250-4",
    localPath: "/images/products/solid-pu-puncture-proof-tyre-280-250-4.webp",
    altText: "Puncture Proof Solid PU Foam Infill Drive Tyre 2.80/2.50-4",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/assets/parts/tyre-solid-280.webp"
  },
  "LMS-180": {
    id: "LMS-180",
    slug: "solid-pu-flat-free-300-4-low-marking-tyre",
    localPath: "/images/products/solid-pu-flat-free-300-4-low-marking-tyre.webp",
    altText: "Solid PU Flat-Free 3.00-4 Low-Marking Grey Scooter Tyre",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-181": {
    id: "LMS-181",
    slug: "solid-pu-flat-free-300-8-heavy-duty-drive-tyre",
    localPath: "/images/products/solid-pu-flat-free-300-8-heavy-duty-drive-tyre.webp",
    altText: "Solid PU Flat-Free 3.00-8 Heavy-Duty Pavement Drive Tyre",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-182": {
    id: "LMS-182",
    slug: "pneumatic-inner-tube-90-degree-valve-280-250-4",
    localPath: "/images/products/pneumatic-inner-tube-90-degree-valve-280-250-4.webp",
    altText: "Heavy-Duty Pneumatic Inner Tube with 90-Degree Bent Metal Valve",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-183": {
    id: "LMS-183",
    slug: "heavy-duty-pneumatic-inner-tube-300-4-angled-valve",
    localPath: "",
    altText: "Heavy-Duty Pneumatic Inner Tube 3.00-4 with Angled Brass Valve",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-184": {
    id: "LMS-184",
    slug: "heavy-duty-inner-tube-400-5-touring-scooter",
    localPath: "/images/products/heavy-duty-inner-tube-400-5-touring-scooter.webp",
    altText: "Heavy-Duty Pneumatic Inner Tube 4.00-5 Large Touring Scooter",
    officialMediaSource: "https://lifestylemobilityscooters.com.au/"
  },
  "LMS-185": {
    id: "LMS-185",
    slug: "slime-heavy-duty-puncture-sealant-16oz",
    localPath: "/images/products/slime-heavy-duty-puncture-sealant-16oz.webp",
    altText: "Slime Heavy-Duty Puncture Sealant 16oz Tube & Tyre Treatment",
    officialMediaSource: "https://slime.com/"
  }
};
