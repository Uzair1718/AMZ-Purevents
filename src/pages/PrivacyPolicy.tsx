import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-16 pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p>
                AMZ PureVents ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. Information We Collect</h2>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-lg font-medium mb-2 mt-4 text-gray-900 dark:text-white">2.2 Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process your payments</li>
                <li>To communicate with you about our services</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">4. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">8. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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