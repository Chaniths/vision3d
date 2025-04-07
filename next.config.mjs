/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // Redirects to /home
          permanent: true,       // This makes it a 301 (permanent) redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  
