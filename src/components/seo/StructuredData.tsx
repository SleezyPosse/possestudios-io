export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Posse Studios",
    "description": "Cutting-edge creative studio pushing the boundaries of digital innovation. From AI-powered 3D generation with Skulpty to immersive gaming experiences with Want3d, and premium digital art marketplace Dreambay.",
    "url": "https://posse-studios.vercel.app",
    "logo": "https://posse-studios.vercel.app/logo.png",
    "sameAs": [
      "https://twitter.com/posse_studios",
      "https://linkedin.com/company/posse-studios",
      "https://github.com/posse-studios"
    ],
    "foundingDate": "2024",
    "industry": "Technology",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Posse Studios Products",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Skulpty",
          "description": "AI-Powered 3D Asset Generation - Transform your creative ideas into professional 3D assets with simple text prompts.",
          "category": "Software",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Product",
          "name": "Want3d",
          "description": "Next-Generation 3D Shooter Experience - Immerse yourself in a cutting-edge 3D shooter with stunning visuals and fluid gameplay.",
          "category": "Video Game",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Product",
          "name": "Dreambay",
          "description": "Premium Digital Art Marketplace - Connect artists and collectors in a vibrant digital marketplace for the future of art.",
          "category": "Marketplace",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        }
      ]
    },
    "knowsAbout": [
      "AI 3D generation",
      "3D modeling",
      "Game development",
      "Digital art",
      "Creative technology",
      "Machine learning",
      "Computer graphics"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
