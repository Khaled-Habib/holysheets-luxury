import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Zap, Star, Droplets, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Made from sustainable bamboo viscose blend, gentle on the environment.'
    },
    {
      icon: Shield,
      title: 'Hypo-Allergenic',
      description: 'Perfect for sensitive skin, naturally resistant to allergens and bacteria.'
    },
    {
      icon: Zap,
      title: 'Wrinkle-Free',
      description: 'Advanced fabric technology ensures your sheets stay smooth and crisp.'
    },
    {
      icon: Star,
      title: 'Luxury Quality',
      description: 'High thread count and premium materials for ultimate comfort.'
    },
    {
      icon: Droplets,
      title: 'Breathable',
      description: 'Thermo-regulating fabric keeps you cool in summer and warm in winter.'
    },
    {
      icon: Heart,
      title: 'Deep Pockets',
      description: 'Extra deep fitted pockets fit mattresses up to 18" thick.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
            Why Choose
            <span className="block text-gradient font-semibold">HolySheets</span>
          </h2>
          <p className="text-xl text-luxury-600 max-w-3xl mx-auto">
            Experience the perfect blend of luxury, comfort, and sustainability with our premium bamboo bed sheets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-luxury-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-luxury-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t luxury-border"
        >
          <h3 className="text-2xl font-display font-medium text-luxury-900 mb-4">
            100% Satisfaction Guaranteed
          </h3>
          <p className="text-luxury-600 mb-8 max-w-2xl mx-auto">
            Our super soft luxury bamboo bed sheets will have you experiencing your best night ever. 
            Try them risk-free with our satisfaction guarantee.
          </p>
          <button className="btn-primary">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
