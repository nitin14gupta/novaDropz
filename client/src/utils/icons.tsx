import React from 'react';
import {
    // Navigation icons
    Home,
    ShoppingCart,
    Search,
    User,
    Menu,
    X,
    Heart,
    Eye,
    ChevronRight,

    // Product icons
    Star,
    StarHalf,
    Tag,
    Package,

    // Category icons
    Smartphone,
    Home as HomeIcon,
    Shirt,
    Sparkles,
    Dumbbell,
    Watch,

    // Social icons
    Facebook,
    Instagram,
    Twitter,

    // Misc icons
    Mail,
    Phone,
    MapPin,
    Clock,
    Check,
    ArrowRight,
    Send,
    ExternalLink,
    ChevronDown,
    Info,
    AlertCircle,
    Calendar,
    type LucideIcon
} from 'lucide-react';

type IconProps = {
    name: string;
    className?: string;
    size?: number;
    strokeWidth?: number;
    color?: string;
};

const iconMap: Record<string, LucideIcon> = {
    // Navigation
    home: Home,
    cart: ShoppingCart,
    search: Search,
    user: User,
    menu: Menu,
    close: X,
    heart: Heart,
    eye: Eye,
    'chevron-right': ChevronRight,

    // Product
    star: Star,
    'star-half': StarHalf,
    tag: Tag,
    package: Package,

    // Category
    smartphone: Smartphone,
    'home-icon': HomeIcon,
    shirt: Shirt,
    sparkles: Sparkles,
    dumbbell: Dumbbell,
    watch: Watch,

    // Social
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,

    // Misc
    mail: Mail,
    phone: Phone,
    'map-pin': MapPin,
    clock: Clock,
    check: Check,
    'arrow-right': ArrowRight,
    send: Send,
    'external-link': ExternalLink,
    'chevron-down': ChevronDown,
    info: Info,
    'alert-circle': AlertCircle,
    calendar: Calendar,
};

export const Icon: React.FC<IconProps> = ({
    name,
    className = '',
    size = 24,
    strokeWidth = 2,
    color
}) => {
    const LucideIcon = iconMap[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <LucideIcon
            className={className}
            size={size}
            strokeWidth={strokeWidth}
            color={color}
        />
    );
};

export default Icon; 