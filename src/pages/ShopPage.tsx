import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { Filter, Grid, List } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'sheets', name: 'HolySheets' },
    { id: 'grails', name: 'HolyGrails' },
    { id: 'pillows', name: 'Pillows' },
    { id: 'mattresses', name: 'Mattresses' },
    { id: 'massagers', name: 'Massagers' },
  ];

  // Sample products data
  const products = [
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
      name: 'Dark Grey HolySheets Set – Luxury Bamboo Collection',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'HolySheets',
      colors: ['#374151', '#1f2937', '#111827']
    },
    {
      id: '4',
      name: 'Cream HolySheets Set – Luxury Bamboo Collection',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'HolySheets',
      colors: ['#fef3c7', '#fde68a', '#fcd34d']
    },
    {
      id: '5',
      name: 'Red HolyGrail – 100% Luxury Bamboo Bed Sheets',
      price: 349.00,
      originalPrice: 399.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'HolyGrails',
      colors: ['#dc2626', '#b91c1c', '#991b1b']
    },
    {
      id: '6',
      name: 'Burgundy HolyGrail – 100% Luxury Bamboo Bed Sheets',
      price: 349.00,
      originalPrice: 399.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'HolyGrails',
      colors: ['#991b1b', '#7f1d1d', '#450a0a']
    },
    {
      id: '7',
      name: 'Malouf Z – Shoulder Gel Dough® + Z™ Gel',
      price: 180.00,
      originalPrice: 200.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Pillows',
      colors: ['#ffffff', '#f3f4f6']
    },
    {
      id: '8',
      name: 'Malouf Z – Zoned Dough® + Lavender',
      price: 160.00,
      originalPrice: 180.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Pillows',
      colors: ['#ffffff', '#f3f4f6']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase().includes(selectedCategory));

  return (
    <div className="section-padding bg-luxury-50 min-h-screen">
      <div className="container-max">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-4 md:mb-6">
            Shop Our
            <span className="block text-gradient font-semibold">Collections</span>
          </h1>
          <p className="text-lg md:text-xl text-luxury-600 max-w-3xl mx-auto px-4">
            Discover our complete range of luxury bamboo bed sheets, pillows, and sleep accessories.
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 md:mb-8 gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 md:px-4 md:py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  selectedCategory === category.id
                    ? 'bg-luxury-900 text-white'
                    : 'bg-white text-luxury-700 hover:bg-luxury-100 luxury-border'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-white luxury-border p-1 rounded-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors duration-200 rounded ${
                viewMode === 'grid' ? 'bg-luxury-900 text-white' : 'text-luxury-700 hover:bg-luxury-100'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors duration-200 rounded ${
                viewMode === 'list' ? 'bg-luxury-900 text-white' : 'text-luxury-700 hover:bg-luxury-100'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-4 md:gap-6 lg:gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-luxury-600 text-lg">No products found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
