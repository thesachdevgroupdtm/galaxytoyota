
// Types for the Toyota dealership application

export interface VehicleVariant {
  name: string;
  price: string;
  engine: string;
  transmission: string;
  features: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  year?: number;
  type: 'Hatchback' | 'Sedan' | 'SUV' | 'MPV' | 'Pickup' | 'Luxury';
  priceRange: string;
  mileage: string;
  engine: string;
  horsepower: string;
  torque: string;
  fuelType: string;
  seatingCapacity: number;
  bannerImage?: string;
  mainImage: string;
  exteriorImage: string;
  interiorImage: string;
  safetyImage?: string;
  gallery: string[];
  description: string;
  longDescription: string;
  interiorDescription: string;
  exteriorDescription: string;
  performanceDescription: string;
  safetyDescription: string;
  // Extended fields for richer content
  techDescription?: string;
  drivingExperience?: string;
  ownershipBenefits?: string[];
  features: string[];
  safetyFeatures?: string[];
  variants: VehicleVariant[];
  colors?: { name: string; hex: string }[];
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  longContent: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  category: 'Sales' | 'Service' | 'Used Cars' | 'Sparsh';
  address: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  phones: string[];
  hours: string;
  email: string | null;
  mapEmbed: string;
  mapUrl: string;
  services: string[];
  manager?: string;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  banner: string;
  expiry: string;
  terms: string[];
  ctaText: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}
