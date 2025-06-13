import { Award, Users, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Clock, number: '10+', label: 'Years Experience' },
    { icon: Heart, number: '1000+', label: 'Projects Completed' }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="about" 
      className="py-2 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold  text-gray-900 mb-4">
            About <span className="text-amber-600 ">Vistara Interiors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate designers dedicated to creating exceptional spaces that inspire and delight. Our journey began with a simple belief: every space has the potential to be extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="h-40 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full overflow-hidden cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Interior design process" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Design materials" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Design sketches" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="h-40 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Finished space" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mb-6"
            >
              Founded in 2014, Vistara Interiors has grown from a small studio to one of the most sought-after interior design firms in the region. Our name 'Vistara' means 'expansion' in Sanskrit, reflecting our commitment to expanding the possibilities of every space we touch.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 mb-6"
            >
              We believe that great design is not just about aesthetics – it's about creating environments that enhance the way people live, work, and feel. Every project we undertake is a collaboration between our expertise and our clients' dreams.
            </motion.p>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default About;
