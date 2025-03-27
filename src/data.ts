import { Service, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Air Duct Cleaning',
    description: 'Improve indoor air quality by removing dust, allergens, and debris from air ducts.',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80',
    details: [
      'Complete duct system inspection',
      'Advanced cleaning equipment',
      'Allergen removal',
      'Improved air flow',
      'Better indoor air quality'
    ]
  },
  {
    id: 2,
    title: 'Furnace Cleaning',
    description: 'Enhance furnace efficiency by eliminating dirt buildup and ensuring smooth operation.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80',
    details: [
      'Thorough heat exchanger cleaning',
      'Burner inspection',
      'Filter replacement',
      'Performance optimization',
      'Energy efficiency improvement'
    ]
  },
  {
    id: 3,
    title: 'AC Coil Cleaning',
    description: 'Increase cooling efficiency by removing dirt and debris from evaporator and condenser coils.',
    icon: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    details: [
      'Evaporator coil cleaning',
      'Condenser coil maintenance',
      'Efficiency restoration',
      'Cooling performance boost',
      'Energy savings'
    ]
  },
  {
    id: 4,
    title: 'Dryer Vent Cleaning',
    description: 'Prevent fire hazards and improve dryer efficiency by clearing lint buildup.',
    icon: 'Fan',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80',
    details: [
      'Lint removal',
      'Fire hazard prevention',
      'Improved drying efficiency',
      'Extended appliance life',
      'Energy cost reduction'
    ]
  },
  {
    id: 5,
    title: 'Central Vacuum Cleaning',
    description: 'Ensure optimal suction power and system longevity with deep cleaning services.',
    icon: 'Power',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80',
    details: [
      'System power restoration',
      'Deep pipe cleaning',
      'Filter maintenance',
      'Suction optimization',
      'Extended system life'
    ]
  },
  {
    id: 6,
    title: 'Air Filter Replacement',
    description: 'Regular filter replacement for better air quality and HVAC performance.',
    icon: 'Filter',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    details: [
      'Filter quality assessment',
      'Regular replacement schedule',
      'Allergen reduction',
      'System efficiency boost',
      'Air quality improvement'
    ]
  },
  {
    id: 7,
    title: 'HVAC System Inspection & Maintenance',
    description: 'Routine checks to ensure HVAC systems are running smoothly.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
    details: [
      'Comprehensive system check',
      'Preventive maintenance',
      'Performance testing',
      'Safety inspection',
      'Efficiency optimization'
    ]
  },
  {
    id: 8,
    title: 'Commercial HVAC Cleaning',
    description: 'Professional cleaning for businesses, ensuring compliance with air quality standards.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
    details: [
      'Commercial-grade cleaning',
      'Compliance assurance',
      'Business continuity',
      'Indoor air quality',
      'Energy efficiency'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'AMZ PureVent transformed our home\'s air quality. The difference was noticeable immediately!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'Their commercial HVAC cleaning service exceeded our expectations. Highly professional team!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content: 'Regular maintenance from AMZ PureVent has significantly improved our building\'s air quality.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  }
];