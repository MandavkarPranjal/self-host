import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vercel.com',
                port: '',
                pathname: '/**',
            }
        ],
        unoptimized: true,
    }
};

export default withMDX(config);
