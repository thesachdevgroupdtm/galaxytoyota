
import { ServicePackage } from '../types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'em60',
    title: 'EM60 Express Service',
    description: 'Full periodic maintenance in just 60 minutes.',
    icon: '/assets/services/em60.png',
    details: ['Dual Technician Workflow', 'High Speed Precision', 'Wait-and-Watch Lounge', 'Quality Assurance'],
    longContent: 'Toyota’s Express Maintenance 60 (EM60) ensures your car receives a full periodic service in exactly 60 minutes. Two highly trained technicians work simultaneously using specialized tools, ensuring no corner is left unchecked while respecting your time.'
  },
  {
    id: 't-gloss',
    title: 'T-Gloss Detailing',
    description: 'Professional paint protection and interior detailing studio.',
    icon: '/assets/services/t-gloss.png',
    details: ['Ceramic Coating', 'Underbody Protection', 'Interior Enrichment', 'Engine Room Polish'],
    longContent: 'Restore your car’s showroom shine with T-Gloss. Our car detailing studio uses Toyota-approved chemicals and high-grade machines to protect your vehicle from dust, moisture, and aging.'
  },
  {
    id: 'smiles',
    title: 'Smiles Annual Maintenance',
    description: 'Fixed-cost maintenance plans for long-term savings.',
    icon: '/assets/services/smiles-package.png',
    details: ['Inflation Protection', 'Priority Service', 'Genuine Parts Included', 'Transferable Plan'],
    longContent: 'Smiles Annual Maintenance Package protects you from price inflation of spare parts and labor. Pay a one-time fee and enjoy tension-free maintenance for years, with the flexibility to transfer the plan if you sell your car.'
  },
  {
    id: 'body-paint',
    title: 'Body & Paint Repair',
    description: 'Factory-standard repairs for accident damages.',
    icon: '/assets/services/em60.png', // Fallback to relevant icon
    details: ['Chassis Alignment', 'Computerized Paint Matching', 'Anti-Corrosion Treatment', 'Fast Claims Settlement'],
    longContent: 'Our specialized body and paint shop restores your Toyota to its original factory standards. We use computerized color matching and specialized frames to ensure safety and aesthetics are never compromised.'
  }
];
