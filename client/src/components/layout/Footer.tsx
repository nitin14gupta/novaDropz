'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribed with email:', email);
        setEmail('');
        // You would normally call an API endpoint here
    };

    return (
        <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-200">
            {/* Wave divider */}
            <div className="bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full text-neutral-900 fill-current">
                    <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
                </svg>
            </div>

            {/* Newsletter section */}
            <div className="container mx-auto px-4 pt-8 pb-16">
                <div className="max-w-3xl mx-auto bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-xl transform -translate-y-16">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
                        <p className="text-neutral-400">Stay updated with the latest products and exclusive offers</p>
                    </div>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                            className="flex-grow px-4 py-3 rounded-xl bg-neutral-700/50 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="btn-accent px-6 py-3 rounded-xl whitespace-nowrap transition-transform hover:scale-105 duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white">NovaDropz</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Premium products delivered to your door. We specialize in curating high-quality items from around the world.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors duration-200">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors duration-200">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors duration-200">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-accent-500">Shop</h5>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products/new-arrivals" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/best-sellers" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Best Sellers
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/deals" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Special Deals
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    All Categories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-accent-500">Information</h5>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-accent-500">Policies</h5>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping-policy" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-400">
                    <p className="mb-2">© {new Date().getFullYear()} NovaDropz. All rights reserved.</p>
                    <p className="text-xs text-neutral-500">Made with ❤️ for a better shopping experience</p>
                </div>
            </div>
        </footer>
    );
} 