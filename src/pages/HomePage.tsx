import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  // Sample featured products data
  const featuredProducts = [
    {
      id: '1',
      name: 'White HolySheets Set – Luxury Bamboo Collection',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'HolySheets',
      colors: ['#ffffff', '#f3f4f6', '#e5e7eb']
    },
    {
      id: '2',
      name: 'Light Grey HolySheets Set – Luxury Bamboo Collection',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'HolySheets',
      colors: ['#9ca3af', '#6b7280', '#4b5563']
    },
    {
      id: '3',
      name: 'Red HolyGrail – 100% Luxury Bamboo Bed Sheets',
      price: 349.00,
      originalPrice: 399.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'HolyGrails',
      colors: ['#dc2626', '#b91c1c', '#991b1b']
    },
    {
      id: '4',
      name: 'Malouf Z – Shoulder Gel Dough® + Z™ Gel',
      price: 180.00,
      originalPrice: 200.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Pillows',
      colors: ['#ffffff', '#f3f4f6']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'These sheets are absolutely incredible! I\'ve never slept better. The bamboo fabric is so soft and breathable.',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Worth every penny. The quality is outstanding and they stay cool all night long. Highly recommend!',
      location: 'New York, NY'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'I was skeptical about the price, but these sheets have completely transformed my sleep experience.',
      location: 'Miami, FL'
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Featured Products Section */}
      <section className="section-padding bg-luxury-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Featured
              <span className="block text-gradient font-semibold">Collections</span>
            </h2>
            <p className="text-xl text-luxury-600 max-w-3xl mx-auto">
              Discover our most popular luxury bamboo bed sheets and accessories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/shop" className="btn-primary group inline-flex items-center justify-center">
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Features />

      {/* Testimonials Section */}
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
              What Our
              <span className="block text-gradient font-semibold">Customers Say</span>
            </h2>
            <p className="text-xl text-luxury-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their sleep with HolySheets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-luxury-50 p-8 luxury-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-luxury-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <p className="font-semibold text-luxury-900">{testimonial.name}</p>
                  <p className="text-sm text-luxury-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-luxury-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Ready for
              <span className="block text-gradient font-semibold">Luxury Sleep?</span>
            </h2>
            <p className="text-xl text-luxury-300 mb-8 max-w-2xl mx-auto">
              Experience the difference that premium bamboo bed sheets can make in your sleep quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="btn-gold inline-flex items-center justify-center">
                Shop Now
              </Link>
              <Link to="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-900 inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
