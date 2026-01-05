
import { Vehicle, ServicePackage, Offer } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'innova-hycross',
    name: 'Innova Hycross',
    tagline: 'Experience The Future of Luxury',
    year: 2024,
    type: 'MPV',
    priceRange: '₹19.77 - 30.98 Lakh',
    mileage: '23.24 kmpl',
    engine: '2.0L 4-Cylinder Hybrid',
    horsepower: '184 HP',
    // Added missing properties to match Vehicle interface
    torque: '206 Nm',
    fuelType: 'Petrol Hybrid',
    seatingCapacity: 7,
    longDescription: 'The Innova Hycross is more than just an MPV; it is a statement of sophistication. Built on the TNGA-C platform, it offers a car-like driving experience with the ruggedness of an SUV. The strong hybrid system ensures whisper-quiet drives and exceptional efficiency, while the premium cabin with Ottoman seats ensures every journey is first-class.',
    safetyFeatures: ['6 Airbags', 'Pre-Collision System', 'Lane Trace Assist', 'Adaptive Cruise Control', 'Blind Spot Monitor'],
    mainImage: 'https://www.toyotabharat.com/images/showroom/innova-hycross/gallery/img-1.jpg',
    gallery: [
      'https://www.toyotabharat.com/images/showroom/innova-hycross/gallery/img-2.jpg',
      'https://www.toyotabharat.com/images/showroom/innova-hycross/gallery/img-3.jpg'
    ],
    description: 'The All New Toyota Innova Hycross is a perfect blend of luxury, comfort, and advanced hybrid technology. Designed for families who refuse to compromise.',
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Toyota Safety Sense', 'JBL Premium Audio'],
    variants: [
      // Fix: Added missing 'features' property to VehicleVariant
      { name: 'GX (Non-Hybrid)', price: '₹19.77 Lakh', engine: '2.0L Petrol', transmission: 'CVT', features: [] },
      { name: 'VX Hybrid', price: '₹25.97 Lakh', engine: '2.0L Hybrid', transmission: 'e-CVT', features: [] },
      { name: 'ZX(O) Hybrid', price: '₹30.98 Lakh', engine: '2.0L Hybrid', transmission: 'e-CVT', features: [] }
    ],
    colors: [
      { name: 'Super White', hex: '#FFFFFF' },
      { name: 'Blackish Ageha Glass Flake', hex: '#1B2430' }
    ],
    // Placeholders for remaining required Vehicle interface properties
    exteriorImage: 'https://www.toyotabharat.com/images/showroom/innova-hycross/gallery/img-1.jpg',
    interiorImage: 'https://www.toyotabharat.com/images/showroom/innova-hycross/gallery/img-2.jpg',
    safetyImage: 'https://www.toyotabharat.com/images/showroom/innova-hycross/gallery/img-3.jpg',
    interiorDescription: 'Luxurious cabin with premium ottoman seats and multi-zone climate control.',
    exteriorDescription: 'Muscular SUV-inspired design with a bold hexagonal grille and LED lamps.',
    performanceDescription: '5th Gen Self-Charging Strong Hybrid system for power and efficiency.',
    safetyDescription: 'Toyota Safety Sense 3.0 suite of advanced driver assistance features.'
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
    // Added missing properties to match Vehicle interface
    torque: '500 Nm',
    fuelType: 'Diesel/Petrol',
    seatingCapacity: 7,
    longDescription: 'For over a decade, the Fortuner has been the undisputed king of the premium SUV segment in India. Its towering presence, coupled with a legendary 4x4 system, makes it the go-to choice for those who demand authority on the road and capability off it.',
    safetyFeatures: ['7 Airbags', 'VSC with BA', 'HAC', 'Speed Sensing Auto Door Lock', 'Impact Sensing Door Unlock'],
    mainImage: 'https://www.toyotabharat.com/images/showroom/fortuner/gallery/img-1.jpg',
    gallery: [
      'https://www.toyotabharat.com/images/showroom/fortuner/gallery/img-2.jpg'
    ],
    description: 'The king of all terrains. The Toyota Fortuner is the ultimate symbol of power and prestige, offering unmatched off-road capability and presence.',
    features: ['Active Traction Control', 'Dac (Downhill Assist Control)', 'Electronic Drive Control', 'Eco/Sport Driving Modes'],
    variants: [
      // Fix: Added missing 'features' property to VehicleVariant
      { name: '2.7L Petrol 4x2 MT', price: '₹33.43 Lakh', engine: '2.7L Petrol', transmission: 'Manual', features: [] },
      { name: '2.8L Diesel 4x4 AT', price: '₹42.32 Lakh', engine: '2.8L Diesel', transmission: 'Automatic', features: [] },
      { name: 'GR-S 4x4 AT', price: '₹51.44 Lakh', engine: '2.8L Diesel', transmission: 'Automatic', features: [] }
    ],
    colors: [
      { name: 'Phantom Brown', hex: '#3E2723' },
      { name: 'Attitude Black', hex: '#000000' }
    ],
    // Placeholders for remaining required Vehicle interface properties
    exteriorImage: 'https://www.toyotabharat.com/images/showroom/fortuner/gallery/img-1.jpg',
    interiorImage: 'https://www.toyotabharat.com/images/showroom/fortuner/gallery/img-2.jpg',
    safetyImage: 'https://www.toyotabharat.com/images/showroom/fortuner/gallery/img-1.jpg',
    interiorDescription: 'Rugged yet refined interior with all-black theme and premium materials.',
    exteriorDescription: 'Aggressive front fascia with quad-LED headlamps and 18-inch alloys.',
    performanceDescription: 'Legendary 2.8L diesel engine with 500Nm of torque for ultimate power.',
    safetyDescription: 'High strength impact absorbing body with 7 airbags as standard.'
  },
  {
    id: 'urban-cruiser-hyryder',
    name: 'Urban Cruiser Hyryder',
    tagline: 'The Hybrid Life',
    year: 2024,
    type: 'SUV',
    priceRange: '₹11.14 - 20.19 Lakh',
    mileage: '27.97 kmpl',
    engine: '1.5L Self-Charging Hybrid',
    horsepower: '114 HP',
    // Added missing properties to match Vehicle interface
    torque: '122 Nm',
    fuelType: 'Petrol Hybrid',
    seatingCapacity: 5,
    longDescription: 'The Urban Cruiser Hyryder brings Strong Hybrid technology to the masses. With its elegant design and sophisticated interiors, it offers a premium driving experience while delivering class-leading fuel efficiency that rivals even the most frugal cars.',
    safetyFeatures: ['6 Airbags', 'Disc Brakes on all wheels', 'TPMS', 'Vehicle Stability Control'],
    mainImage: 'https://www.toyotabharat.com/images/showroom/hyryder/gallery/img-1.jpg',
    gallery: [],
    description: 'Experience the perfect city SUV with Toyota’s self-charging hybrid technology. Efficiency meets performance in a stylish package.',
    features: ['Heads Up Display', '360 Degree Camera', 'Wireless Charging', 'Connected Car Tech'],
    variants: [
      // Fix: Added missing 'features' property to VehicleVariant
      { name: 'E MT Petrol', price: '₹11.14 Lakh', engine: '1.5L Petrol', transmission: 'Manual', features: [] },
      { name: 'V Hybrid AT', price: '₹20.19 Lakh', engine: '1.5L Hybrid', transmission: 'e-CVT', features: [] }
    ],
    colors: [
      { name: 'Cave Black', hex: '#0D0D0D' },
      { name: 'Speedy Blue', hex: '#1E3A8A' }
    ],
    // Placeholders for remaining required Vehicle interface properties
    exteriorImage: 'https://www.toyotabharat.com/images/showroom/hyryder/gallery/img-1.jpg',
    interiorImage: 'https://www.toyotabharat.com/images/showroom/hyryder/gallery/img-1.jpg',
    safetyImage: 'https://www.toyotabharat.com/images/showroom/hyryder/gallery/img-1.jpg',
    interiorDescription: 'Tech-savvy interior with heads-up display and panoramic sunroof.',
    exteriorDescription: 'Dynamic and sophisticated SUV design with crystal acrylic grille.',
    performanceDescription: 'Best-in-class fuel efficiency with self-charging hybrid technology.',
    safetyDescription: '6 airbags and all-wheel disc brakes for enhanced occupant safety.'
  },
  {
    id: 'camry',
    name: 'Camry Hybrid',
    tagline: 'The Pinnacle of Elegance',
    year: 2024,
    type: 'Sedan',
    priceRange: '₹46.17 Lakh',
    mileage: '19.1 kmpl',
    engine: '2.5L 4-Cylinder Hybrid',
    horsepower: '218 HP',
    // Added missing properties to match Vehicle interface
    torque: '221 Nm',
    fuelType: 'Petrol Hybrid',
    seatingCapacity: 5,
    longDescription: 'The Camry Hybrid is the choice of world leaders and professionals. It offers a level of serenity and comfort that is unparalleled, combined with the reliability and efficiency of Toyota’s advanced strong hybrid system.',
    safetyFeatures: ['9 Airbags', 'VSC', 'Traction Control', 'Parking Sensors', 'EBD'],
    mainImage: 'https://www.toyotabharat.com/images/showroom/camry/gallery/img-1.jpg',
    gallery: [],
    description: 'Luxury redefined with a cleaner soul. The Camry Hybrid provides an whisper-quiet ride with intelligent power management.',
    features: ['Reclining Rear Seats', '3-Zone Climate Control', 'Memory Seats', 'Ventilated Front Seats'],
    variants: [
      // Fix: Added missing 'features' property to VehicleVariant
      { name: '2.5 Hybrid AT', price: '₹46.17 Lakh', engine: '2.5L Hybrid', transmission: 'e-CVT', features: [] }
    ],
    colors: [{ name: 'Burning Black', hex: '#000000' }],
    // Placeholders for remaining required Vehicle interface properties
    exteriorImage: 'https://www.toyotabharat.com/images/showroom/camry/gallery/img-1.jpg',
    interiorImage: 'https://www.toyotabharat.com/images/showroom/camry/gallery/img-1.jpg',
    safetyImage: 'https://www.toyotabharat.com/images/showroom/camry/gallery/img-1.jpg',
    interiorDescription: 'Whisper-quiet cabin with reclining rear seats and JBL audio.',
    exteriorDescription: 'Sleek and aerodynamic sedan profile with a commanding presence.',
    performanceDescription: 'Sophisticated hybrid powertrain delivering 218HP smoothly.',
    safetyDescription: 'Unmatched 9-airbag system and advanced stability controls.'
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
    // Added missing properties to match Vehicle interface
    torque: '113 Nm',
    fuelType: 'Petrol/CNG',
    seatingCapacity: 5,
    longDescription: 'Designed for those who want to stand out, the Toyota Glanza is a tech-loaded hatchback that combines style with practicality. From the Heads-up Display to the 360-degree camera, it offers features usually reserved for luxury cars.',
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'Brake Assist', 'ESP with Hill Hold'],
    mainImage: 'https://www.toyotabharat.com/images/showroom/glanza/gallery/img-1.jpg',
    gallery: [],
    description: 'The cool hatchback for the modern world. Loaded with tech, safety, and incredible fuel efficiency.',
    features: ['6 Airbags', 'HUD', '9-inch Touchscreen', 'Hey Toyota Voice Assist'],
    variants: [
      // Fix: Added missing 'features' property to VehicleVariant
      { name: 'E MT', price: '₹6.86 Lakh', engine: '1.2L Petrol', transmission: 'Manual', features: [] },
      { name: 'V AMT', price: '₹10.00 Lakh', engine: '1.2L Petrol', transmission: 'AMT', features: [] }
    ],
    colors: [{ name: 'Insta Blue', hex: '#003366' }],
    // Placeholders for remaining required Vehicle interface properties
    exteriorImage: 'https://www.toyotabharat.com/images/showroom/glanza/gallery/img-1.jpg',
    interiorImage: 'https://www.toyotabharat.com/images/showroom/glanza/gallery/img-1.jpg',
    safetyImage: 'https://www.toyotabharat.com/images/showroom/glanza/gallery/img-1.jpg',
    interiorDescription: 'Stylish interior with 9-inch touchscreen and smart connectivity.',
    exteriorDescription: 'Sleek hatchback design with sporty liquid flow lines.',
    performanceDescription: 'Efficient 1.2L K-series engine with dual jet technology.',
    safetyDescription: 'Equipped with 6 airbags and hill hold control for safety.'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'periodic',
    title: 'Periodic Maintenance',
    icon: 'Settings',
    description: 'Comprehensive checkups at scheduled intervals to keep your Toyota in prime condition.',
    details: ['Oil & Filter Change', 'Brake Inspection', 'Tyre Rotation', 'Multipoint Safety Check'],
    // Added missing longContent property
    longContent: 'Maintain your Toyota\'s longevity with our expert periodic maintenance services. Our factory-trained technicians perform comprehensive checks to ensure your vehicle remains in peak condition, following strict manufacturer guidelines.'
  },
  {
    id: 'express',
    title: '60-Minute Express Service',
    icon: 'Zap',
    description: 'Fast, high-quality maintenance by dual technicians in exactly 60 minutes.',
    details: ['Scheduled Maintenance', 'Car Wash', 'Genuine Parts Guarantee'],
    // Added missing longContent property
    longContent: 'Value your time with our Express Maintenance 60. Two technicians work simultaneously to complete your periodic service in just 60 minutes, without compromising on quality or thoroughness.'
  },
  {
    id: 'body-paint',
    title: 'Body & Paint',
    icon: 'Paintbrush',
    description: 'Factory-standard repairs using high-grade materials and professional painting booths.',
    details: ['Dent Repair', 'Scratch Removal', 'Chassis Alignment', 'Anti-Rust Treatment'],
    // Added missing longContent property
    longContent: 'Restore your car\'s aesthetics with our professional body and paint services. We use high-grade materials and computerized matching to bring back that factory-fresh look and ensure long-term durability.'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'festive-2024',
    title: 'Special Festive Bonanza',
    // Added missing properties to match Offer interface
    subtitle: 'Exclusive Festive Savings',
    terms: ['Offer valid on select stock', 'Terms and conditions apply'],
    expiry: 'Valid until 31st Oct 2024',
    banner: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    description: 'Get benefits up to ₹50,000 on Urban Cruiser Hyryder and Glanza models.',
    // Fix: Added missing 'ctaText' property
    ctaText: 'Claim Festive Offer'
  },
  {
    id: 'exchange-offer',
    title: 'Best-in-Class Exchange Value',
    // Added missing properties to match Offer interface
    subtitle: 'Upgrade Your Journey',
    terms: ['Vehicle must have clear title', 'Exchange bonus varies by model'],
    expiry: 'Limited Time Only',
    banner: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    description: 'Trade in your old car of any brand and upgrade to a new Toyota with additional exchange bonus.',
    // Fix: Added missing 'ctaText' property
    ctaText: 'Get Exchange Value'
  }
];
