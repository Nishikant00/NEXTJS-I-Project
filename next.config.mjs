/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'png.pngtree.com',
            }
        ]
    },
    experimental: {
		serverComponentsExternalPackages: ["@node-rs/argon2"]
	}
};

export default nextConfig;
