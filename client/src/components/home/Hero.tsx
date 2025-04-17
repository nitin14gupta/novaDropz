'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Icon from '@/utils/icons';
import { heroVariants, heroItemVariants } from '@/utils/motion';

export default function Hero() {
    return (
        <motion.section
            className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background pattern with animation */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 animate-pulse-slow" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")' }}></div>
            </div>

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 via-transparent to-accent-500/30 animate-gradient"></div>

            <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <motion.div
                            className="inline-block px-4 py-1 bg-accent-500/20 backdrop-blur-sm rounded-full mb-6 border border-accent-500/30"
                            variants={heroItemVariants}
                        >
                            <p className="text-sm font-medium text-accent-200">Premium Quality Products</p>
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            variants={heroItemVariants}
                        >
                            Discover <span className="text-accent-300">Amazing</span> Products at Unbeatable Prices
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed"
                            variants={heroItemVariants}
                        >
                            NovaDropz brings you premium quality products from around the world. Shop the latest trends and must-have items with fast shipping and exceptional service.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={heroItemVariants}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/products"
                                    className="btn-accent px-8 py-3 text-base font-semibold rounded-button shadow-lg hover:shadow-accent-500/40 transition-all duration-300 flex items-center justify-center"
                                >
                                    Shop Now
                                    <Icon name="arrow-right" className="ml-2" size={16} />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/categories"
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 py-3 px-8 rounded-button inline-flex items-center justify-center text-base font-medium"
                                >
                                    View Categories
                                    <Icon name="chevron-right" className="ml-1" size={16} />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            className="mt-10 grid grid-cols-3 gap-4"
                            variants={heroItemVariants}
                        >
                            <motion.div
                                className="text-center transform transition-transform hover:scale-105 duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 border border-white/20 backdrop-blur-sm">
                                    <Icon name="check" />
                                </div>
                                <p className="text-sm">Quality Assured</p>
                            </motion.div>
                            <motion.div
                                className="text-center transform transition-transform hover:scale-105 duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 border border-white/20 backdrop-blur-sm">
                                    <Icon name="clock" />
                                </div>
                                <p className="text-sm">Fast Delivery</p>
                            </motion.div>
                            <motion.div
                                className="text-center transform transition-transform hover:scale-105 duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 border border-white/20 backdrop-blur-sm">
                                    <Icon name="alert-circle" />
                                </div>
                                <p className="text-sm">Secure Payments</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative hidden md:block"
                        variants={heroItemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div
                            className="absolute -inset-4 bg-accent-500/10 rounded-3xl transform rotate-6 animate-pulse-slow"
                            animate={{
                                rotate: [6, 2, 6],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        ></motion.div>
                        <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/5] relative">
                                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-700 animate-gradient"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/80 to-transparent p-6">
                                <motion.div
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <p className="text-white/80 text-sm">Featured Collection</p>
                                    <h3 className="text-xl font-medium mt-1">Premium Selection</h3>
                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="text-accent-300 font-bold group-hover:underline flex items-center">
                                            Shop Now
                                            <Icon name="chevron-right" className="ml-1" size={16} />
                                        </span>
                                        <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-bold tracking-wide">20% OFF</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 