export const products = {
  skulpty: {
    name: 'Skulpty',
    subtitle: 'AI-Powered 3D Asset Generation',
    description: 'Transform your creative ideas into professional 3D assets with simple text prompts. Skulpty leverages advanced AI to generate high-quality, game-ready 3D models in seconds, revolutionizing the creative workflow.',
    features: ['Text-to-3D generation', 'Game-ready optimization', 'Multiple export formats', 'Real-time preview']
  },
  want3d: {
    name: 'Want3d',
    subtitle: 'Next-Generation 3D Shooter Experience',
    description: 'Immerse yourself in a cutting-edge 3D shooter that combines stunning visuals, fluid gameplay, and innovative mechanics. Want3d sets a new standard for competitive gaming with its advanced graphics engine and responsive controls.',
    features: ['Advanced physics engine', 'Cross-platform multiplayer', 'Customizable weapons', 'Competitive ranking system']
  },
  dreambay: {
    name: 'Dreambay',
    subtitle: 'Premium Digital Art Marketplace',
    description: 'Connect artists and collectors in a vibrant digital marketplace designed for the future of art. Dreambay provides powerful tools for creators to showcase and monetize their digital masterpieces while offering collectors a curated experience.',
    features: ['Curated art collections', 'Creator monetization tools', 'Advanced search & discovery', 'Secure transactions']
  }
} as const;

export type ProductKey = keyof typeof products;
export type Product = typeof products[ProductKey];
