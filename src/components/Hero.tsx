import { ArrowRight, Play } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white w-full">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80')] bg-cover bg-center"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mt-16 sm:mt-32 text-gray-900 leading-tight mb-6"
            >
              Transform Your
              <motion.span 
                variants={itemVariants}
                className="block text-amber-600"
              >
                Living Space
              </motion.span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Creating extraordinary interiors that reflect your personality and elevate your lifestyle through innovative design solutions.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
         
                <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
              >
              <a href="#contact">  Start Your Project</a>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            
            
               <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-amber-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <Play className="w-5 h-5" />
             <a href="#portfolio">   Watch Our Work</a>
              </motion.button>
           
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="h-48 bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Modern living room" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <motion.div 
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Kitchen design" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.0 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Bedroom design" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <motion.div 
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dining room" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-300 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
