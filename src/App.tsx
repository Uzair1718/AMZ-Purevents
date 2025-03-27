import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { MessageSquare, ArrowUp } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/15875869228"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageSquare className="w-6 h-6 text-white" />
        </motion.a>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 bg-blue-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Toast Notifications */}
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;