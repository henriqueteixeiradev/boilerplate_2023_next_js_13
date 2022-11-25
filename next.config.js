// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development'
  },
  experimental: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  }
}

module.exports = () => {
  const plugins = [withPWA]
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  })
  return config
}
