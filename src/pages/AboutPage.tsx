import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Heart },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Bamboo Sourced', icon: Leaf },
    { number: '24/7', label: 'Customer Support', icon: Users },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-900/80 to-luxury-900/60"></div>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-light mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-luxury-100 max-w-2xl mx-auto"
          >
            Crafting luxury sleep experiences since 2008
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
                Our
                <span className="block text-gradient font-semibold">Mission</span>
              </h2>
              <p className="text-xl text-luxury-600 mb-6 leading-relaxed">
                At HolySheets, we believe everyone deserves to experience the ultimate in sleep comfort. 
                Our mission is to provide luxury bamboo bed sheets that combine exceptional quality, 
                sustainable practices, and innovative design.
              </p>
              <p className="text-luxury-700 leading-relaxed">
                We source only the finest bamboo viscose and microfiber materials, ensuring each sheet 
                is super-soft, breathable, and designed to last. Our commitment to eco-friendly practices 
                means you can sleep soundly knowing your comfort doesn't come at the expense of our planet.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-luxury-50 luxury-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury bed sheets"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-luxury-50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gold-600" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-semibold text-luxury-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-luxury-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Our
              <span className="block text-gradient font-semibold">Values</span>
            </h2>
            <p className="text-xl text-luxury-600 max-w-3xl mx-auto">
              The principles that guide everything we do at HolySheets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-900 mb-4">Sustainability</h3>
              <p className="text-luxury-700 leading-relaxed">
                We're committed to eco-friendly practices, from sourcing sustainable bamboo to 
                using environmentally responsible packaging and manufacturing processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-900 mb-4">Quality</h3>
              <p className="text-luxury-700 leading-relaxed">
                Every product we create meets the highest standards of quality and craftsmanship. 
                We never compromise on materials or construction to ensure lasting comfort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-900 mb-4">Customer Care</h3>
              <p className="text-luxury-700 leading-relaxed">
                Your satisfaction is our priority. We provide exceptional customer service and 
                stand behind every product with our 100% satisfaction guarantee.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-luxury-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Meet Our
              <span className="block text-gradient font-semibold">Team</span>
            </h2>
            <p className="text-xl text-luxury-600 max-w-3xl mx-auto">
              The passionate individuals behind HolySheets who are dedicated to bringing you the best sleep experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                bio: 'With over 15 years in the textile industry, Sarah founded HolySheets with a vision to revolutionize sleep comfort.',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Product Design',
                bio: 'Michael brings his expertise in sustainable materials and innovative design to create our luxury collections.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Customer Experience Director',
                bio: 'Emily ensures every customer interaction exceeds expectations and maintains our high service standards.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden luxury-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-luxury-900 mb-2">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-4">{member.role}</p>
                <p className="text-luxury-700 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
