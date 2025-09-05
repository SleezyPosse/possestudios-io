import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Posse Studios - AI-Powered Creative Innovation',
    short_name: 'Posse Studios',
    description: 'Cutting-edge creative studio pushing the boundaries of digital innovation. From AI-powered 3D generation with Skulpty to immersive gaming experiences with Want3d, and premium digital art marketplace Dreambay.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'games', 'productivity', 'business'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
