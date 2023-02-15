/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "31375",
                pathname: "/photo/**",
            },
        ],
        unoptimized: true,
    },
};

module.exports = nextConfig;
