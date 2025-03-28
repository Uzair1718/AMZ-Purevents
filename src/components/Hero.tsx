import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HERO_IMAGES } from '../constants/images';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AMZ PureVents",
            "image": HERO_IMAGES.DUCT_WORK,
            "description": "Professional HVAC & Air Duct Cleaning Services in Airdrie, Alberta. Expert cleaning and maintenance solutions for better indoor air quality.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "468 REYNOLDS ave sw",
              "addressLocality": "Airdrie",
              "addressRegion": "Alberta",
              "postalCode": "T4B5G2",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.2915",
              "longitude": "-114.0147"
            },
            "url": "https://amzpurevents.com",
            "telephone": "+1-403-555-0123",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "priceRange": "$$"
          })
        }}
      />

      <section className="relative min-h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGES.DUCT_WORK}
            alt="Professional HVAC Ductwork Cleaning Services in Airdrie, Alberta"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Professional HVAC & Air Duct Cleaning Services in Airdrie
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Expert cleaning and maintenance solutions for better indoor air quality and energy efficiency
            </motion.p>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">Certified Experts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm">Satisfaction Guaranteed</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Quote <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <p className="text-sm text-gray-200">
                Serving Airdrie and surrounding areas with professional HVAC services
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;