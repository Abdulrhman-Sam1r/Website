/**
 * WanderNile - Global Configuration
 */

// Global site configuration
const siteConfig = {
    siteName: 'WanderNile',
    siteDescription: 'Experience the magic of Egypt with our carefully crafted travel experiences',
    siteUrl: 'https://wandernile.com',
    contactEmail: 'info@wandernile.com',
    contactPhone: '+1 (234) 567-890',
    contactWhatsapp: '1234567890',
    socialMedia: {
        facebook: 'https://facebook.com/wandernile',
        instagram: 'https://instagram.com/wandernile',
        twitter: 'https://twitter.com/wandernile',
        youtube: 'https://youtube.com/wandernile'
    },
    copyrightYear: '2025'
};

// Tailwind configuration
const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                primary: '#0e7490',
                secondary: '#0369a1',
            }
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        }
    }
};

// AOS configuration
const aosConfig = {
    duration: 800,
    once: true,
    offset: 100
};

// Export configurations
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        siteConfig,
        tailwindConfig,
        aosConfig
    };
} 