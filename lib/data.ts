
import { Vehicle, ServicePackage, Offer, JobOpening } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'innova-hycross',
    name: 'Innova Hycross',
    tagline: 'The Ultimate Hybrid MPV',
    year: 2024,
    type: 'MPV',
    priceRange: '₹19.77 - 30.98 Lakh',
    mileage: '23.24 kmpl',
    engine: '2.0L 4-Cylinder Hybrid',
    horsepower: '184 HP',
    torque: '206 Nm',
    fuelType: 'Petrol Hybrid',
    seatingCapacity: 7,
    mainImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200',
    exteriorImage: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1200',
    interiorImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    safetyImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'The All New Toyota Innova Hycross is a perfect blend of luxury, comfort, and advanced hybrid technology.',
    longDescription: 'The Innova Hycross is more than just an MPV; it is a statement of sophistication. Built on the TNGA-C platform, it offers a car-like driving experience with the ruggedness of an SUV. The strong hybrid system ensures whisper-quiet drives and exceptional efficiency, while the premium cabin with Ottoman seats ensures every journey is first-class.',
    interiorDescription: 'Experience the pinnacle of luxury with the Hycross interior. Featuring a panoramic sunroof, multi-zone climate control, and the legendary Ottoman seats with power-recline and footrests. The dark chestnut leather upholstery and soft-touch materials create a sanctuary of comfort for all passengers.',
    exteriorDescription: 'Muscular, SUV-inspired design with a bold hexagonal grille and sharp LED headlamps. The 18-inch alloy wheels and wide stance give it a commanding presence on the road. Aerodynamic lines flow seamlessly from the front to the rear, optimizing both style and performance.',
    performanceDescription: 'The 5th Gen Self-Charging Strong Hybrid system delivers instant power while maintaining incredible fuel efficiency. With a combined power output of 184 HP, the Hycross offers smooth, silent acceleration and effortless cruising on highways.',
    safetyDescription: 'Toyota Safety Sense 3.0 suite includes Pre-Collision System, Lane Trace Assist, and Adaptive Cruise Control. Coupled with 6 SRS airbags and a high-strength TNGA chassis, the Hycross is engineered to protect what matters most.',
    features: ['Panoramic Sunroof', 'Ottoman Seats', 'Toyota Safety Sense', '9-Speaker JBL Audio', 'Ventilated Front Seats'],
    safetyFeatures: ['6 Airbags', 'Pre-collision System', 'Lane Trace Assist', 'Adaptive Cruise Control', 'Blind Spot Monitor'],
    variants: [
      { name: 'GX Petrol', price: '₹19.77 Lakh', engine: '2.0L Petrol', transmission: 'CVT', features: ['LED DRLs', '7 Airbags', 'Touchscreen'] },
      { name: 'VX Hybrid', price: '₹25.97 Lakh', engine: '2.0L Hybrid', transmission: 'e-CVT', features: ['Panoramic View Monitor', 'Auto Climate Control'] },
      { name: 'ZX Hybrid', price: '₹30.68 Lakh', engine: '2.0L Hybrid', transmission: 'e-CVT', features: ['Ottoman Seats', 'TSS 3.0', 'JBL Audio'] }
    ],
    colors: [{ name: 'Blackish Ageha', hex: '#1c2128' }, { name: 'Super White', hex: '#ffffff' }, { name: 'Platinum White Pearl', hex: '#f8f8f8' }]
  },
  {
    id: 'fortuner',
    name: 'Fortuner',
    tagline: 'Lead The Charge',
    year: 2024,
    type: 'SUV',
    priceRange: '₹33.43 - 51.44 Lakh',
    mileage: '14.2 kmpl',
    engine: '2.8L Diesel / 2.7L Petrol',
    horsepower: '201 HP',
    torque: '500 Nm',
    fuelType: 'Diesel/Petrol',
    seatingCapacity: 7,
    mainImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
    exteriorImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
    interiorImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
    safetyImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    description: 'The undisputed king of the premium SUV segment, commanding authority on every road.',
    longDescription: 'The Toyota Fortuner stands as a symbol of power and prestige. Its rugged exterior and refined interior make it the perfect companion for both urban escapes and off-road adventures. Built to last and engineered for performance.',
    interiorDescription: 'A sanctuary of premium comfort. Features all-black leather upholstery, ventilated front seats, and a large touchscreen infotainment system. The spacious cabin accommodates 7 adults with ease, while the dual-zone climate control ensures everyone stays comfortable.',
    exteriorDescription: 'Commanding and aggressive. The Fortuner features a bold front grille, sleek quad-LED headlamps, and massive 18-inch alloy wheels. Its high ground clearance and muscular body lines reflect its true off-road pedigree.',
    performanceDescription: 'The 2.8L Diesel engine is a powerhouse, producing 204 PS and a massive 500 Nm of torque. With a sophisticated 4x4 system, Active Traction Control, and multiple driving modes, it can conquer any obstacle.',
    safetyDescription: 'Built with a high-strength impact-absorbing body. Includes 7 SRS airbags, Vehicle Stability Control (VSC) with Brake Assist, and Hill Start Assist. It is engineered to provide maximum protection in every scenario.',
    features: ['4x4 Capability', 'Leather Interiors', 'Advanced Infotainment', 'Ventilated Seats', 'Kick Sensor Boot'],
    safetyFeatures: ['7 Airbags', 'Active Traction Control', 'Hill Start Assist', 'Electronic Stability Control', 'ABS with EBD'],
    variants: [
      { name: '2.7L Petrol 4x2 MT', price: '₹33.43 Lakh', engine: '2.7L Petrol', transmission: 'Manual', features: ['LED DRLs', '7 Airbags'] },
      { name: '2.8L Diesel 4x4 AT', price: '₹42.32 Lakh', engine: '2.8L Diesel', transmission: 'Automatic', features: ['4WD System', 'JBL Audio'] },
      { name: 'Legender 4x2 AT', price: '₹43.66 Lakh', engine: '2.8L Diesel', transmission: 'Automatic', features: ['Aggressive Styling', 'Sequential Turn Signals'] }
    ],
    colors: [{ name: 'Attitude Black', hex: '#000000' }, { name: 'Phantom Brown', hex: '#3e2723' }, { name: 'Silver Metallic', hex: '#c0c0c0' }]
  },
  {
    id: 'hyryder',
    name: 'Urban Cruiser Hyryder',
    tagline: 'The Hybrid Life',
    year: 2024,
    type: 'SUV',
    priceRange: '₹11.14 - 20.19 Lakh',
    mileage: '27.97 kmpl',
    engine: '1.5L Self-Charging Hybrid',
    horsepower: '114 HP',
    torque: '122 Nm',
    fuelType: 'Petrol Hybrid',
    seatingCapacity: 5,
    mainImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    exteriorImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    interiorImage: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
    safetyImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    description: 'India’s first strong hybrid SUV in its segment, offering exceptional efficiency.',
    longDescription: 'Revolutionize your urban commute with the Urban Cruiser Hyryder. Its self-charging hybrid technology provides a silent, smooth, and incredibly fuel-efficient drive without the need for external charging.',
    interiorDescription: 'Sophisticated and tech-savvy. The Hyryder features a dual-tone premium interior with soft-touch materials, a panoramic sunroof, and a 360-degree camera. The ventilated seats and head-up display elevate your daily drive.',
    exteriorDescription: 'Elegant and sophisticated SUV design. Features a unique crystal acrylic grille, sleek LED DRLs, and a sporty rear spoiler. The 17-inch alloy wheels and high ground clearance give it a confident stance.',
    performanceDescription: 'The 1.5L TNGA Petrol engine is paired with an electric motor to deliver a smooth and responsive drive. In EV mode, it offers a silent and emission-free experience for city commutes.',
    safetyDescription: 'Equipped with 6 SRS airbags, all-wheel disc brakes, and Vehicle Stability Control. The high-tensile steel body is designed to absorb and distribute impact energy efficiently.',
    features: ['Heads-up Display', '360 Camera', 'Wireless Charger', 'Panoramic Sunroof', 'Ventilated Seats'],
    safetyFeatures: ['6 Airbags', 'TPMS', 'Vehicle Stability Control', 'Disc Brakes on All Wheels', 'Hill Hold Assist'],
    variants: [
      { name: 'E MT Petrol', price: '₹11.14 Lakh', engine: '1.5L Petrol', transmission: 'Manual', features: ['Halogen Projector', 'ABS'] },
      { name: 'V Strong Hybrid AT', price: '₹20.19 Lakh', engine: '1.5L Hybrid', transmission: 'e-CVT', features: ['Sunroof', 'Ventilated Seats'] }
    ],
    colors: [{ name: 'Cave Black', hex: '#0D0D0D' }, { name: 'Speedy Blue', hex: '#1E3A8A' }]
  },
  {
    id: 'glanza',
    name: 'Glanza',
    tagline: 'Hatchin’ Awesome',
    year: 2024,
    type: 'Hatchback',
    priceRange: '₹6.86 - 10.00 Lakh',
    mileage: '22.35 kmpl',
    engine: '1.2L Petrol',
    horsepower: '89 HP',
    torque: '113 Nm',
    fuelType: 'Petrol/CNG',
    seatingCapacity: 5,
    mainImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200',
    exteriorImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200',
    interiorImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
    safetyImage: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    description: 'The cool hatchback for the modern world. Loaded with tech and efficiency.',
    longDescription: 'Designed for those who want to stand out, the Toyota Glanza is a tech-loaded hatchback that combines style with practicality. From the Heads-up Display to the 360-degree camera, it offers features usually reserved for luxury cars.',
    interiorDescription: 'Modern and connected. The Glanza features a premium dual-tone interior with a 9-inch touchscreen, "Hey Toyota" voice assistant, and a 360-degree camera for easy parking. The spacious cabin ensures comfort for all occupants.',
    exteriorDescription: 'Sleek and stylish hatchback design. Features sporty liquid flow lines, a bold chrome grille, and unique LED headlamps. The 16-inch alloy wheels and aerodynamic profile give it a dynamic appeal.',
    performanceDescription: 'The 1.2L K-series engine with Idle Start-Stop technology ensures excellent fuel efficiency and a responsive drive. Available in both Manual and AMT transmissions to suit your driving style.',
    safetyDescription: 'Safety is standard with 6 SRS airbags, ABS with EBD, and Brake Assist. The HEARTECT platform provides a stable and secure foundation for every journey.',
    features: ['6 Airbags', 'HUD', '9-inch Touchscreen', 'Hey Toyota Voice Assist', '360 Camera'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'Brake Assist', 'ESP with Hill Hold', 'ISOFIX Mounts'],
    variants: [
      { name: 'E MT', price: '₹6.86 Lakh', engine: '1.2L Petrol', transmission: 'Manual', features: ['Dual Airbags', 'Tilt Steering'] },
      { name: 'V AMT', price: '₹10.00 Lakh', engine: '1.2L Petrol', transmission: 'AMT', features: ['HUD', '360 Camera'] }
    ],
    colors: [{ name: 'Insta Blue', hex: '#003366' }, { name: 'Sportin Red', hex: '#d32f2f' }]
  },
  {
    id: 'taisor',
    name: 'Urban Cruiser Taisor',
    tagline: 'Make Your Way',
    year: 2024,
    type: 'SUV',
    priceRange: '₹7.74 - 13.04 Lakh',
    mileage: '22.8 kmpl',
    engine: '1.0L Turbo / 1.2L Petrol',
    horsepower: '100 HP',
    torque: '148 Nm',
    fuelType: 'Petrol',
    seatingCapacity: 5,
    mainImage: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
    exteriorImage: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
    interiorImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
    safetyImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    description: 'A crossover that blends SUV styling with compact agility.',
    longDescription: 'The Taisor is designed for the modern youth who want a stylish, tech-savvy SUV for their urban lifestyle. Its bold design and turbocharged engine options make every drive exciting.',
    interiorDescription: 'Modern urban interior with a 9-inch Smart Playcast infotainment system, wireless charger, and head-up display. The cabin offers a premium feel with high-quality upholstery and smart storage solutions.',
    exteriorDescription: 'Bold crossover styling with unique LED signatures. Features a twin-slat chrome grille, sporty bumpers, and 16-inch alloy wheels. Its compact dimensions make it perfect for city traffic while maintaining a strong SUV presence.',
    performanceDescription: 'Experience the thrill of the 1.0L Turbocharged engine producing 100 HP. For those who prioritize efficiency, the 1.2L naturally aspirated engine offers a smooth and refined driving experience.',
    safetyDescription: 'Solid safety foundation with 6 airbags, Hill Hold Assist, and Vehicle Stability Control. The high-strength chassis is designed to protect occupants in various impact scenarios.',
    features: ['Turbo Engine', 'Wireless Charger', 'LED Headlamps', 'Head-Up Display', '360 Camera'],
    safetyFeatures: ['6 Airbags', 'Hill Hold Assist', 'VSC', 'ABS with EBD', 'Parking Sensors'],
    variants: [
      { name: 'E MT', price: '₹7.74 Lakh', engine: '1.2L Petrol', transmission: 'Manual', features: ['Dual Airbags'] },
      { name: 'V Turbo AT', price: '₹13.04 Lakh', engine: '1.0L Turbo', transmission: 'Automatic', features: ['6 Airbags', 'HUD'] }
    ],
    colors: [{ name: 'Lucent Orange', hex: '#FF4500' }, { name: 'Cafe White', hex: '#FFFFFF' }]
  },
  {
    id: 'lc300',
    name: 'Land Cruiser 300',
    tagline: 'King of the Earth',
    year: 2024,
    type: 'Luxury',
    priceRange: '₹2.10 Cr',
    mileage: '10.0 kmpl',
    engine: '3.3L V6 Twin-Turbo Diesel',
    horsepower: '304 HP',
    torque: '700 Nm',
    fuelType: 'Diesel',
    seatingCapacity: 5,
    mainImage: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
    exteriorImage: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
    interiorImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    safetyImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    description: 'The pinnacle of Toyota SUV legacy. Go anywhere with absolute authority.',
    longDescription: 'The Land Cruiser 300 is the ultimate statement of luxury and capability. Built on the new GA-F platform, it combines extreme off-road performance with the most advanced technology and safety features ever seen in a Toyota SUV.',
    interiorDescription: 'Unrivaled luxury with a 12.3-inch display, 14-speaker JBL audio, and fingerprint authentication. The cabin is a masterpiece of craftsmanship, offering unmatched comfort and quietness for all five passengers.',
    exteriorDescription: 'Iconic SUV silhouette redesigned for the future. Features a massive front grille, unique triple-LED headlamps, and 20-inch alloy wheels. Its ground clearance and approach angles are optimized for conquering the world\'s toughest terrains.',
    performanceDescription: 'V6 Twin-Turbo Diesel producing 700 Nm for total dominance. The advanced E-KDSS (Electronic Kinetic Dynamic Suspension System) ensures exceptional on-road comfort and off-road stability.',
    safetyDescription: 'Advanced TSS 3.0 suite includes adaptive high beam, lane departure alert, and pre-collision system. With 10 airbags and advanced traction control, your safety is paramount.',
    features: ['E-KDSS', 'Multi Terrain Monitor', 'Fingerprint Auth', '12.3-inch Display', '4-Zone AC'],
    safetyFeatures: ['10 Airbags', 'TSS 3.0', 'Adaptive High Beam System', 'Multi Terrain Select', 'TPMS'],
    variants: [
      { name: 'ZX Diesel', price: '₹2.10 Cr', engine: '3.3L V6', transmission: 'Automatic', features: ['Full Loaded'] }
    ],
    colors: [{ name: 'Precious White Pearl', hex: '#FFFFFF' }, { name: 'Dark Red Mica', hex: '#8B0000' }]
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'periodic',
    title: 'Periodic Maintenance',
    description: 'Comprehensive checkups at scheduled intervals to keep your Toyota in prime condition.',
    icon: 'Settings',
    details: ['Engine Oil & Filter Change', 'Brake Cleaning & Adjustment', 'Multi-point Inspection', 'Battery Health Check', 'Tyre Rotation & Balancing'],
    longContent: 'Maintain your Toyota\'s longevity with our expert periodic maintenance services. Our factory-trained technicians perform comprehensive checks to ensure your vehicle remains in peak condition, following strict manufacturer guidelines.'
  },
  {
    id: 'express',
    title: '60-Minute Express Service',
    description: 'Fast, high-quality maintenance by dual technicians in exactly 60 minutes.',
    icon: 'Zap',
    details: ['Scheduled Maintenance', 'Car Wash', 'Genuine Parts Guarantee'],
    longContent: 'Value your time with our Express Maintenance 60. Two technicians work simultaneously to complete your periodic service in just 60 minutes, without compromising on quality or thoroughness.'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'festive-2024',
    title: 'Special Festive Bonanza',
    subtitle: 'Exclusive Festive Savings',
    description: 'Get benefits up to ₹50,000 on Urban Cruiser Hyryder and Glanza models. Includes exchange bonus and corporate benefits.',
    banner: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    expiry: 'Valid until 31st Oct 2024',
    terms: ['Offer valid on select stock', 'Terms and conditions apply'],
    ctaText: 'Claim Festive Offer'
  }
];

export const JOBS: JobOpening[] = [
  {
    id: 'sales-consultant',
    title: 'Senior Sales Consultant',
    department: 'Sales',
    location: 'Okhla, New Delhi',
    type: 'Full-time',
    description: 'Join our award-winning sales team and help customers find their dream Toyota.',
    requirements: ['2+ years automotive sales experience', 'Excellent communication skills', 'Deep knowledge of Toyota models'],
    benefits: ['Competitive Commission Structure', 'Health Insurance', 'Ongoing Training']
  }
];
