import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ProductCard from "@/components/product/ProductCard";

// Sample product data
const featuredProducts = [
    {
        id: "prod-1",
        title: "Premium Wireless Headphones",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
        category: "Electronics",
        rating: 4.8,
        discount: 15,
        isNew: true,
    },
    {
        id: "prod-2",
        title: "Smart Watch with Health Monitoring",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1799&auto=format&fit=crop",
        category: "Electronics",
        rating: 4.5,
        isNew: true,
    },
    {
        id: "prod-3",
        title: "Ultra-Slim Laptop Backpack",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=1964&auto=format&fit=crop",
        category: "Accessories",
        rating: 4.6,
        discount: 10,
    },
    {
        id: "prod-4",
        title: "Ergonomic Office Chair",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2942&auto=format&fit=crop",
        category: "Home & Office",
        rating: 4.7,
        discount: 20,
    },
    {
        id: "prod-5",
        title: "Premium Coffee Maker",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2070&auto=format&fit=crop",
        category: "Kitchen",
        rating: 4.9,
    },
    {
        id: "prod-6",
        title: "Fitness Tracker Band",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd756?q=80&w=2088&auto=format&fit=crop",
        category: "Fitness",
        rating: 4.4,
        discount: 25,
        isNew: true,
    },
    {
        id: "prod-7",
        title: "Designer Sunglasses",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop",
        category: "Fashion",
        rating: 4.3,
    },
    {
        id: "prod-8",
        title: "Wireless Phone Charger",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1926&auto=format&fit=crop",
        category: "Electronics",
        rating: 4.5,
        discount: 15,
    },
];

export default function Home() {
    return (
        <>
            <Hero />

            <FeaturedCategories />

            {/* Featured Products Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Discover our best-selling products and latest arrivals. High-quality items selected just for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-primary-800 py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
                        <p className="text-primary-100 mb-8">
                            Subscribe to our newsletter and be the first to know about new products, special offers, and exclusive deals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-button text-neutral-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            />
                            <button
                                type="button"
                                className="btn-accent px-6 py-3 whitespace-nowrap"
                            >
                                Subscribe Now
                            </button>
                        </div>

                        <p className="text-xs text-primary-200 mt-4">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
