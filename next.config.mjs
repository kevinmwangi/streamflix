/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
    sassOptions: {
        includePaths: [path.join('@/*', 'scss')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
                pathname: '/images/M/**',
            },
        ],
    },
};

export default nextConfig;
