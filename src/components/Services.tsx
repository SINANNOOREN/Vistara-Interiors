import { Palette, Home, Lightbulb, Sofa, Building2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home makeovers tailored to your lifestyle and preferences.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design']
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Professional environments that enhance productivity and brand image.',
      features: ['Office Design', 'Retail Spaces', 'Restaurant Interiors', 'Hotel Design']
    },
    {
      icon: Palette,
      title: 'Design Consultation',
      description: 'Expert advice and creative solutions for your interior design challenges.',
      features: ['Style Assessment', 'Design Strategy', 'Material Selection', 'Budget Planning']
    },
    {
      icon: Sofa,
      title: 'Furniture & Decor',
      description: 'Curated selection of furniture and accessories to complete your space.',
      features: ['Custom Furniture', 'Art Curation', 'Window Treatments', 'Accessories']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Comprehensive lighting solutions that create the perfect ambiance.',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Features', 'Smart Controls']
    },
    {
      icon: Sparkles,
      title: 'Styling & Staging',
      description: 'Professional styling services for photography, events, or home staging.',
      features: ['Home Staging', 'Event Styling', 'Photo Shoots', 'Seasonal Updates']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="services" 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive interior design services that transform your vision into reality.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300 mb-4"
                >
                  <service.icon className="w-8 h-8 text-amber-600" />
                </motion.div>
                <motion.h3 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors"
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 bg-amber-600 rounded-full mr-3"
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together. Our team is ready to bring your vision to life.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 hover:shadow-lg"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
