import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState('White');
  const [selectedSize, setSelectedSize] = useState('Queen');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sample product data - in a real app, this would come from an API
  const product = {
    id: '1',
    name: 'White HolySheets Set – Luxury Bamboo Collection',
    price: 99.99,
    originalPrice: 129.99,
    description: 'Experience ultimate comfort with our premium bamboo bed sheets. Made from high thread count visco bamboo blend and microfiber, these sheets are super-soft, breathable, and designed for your best night\'s sleep.',
    features: [
      'Super-soft bamboo viscose blend',
      'Deep fitted pockets (up to 18" thick mattresses)',
      'Breathable and thermo-regulating',
      'Wrinkle-free and hypo-allergenic',
      'Eco-friendly and sustainable',
      'Color resistant and durable'
    ],
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Light Grey', hex: '#9ca3af' },
      { name: 'Dark Grey', hex: '#374151' },
      { name: 'Cream', hex: '#fef3c7' },
      { name: 'Black', hex: '#111827' }
    ],
    sizes: ['Twin', 'Twin XL', 'Full', 'Queen', 'King', 'California King'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.8,
    reviewCount: 1247,
    inStock: true
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="section-padding bg-white min-h-screen">
      <div className="container-max">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/shop" className="flex items-center text-luxury-600 hover:text-luxury-900 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-luxury-50 luxury-border overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-luxury-50 luxury-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-200">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Product Title and Price */}
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-medium text-luxury-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <span className="text-3xl font-semibold text-luxury-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-luxury-400 line-through ml-2">${product.originalPrice}</span>
                  )}
                </div>
                {discount > 0 && (
                  <span className="bg-red-500 text-white text-sm font-medium px-2 py-1">
                    -{discount}%
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-gold-400 fill-current' : 'text-luxury-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-luxury-600 text-sm">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <p className="text-luxury-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-luxury-900 mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === color.name
                        ? 'border-luxury-900 scale-110'
                        : 'border-luxury-200 hover:border-luxury-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-luxury-900 mb-3">Size: {selectedSize}</h3>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      selectedSize === size
                        ? 'bg-luxury-900 text-white'
                        : 'bg-luxury-50 text-luxury-700 hover:bg-luxury-100 luxury-border'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-luxury-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border luxury-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-luxury-50 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x luxury-border">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-luxury-50 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
                <span className="text-luxury-600 text-sm">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gold flex-1 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-4 border-2 transition-colors duration-200 flex items-center justify-center ${
                  isWishlisted
                    ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                    : 'border-luxury-900 text-luxury-900 hover:bg-luxury-900 hover:text-white'
                }`}
              >
                <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                {isWishlisted ? 'Wishlisted' : 'Wishlist'}
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-luxury-900">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-luxury-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="bg-luxury-50 p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-gold-600" />
                <span className="text-luxury-700">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gold-600" />
                <span className="text-luxury-700">100% satisfaction guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
