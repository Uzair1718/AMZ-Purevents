import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { services } from '../constants/services';
import type { Service } from '../constants/services';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const IconComponent = Icons[service.icon as keyof typeof Icons] as LucideIcon;

  return (
    <div ref={ref}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} Service in Airdrie, Alberta - AMZ PureVents`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              {IconComponent && <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
          
          {/* Service Details */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's Included:</h4>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icons.CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icons.Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Process:</h4>
              <ul className="space-y-2">
                {service.process.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pricing:</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Residential:</span> {service.pricing.residential}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Commercial:</span> {service.pricing.commercial}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
              <Icons.ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const filteredServices = services.filter(service => {
    if (filter === 'all') return true;
    if (filter === 'residential') return service.pricing.residential !== 'N/A';
    if (filter === 'commercial') return service.pricing.commercial !== 'Custom quote based on requirements';
    return true;
  });

  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "LocalBusiness",
                "name": "AMZ PureVents",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "468 REYNOLDS ave sw",
                  "addressLocality": "Airdrie",
                  "addressRegion": "Alberta",
                  "postalCode": "T4B5G2",
                  "addressCountry": "CA"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": service.pricing.residential,
                "priceCurrency": "CAD"
              }
            }))
          })
        }}
      />

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Professional HVAC Services in Airdrie
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expert cleaning and maintenance solutions for better indoor air quality, energy efficiency, and system longevity. Serving Airdrie and surrounding areas with certified professionals.
            </p>
          </motion.div>

          {/* Service Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'residential'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'commercial'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Commercial
            </button>
          </motion.div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Improve Your Indoor Air Quality?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contact us today for a free consultation and quote. Our team is ready to help!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
              <Icons.ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};