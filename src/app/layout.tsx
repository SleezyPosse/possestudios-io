import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Posse Studios - AI-Powered Creative Innovation",
    template: "%s | Posse Studios"
  },
  description: "Cutting-edge creative studio pushing the boundaries of digital innovation. From AI-powered 3D generation with Skulpty to immersive gaming experiences with Want3d, and premium digital art marketplace Dreambay.",
  keywords: [
    "AI 3D generation",
    "3D assets",
    "game development",
    "digital art marketplace",
    "creative studio",
    "Skulpty",
    "Want3d",
    "Dreambay",
    "text-to-3D",
    "3D shooter game",
    "digital art",
    "creative tools",
    "gaming innovation",
    "AI technology",
    "3D modeling"
  ],
  authors: [{ name: "Posse Studios" }],
  creator: "Posse Studios",
  publisher: "Posse Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://possestudios.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://possestudios.io',
    title: 'Posse Studios - AI-Powered Creative Innovation',
    description: 'Cutting-edge creative studio pushing the boundaries of digital innovation. From AI-powered 3D generation with Skulpty to immersive gaming experiences with Want3d, and premium digital art marketplace Dreambay.',
    siteName: 'Posse Studios',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Posse Studios - AI-Powered Creative Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Posse Studios - AI-Powered Creative Innovation',
    description: 'Cutting-edge creative studio pushing the boundaries of digital innovation. From AI-powered 3D generation with Skulpty to immersive gaming experiences with Want3d, and premium digital art marketplace Dreambay.',
    images: ['/twitter-image.jpg'],
    creator: '@posse_studios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
