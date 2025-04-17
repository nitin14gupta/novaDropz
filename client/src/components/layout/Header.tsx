'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/utils/icons';
import { navVariants, menuVariants } from '@/utils/motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount] = useState(3); // Example cart count, would be from context/state in real app

    return (
        <motion.header
            className="bg-white shadow-sm sticky top-0 z-50"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center">
                            <span className="font-heading text-2xl font-bold text-primary-500">Nova<span className="text-accent-500">Dropz</span></span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {['Home', 'Products', 'Categories', 'About Us', 'Contact'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-neutral-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary-500"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Right Side Icons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Search */}
                        <motion.button
                            className="text-neutral-600 hover:text-primary-500 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon name="search" size={20} />
                        </motion.button>

                        {/* User Account */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/account" className="text-neutral-600 hover:text-primary-500 transition-colors duration-200">
                                <Icon name="user" size={20} />
                            </Link>
                        </motion.div>

                        {/* Cart */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/cart" className="text-neutral-600 hover:text-primary-500 transition-colors duration-200 relative">
                                <Icon name="cart" size={20} />
                                {cartCount > 0 && (
                                    <motion.span
                                        className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Cart icon for mobile */}
                        <Link href="/cart" className="text-neutral-600 relative">
                            <Icon name="cart" size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Hamburger button */}
                        <motion.button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <AnimatePresence initial={false} mode="wait">
                                {!isMenuOpen ? (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Icon name="menu" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Icon name="close" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white shadow-lg border-t overflow-hidden"
                        id="mobile-menu"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['Home', 'Products', 'Categories', 'About Us', 'Contact', 'My Account'].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-neutral-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Icon
                                            name={
                                                item === 'Home' ? 'home' :
                                                    item === 'Products' ? 'package' :
                                                        item === 'Categories' ? 'tag' :
                                                            item === 'About Us' ? 'info' :
                                                                item === 'Contact' ? 'mail' : 'user'
                                            }
                                            size={16}
                                            className="mr-2"
                                        />
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="mt-4 mb-2 px-3"
                            >
                                <div className="relative">
                                    <input
                                        type="search"
                                        placeholder="Search products..."
                                        className="w-full py-2 pl-3 pr-10 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    />
                                    <div className="absolute right-3 top-2.5 text-neutral-400">
                                        <Icon name="search" size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
} 