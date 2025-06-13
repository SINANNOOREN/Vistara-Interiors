import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Porojects', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Animation variants for the drawer and overlay
  const drawerVariants: Variants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 40, 
        when: 'beforeChildren', 
        staggerChildren: 0.08 
      } 
    },
    exit: { 
      x: '100%', 
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 40 
      } 
    }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
    visible: { 
      opacity: 1, 
      backdropFilter: 'blur(6px)', 
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      backdropFilter: 'blur(0px)', 
      transition: { duration: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 24 
      } 
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
      <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex-shrink-0"
>
<a href="#home" className="block">
  <h1 className="text-2xl font-bold text-gray-900">
    <div className="flex items-center gap-2">
      <img src="/rtye.png" alt="Vistara Logo" className="w-8 h-8" />
      Vistara <span className="text-amber-600">Interiors</span>
    </div>
  </h1>
</a>
</motion.div>

          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-600 hover:text-amber-600 p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Side Drawer Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={() => setIsMenuOpen(false)}
            style={{ background: 'rgba(30,30,30,0.25)', backdropFilter: 'blur(6px)' }}
          >
            <motion.div
              key="drawer"
              className="ml-auto h-screen w-4/5 max-w-xs bg-white shadow-2xl relative flex flex-col py-8 px-6 rounded-l-3xl border-l border-gray-200"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                whileTap={{ scale: 0.9, rotate: 90 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-amber-600 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur-md"
                aria-label="Close menu"
              >
                <X size={28} />
              </motion.button>
              <nav className="mt-12 flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover={{ x: 12, scale: 1.04, color: '#d97706' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="text-lg font-semibold text-gray-800 hover:text-amber-600 transition-colors duration-200 px-2 py-2 rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
              <div className=" pt-10 flex flex-col mt-2 gap-3">
                <a href="#contact" className="block w-full text-center bg-amber-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:bg-amber-700 transition-all duration-200 text-base tracking-wide">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
