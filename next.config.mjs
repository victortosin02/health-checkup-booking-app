/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    optimizeFonts: false,
    images: {
        domains: [
            // Uncomment and add any image domains you need
            // "user-images.githubusercontent.com",
            // "cdn.hashnode.com",
            // "github.com",
            // "drive.google.com",
            // "raw.githubusercontent.com",
        ],
    },
    // Remove fontLoaders if not in use
    // fontLoaders: [{
    //   loader: "@next/font/google",
    //   options: {
    //     subsets: ["latin"],
    //     weight: ["400", "500", "600", "700", "800"],
    //   },
    // }],
};

export default nextConfig;