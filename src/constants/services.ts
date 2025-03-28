import { SERVICE_IMAGES } from './images';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: string[];
  benefits: string[];
  process: string[];
  pricing: {
    residential: string;
    commercial: string;
  };
}

export const services: Service[] = [
  {
    id: 'air-duct',
    title: 'Air Duct Cleaning',
    description: 'Professional air duct cleaning service to improve indoor air quality and system efficiency.',
    icon: 'Wind',
    image: SERVICE_IMAGES.AIR_DUCT,
    details: [
      'Thorough cleaning of all ductwork',
      'Removal of dust, debris, and contaminants',
      'Sanitization of duct surfaces',
      'Inspection of duct integrity',
      'Performance testing after cleaning'
    ],
    benefits: [
      'Improved indoor air quality',
      'Enhanced system efficiency',
      'Reduced energy costs',
      'Better respiratory health',
      'Extended HVAC system life'
    ],
    process: [
      'Initial inspection and assessment',
      'Protection of work areas',
      'High-powered vacuum cleaning',
      'Agitation of duct surfaces',
      'Final inspection and testing'
    ],
    pricing: {
      residential: 'Starting from $299',
      commercial: 'Custom quote based on square footage'
    }
  },
  {
    id: 'furnace',
    title: 'Furnace Cleaning',
    description: 'Comprehensive furnace cleaning and maintenance to ensure optimal performance and safety.',
    icon: 'Flame',
    image: SERVICE_IMAGES.FURNACE,
    details: [
      'Complete furnace inspection',
      'Cleaning of all components',
      'Filter replacement',
      'Safety testing',
      'Performance optimization'
    ],
    benefits: [
      'Improved heating efficiency',
      'Enhanced safety',
      'Lower energy bills',
      'Reduced breakdown risk',
      'Better indoor comfort'
    ],
    process: [
      'Safety inspection',
      'Component cleaning',
      'Filter replacement',
      'Performance testing',
      'Maintenance report'
    ],
    pricing: {
      residential: 'Starting from $199',
      commercial: 'Custom quote based on system size'
    }
  },
  {
    id: 'ac-coil',
    title: 'AC Coil Cleaning',
    description: 'Professional AC coil cleaning to maintain cooling efficiency and prevent system breakdowns.',
    icon: 'Snowflake',
    image: SERVICE_IMAGES.AC_COIL,
    details: [
      'Coil inspection and cleaning',
      'Drain pan cleaning',
      'Condensate line clearing',
      'Performance testing',
      'Maintenance recommendations'
    ],
    benefits: [
      'Better cooling performance',
      'Reduced energy consumption',
      'Prevented system breakdowns',
      'Improved air quality',
      'Extended system life'
    ],
    process: [
      'System inspection',
      'Coil cleaning',
      'Drain maintenance',
      'Performance testing',
      'Service report'
    ],
    pricing: {
      residential: 'Starting from $249',
      commercial: 'Custom quote based on system size'
    }
  },
  {
    id: 'dryer-vent',
    title: 'Dryer Vent Cleaning',
    description: 'Professional dryer vent cleaning to prevent fire hazards and improve dryer efficiency.',
    icon: 'Droplets',
    image: SERVICE_IMAGES.DRYER_VENT,
    details: [
      'Complete vent inspection',
      'Lint removal',
      'Vent blockage clearing',
      'Safety testing',
      'Efficiency optimization'
    ],
    benefits: [
      'Prevented fire hazards',
      'Faster drying times',
      'Lower energy costs',
      'Extended dryer life',
      'Better indoor air quality'
    ],
    process: [
      'Initial inspection',
      'Vent cleaning',
      'Blockage removal',
      'Safety testing',
      'Performance verification'
    ],
    pricing: {
      residential: 'Starting from $149',
      commercial: 'Custom quote based on number of units'
    }
  },
  {
    id: 'central-vacuum',
    title: 'Central Vacuum Cleaning',
    description: 'Professional central vacuum system cleaning and maintenance for optimal performance.',
    icon: 'Vacuum',
    image: SERVICE_IMAGES.CENTRAL_VACUUM,
    details: [
      'System inspection',
      'Tubing cleaning',
      'Filter replacement',
      'Performance testing',
      'Maintenance recommendations'
    ],
    benefits: [
      'Improved suction power',
      'Better cleaning performance',
      'Reduced maintenance needs',
      'Extended system life',
      'Enhanced indoor air quality'
    ],
    process: [
      'System assessment',
      'Tubing cleaning',
      'Filter maintenance',
      'Performance testing',
      'Service report'
    ],
    pricing: {
      residential: 'Starting from $179',
      commercial: 'Custom quote based on system size'
    }
  },
  {
    id: 'air-filter',
    title: 'Air Filter Replacement',
    description: 'Professional air filter replacement and maintenance for better indoor air quality.',
    icon: 'Filter',
    image: SERVICE_IMAGES.AIR_FILTER,
    details: [
      'Filter inspection',
      'High-quality filter installation',
      'System testing',
      'Maintenance recommendations',
      'Filter schedule planning'
    ],
    benefits: [
      'Cleaner indoor air',
      'Better system efficiency',
      'Reduced energy costs',
      'Extended system life',
      'Improved respiratory health'
    ],
    process: [
      'Filter assessment',
      'Filter replacement',
      'System testing',
      'Maintenance planning',
      'Service documentation'
    ],
    pricing: {
      residential: 'Starting from $79',
      commercial: 'Custom quote based on filter type and quantity'
    }
  },
  {
    id: 'inspection',
    title: 'HVAC Inspection',
    description: 'Comprehensive HVAC system inspection and maintenance planning.',
    icon: 'Search',
    image: SERVICE_IMAGES.INSPECTION,
    details: [
      'Complete system inspection',
      'Performance testing',
      'Safety checks',
      'Maintenance recommendations',
      'Detailed report'
    ],
    benefits: [
      'Early problem detection',
      'Preventive maintenance',
      'Cost savings',
      'System optimization',
      'Peace of mind'
    ],
    process: [
      'Visual inspection',
      'Performance testing',
      'Safety verification',
      'Report generation',
      'Recommendation review'
    ],
    pricing: {
      residential: 'Starting from $129',
      commercial: 'Custom quote based on system size'
    }
  },
  {
    id: 'commercial',
    title: 'Commercial HVAC',
    description: 'Comprehensive commercial HVAC services for businesses of all sizes.',
    icon: 'Building2',
    image: SERVICE_IMAGES.COMMERCIAL,
    details: [
      'Complete system inspection',
      'Preventive maintenance',
      'Emergency repairs',
      'Performance optimization',
      'Energy efficiency upgrades'
    ],
    benefits: [
      'Minimized downtime',
      'Cost savings',
      'Compliance with regulations',
      'Improved employee comfort',
      'Enhanced system reliability'
    ],
    process: [
      'Site assessment',
      'Service planning',
      'Scheduled maintenance',
      'Performance monitoring',
      'Regular reporting'
    ],
    pricing: {
      residential: 'N/A',
      commercial: 'Custom quote based on requirements'
    }
  }
]; 