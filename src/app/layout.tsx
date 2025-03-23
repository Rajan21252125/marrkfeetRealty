import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Improved SEO Metadata
export const metadata: Metadata = {
  title: "Markfeet Realty - Find Your Dream Property",
  description: "Discover the best real estate listings with Markfeet Realty. Buy, sell, or rent properties with ease.",
  keywords: ["real estate", "property", "homes for sale", "rent", "buy house"],
  authors: [{ name: "Markfeet Realty Team", url: "https://markfeetrealty.com" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Markfeet Realty - Find Your Dream Property",
    description: "Discover the best real estate listings with Markfeet Realty. Buy, sell, or rent properties with ease.",
    type: "website",
    url: "https://markfeetrealty.com",
    images: [
      {
        url: "logo.png",
        width: 1200,
        height: 630,
        alt: "Markfeet Realty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Markfeet Realty - Find Your Dream Property",
    description: "Discover the best real estate listings with Markfeet Realty.",
    images: ["https://markfeetrealty.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preload Fonts for Performance */}
        <link rel="preload" href="/fonts/Geist.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GeistMono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Markfeet Realty",
              url: "https://markfeetrealty.com",
              logo: "https://markfeetrealty.com/logo.png",
              sameAs: [
                "https://facebook.com/markfeetrealty",
                "https://twitter.com/markfeetrealty",
                "https://linkedin.com/company/markfeetrealty",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9876543210",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
