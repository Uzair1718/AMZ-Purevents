import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Heart } from 'lucide-react';
import { HERO_IMAGES } from '../constants/images';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGES.DUCT_WORK}
            alt="About Us - HVAC Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About AMZ PureVent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Your trusted partner in HVAC cleaning and maintenance services
          </motion.p>
        </div>
      </section>

      {/* Message from Founder Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Message from Our Founder</h2>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                <img
                  src="/images/founder.jpg"
                  alt="Mr Omar Qureshi - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Mr Omer Qureshi</h3>
              <p className="text-gray-600 dark:text-gray-400 italic mb-8">Founder & CEO</p>
              <div className="text-left max-w-3xl mx-auto space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  "Welcome to AMZ PureVent. As the founder of this company, I am proud to lead a team that is dedicated to providing the highest quality HVAC cleaning and maintenance services in the industry. Our journey began with a simple vision: to create healthier indoor environments for our community through superior air quality solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  With years of experience in the HVAC industry, I understand the critical importance of clean, well-maintained air systems for both residential and commercial spaces. Our commitment goes beyond just cleaning ducts – we're dedicated to improving the air quality that families breathe and businesses rely on.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  At AMZ PureVent, we combine technical expertise with a customer-first approach. Every service we provide is backed by our commitment to excellence, integrity, and complete customer satisfaction. I personally ensure that our team maintains the highest standards of professionalism and service quality.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for considering AMZ PureVent for your HVAC needs. We look forward to serving you and exceeding your expectations."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At AMZ PureVent, we're dedicated to providing exceptional HVAC cleaning and maintenance services
              that ensure optimal indoor air quality and system efficiency. Our commitment to excellence and
              customer satisfaction drives everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
                title: 'Professional Service',
                description: 'Licensed and certified technicians with years of experience'
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
                title: 'Customer Focused',
                description: 'Dedicated to providing the best service experience'
              },
              {
                icon: <Award className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
                title: 'Quality Guaranteed',
                description: 'Satisfaction guaranteed on all our services'
              },
              {
                icon: <Heart className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
                title: 'Community Support',
                description: 'Active members of our local business community'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our History</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Founded in 2010, AMZ PureVent has grown from a small local business to a trusted name in HVAC
              cleaning and maintenance services. Our journey is marked by continuous improvement and dedication
              to customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Integrity in all our dealings
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Excellence in service delivery
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Innovation in our approach
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Customer satisfaction first
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Quality service delivery
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Environmental responsibility
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Safety and compliance
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Continuous improvement
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 