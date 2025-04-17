'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/utils/icons';
import { cardHoverVariants } from '@/utils/motion';

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    image: string;
    category: string;
    rating?: number;
    discount?: number;
    isNew?: boolean;
}

export default function ProductCard({
    id,
    title,
    price,
    image,
    category,
    rating = 0,
    discount = 0,
    isNew = false,
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Calculate discounted price
    const discountedPrice = discount > 0 ? price - (price * (discount / 100)) : price;

    return (
        <motion.div
            className="product-card group rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm"
            variants={cardHoverVariants}
            initial="initial"
            whileHover="hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image Container */}
            <div className="relative h-64 overflow-hidden">
                {/* Product image */}
                <Link href={`/products/${id}`}>
                    <div className="w-full h-full relative">
                        <Image
                            src={image}
                            alt={title}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Gradient overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                    </div>
                </Link>

                {/* Badges */}
                <div className="absolute top-0 left-0 m-2 flex flex-col gap-2">
                    <AnimatePresence>
                        {isNew && (
                            <motion.span
                                className="bg-accent-500 text-white px-2 py-1 text-xs font-semibold rounded-full shadow-md"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                NEW
                            </motion.span>
                        )}
                        {discount > 0 && (
                            <motion.span
                                className="bg-secondary-500 text-white px-2 py-1 text-xs font-semibold rounded-full shadow-md"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {discount}% OFF
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Quick actions */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            className="absolute right-0 top-0 m-2 flex flex-col gap-2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.button
                                type="button"
                                className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md hover:bg-neutral-100 hover:text-primary-500 transition-all duration-200"
                                aria-label="Add to wishlist"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon name="heart" size={18} />
                            </motion.button>
                            <motion.button
                                type="button"
                                className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md hover:bg-neutral-100 hover:text-primary-500 transition-all duration-200"
                                aria-label="Quick view"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon name="eye" size={18} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Quick add to cart button - appears on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            className="absolute bottom-0 inset-x-0 p-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.button
                                type="button"
                                className="w-full py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Icon name="cart" size={18} />
                                Quick Add
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Category */}
                <p className="text-xs text-neutral-500 mb-1 tracking-wider uppercase">{category}</p>

                {/* Title */}
                <h3 className="text-base font-medium mb-1 line-clamp-2 group-hover:text-primary-500 transition-colors duration-200">
                    <Link href={`/products/${id}`} className="text-neutral-800 hover:text-primary-500">
                        {title}
                    </Link>
                </h3>

                {/* Rating */}
                {rating > 0 && (
                    <div className="flex items-center mb-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Icon
                                    key={star}
                                    name="star"
                                    className={`h-4 w-4 ${star <= rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                                    size={16}
                                />
                            ))}
                        </div>
                        <span className="ml-1 text-xs text-neutral-500">({rating.toFixed(1)})</span>
                    </div>
                )}

                {/* Price */}
                <div className="flex items-center mt-2">
                    {discount > 0 ? (
                        <>
                            <span className="text-lg font-bold text-primary-500">${discountedPrice.toFixed(2)}</span>
                            <span className="ml-2 text-sm text-neutral-500 line-through">${price.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="text-lg font-bold text-primary-500">${price.toFixed(2)}</span>
                    )}
                </div>

                {/* Desktop Add to cart button (hidden on mobile) */}
                <div className="mt-4 hidden sm:block">
                    <motion.button
                        type="button"
                        className="w-full py-2 bg-neutral-100 hover:bg-primary-500 text-neutral-700 hover:text-white rounded-full transition-all duration-300 font-medium text-sm flex items-center justify-center"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                    >
                        <Icon name="cart" size={16} className="mr-2" />
                        Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
} 