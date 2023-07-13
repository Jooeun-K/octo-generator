/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/talk',
        permanent: false,  
      }
    ]
  }
}

module.exports = nextConfig
