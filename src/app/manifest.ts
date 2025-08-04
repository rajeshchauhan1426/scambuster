
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SafeNet.AI',
    short_name: 'SafeNet.AI',
    description: 'An AI-powered web platform to detect and prevent various online threats such as scam messages, phishing URLs, and deepfakes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090B',
    theme_color: '#09090B',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
