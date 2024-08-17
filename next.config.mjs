/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio'],
        typescript: {
            ignoreBuildErrors: true,
        } // Corrected the domain here
    },
};

export default nextConfig;
