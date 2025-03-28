import React from 'react';
import { motion } from 'framer-motion';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-16 pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by AMZ PureVents ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. Services Description</h2>
              <p>
                AMZ PureVents provides professional HVAC cleaning and maintenance services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Air duct cleaning</li>
                <li>Furnace cleaning</li>
                <li>AC coil cleaning</li>
                <li>Dryer vent cleaning</li>
                <li>Central vacuum cleaning</li>
                <li>Air filter replacement</li>
                <li>HVAC inspection</li>
                <li>Commercial HVAC services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">3. Service Area</h2>
              <p>
                Our services are primarily available in Airdrie, Alberta, and surrounding areas. We reserve the right to refuse service outside our service area.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">4. Pricing and Payment</h2>
              <p>
                All prices are in Canadian Dollars (CAD). We reserve the right to modify our pricing at any time. Payment is due upon completion of services unless otherwise arranged.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">5. Scheduling and Cancellation</h2>
              <p>
                Service appointments are scheduled on a first-come, first-served basis. We require at least 24 hours notice for cancellations. Late cancellations may result in a cancellation fee.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">6. Warranty and Guarantee</h2>
              <p>
                We provide a satisfaction guarantee for our services. If you are not satisfied with our work, please contact us within 30 days of service completion. We will make reasonable efforts to address your concerns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">7. Liability</h2>
              <p>
                We are fully licensed and insured. However, we are not liable for any damage that may occur during or after our services that is not directly caused by our negligence.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">8. Customer Responsibilities</h2>
              <p>As a customer, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information when booking services</li>
                <li>Ensure access to the service area</li>
                <li>Remove any obstacles that may interfere with service</li>
                <li>Maintain a safe environment for our technicians</li>
                <li>Pay for services as agreed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">9. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of AMZ PureVents and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">11. Contact Information</h2>
              <p>
                For any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-2">
                <p>Email: info@amzpurevent.com</p>
                <p>Phone: +1 (587) 586-9228</p>
                <p>Address: 468 Reynolds Ave SW, Airdrie, Alberta T4B5G2, Canada</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 