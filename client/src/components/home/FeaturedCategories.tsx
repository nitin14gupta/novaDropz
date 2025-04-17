'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Icon from '@/utils/icons';
import { staggerContainer, fadeIn } from '@/utils/motion';

const categories = [
    {
        id: 'electronics',
        name: 'Electronics',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop',
        description: 'Latest gadgets and tech accessories',
        itemCount: 120,
        icon: 'smartphone'
    },
    {
        id: 'home-decor',
        name: 'Home & Decor',
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop',
        description: 'Stylish decor for modern homes',
        itemCount: 85,
        icon: 'home-icon'
    },
    {
        id: 'fashion',
        name: 'Fashion',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
        description: 'Trendy clothing and accessories',
        itemCount: 150,
        icon: 'shirt'
    },
    {
        id: 'beauty',
        name: 'Beauty',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop',
        description: 'Premium beauty and skincare',
        itemCount: 70,
        icon: 'sparkles'
    },
    {
        id: 'fitness',
        name: 'Fitness',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
        description: 'Equipment for your workout routine',
        itemCount: 60,
        icon: 'dumbbell'
    },
    {
        id: 'accessories',
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=2070&auto=format&fit=crop',
        description: 'Must-have accessories for everyone',
        itemCount: 110,
        icon: 'watch'
    },
];

export default function FeaturedCategories() {
    return (
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary-50 to-transparent"></div>
            <motion.div
                className="absolute -top-24 -right-24 w-96 h-96 bg-accent-50 rounded-full opacity-50 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.6, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            ></motion.div>
            <motion.div
                className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-50 rounded-full opacity-50 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                }}
            ></motion.div>

            <motion.div
                className="container mx-auto px-4 relative"
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div
                    className="text-center mb-12"
                    variants={fadeIn('up', 'tween', 0.1, 1)}
                >
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">Curated Collections</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Explore our wide range of products across different categories. From electronics to fashion, we've got everything covered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                        >
                            <Link
                                href={`/categories/${category.id}`}
                                className="group block"
                            >
                                <motion.div
                                    className="card group-hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:border-primary-100 border border-transparent"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="relative h-56 overflow-hidden rounded-t-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 group-hover:from-primary-900/60 group-hover:to-primary-900/20 transition-colors duration-300 z-10"></div>
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 left-0 p-5 z-20">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <div className="w-8 h-8 bg-accent-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <Icon name={category.icon} size={16} className="text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-accent-200 transition-colors duration-300">
                                                    {category.name}
                                                </h3>
                                            </div>
                                            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                                {category.itemCount} items
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-neutral-600 mb-4 line-clamp-2">{category.description}</p>
                                        <div className="flex items-center text-primary-500 font-medium group-hover:text-primary-600">
                                            Explore Category
                                            <motion.div
                                                className="ml-1"
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                }}
                                            >
                                                <Icon name="chevron-right" size={18} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/categories"
                            className="btn-secondary px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto inline-block"
                        >
                            View All Categories
                            <Icon name="arrow-right" size={16} />
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
} 