import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Phone number in international format without special characters
    const phoneNumber = '15875869228';
    const message = 'Hello! I would like to inquire about your HVAC services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 left-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline-block font-semibold">Chat with us</span>
    </motion.button>
  );
}; 