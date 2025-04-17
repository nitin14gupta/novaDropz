import { Variants } from "framer-motion";

// Fade In animation
export const fadeIn = (
    direction: 'up' | 'down' | 'left' | 'right' = 'up',
    type: string = 'spring',
    delay: number = 0,
    duration: number = 0.5
): Variants => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut',
            },
        },
    };
};

// Zoom In animation
export const zoomIn = (delay: number = 0, duration: number = 0.5): Variants => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween',
                delay,
                duration,
                ease: 'easeOut',
            },
        },
    };
};

// Stagger Container for child elements
export const staggerContainer = (
    staggerChildren: number = 0.1,
    delayChildren: number = 0
): Variants => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
    };
};

// Slide In animation
export const slideIn = (
    direction: 'up' | 'down' | 'left' | 'right',
    type: string = 'spring',
    delay: number = 0,
    duration: number = 0.5
): Variants => {
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut',
            },
        },
    };
};

// Text variant for animated text
export const textVariant = (delay: number = 0): Variants => {
    return {
        hidden: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.25,
                delay,
            },
        },
    };
};

// Hero section animation variants
export const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
        }
    }
};

export const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Card hover animations
export const cardHoverVariants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

// Navbar animation variants
export const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

// Mobile menu animation variants
export const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

// Button animation variants
export const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
};

// Page transition variants
export const pageTransition = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
}; 