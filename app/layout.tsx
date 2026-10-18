import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/src/config/site';
import { CompareProvider } from '@/src/context/CompareContext';
import { CartProvider } from '@/src/context/CartContext';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import CompareBar from '@/src/components/CompareBar';
import QuickAccess from '@/src/components/QuickAccess';
import ReviewPopup from '@/src/components/ReviewPopup';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: SITE.primaryColor,
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Looking for mobility scooters for sale? Find the best electric mobility scooter Australia range. Buy mobility scooter online including folding mobility scooter Australia models. 100% Pedestrian Legal & GST-Free.',
  metadataBase: new URL(`https://${SITE.domain}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
      default: SITE.name,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.tagline,
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
    images: [
      {
        url: `https://${SITE.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.tagline,
    images: [`https://${SITE.domain}/og-image.jpg`],
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
  keywords: [
    'Mobility scooters for sale',
    'Electric mobility scooter Australia',
    'Folding mobility scooter Australia',
    'buy mobility scooter online',
    'heavy-duty mobility scooter',
    'all-terrain mobility scooter',
    'medical mobility equipment'
  ],
  other: {
    'og:updated_time': new Date().toISOString(),
    'google-site-verification': SITE.gscVerification,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.locale.split('-')[0]}>
      <head>
        <script src="/js/webmcp.js" defer></script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <CartProvider>
          <CompareProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:shadow-lg">
            Skip to main content
          </a>
          <Nav />
          <main id="main">
            {children}
          </main>
          <Footer />
          <CompareBar />
          <QuickAccess />
          <ReviewPopup />
        </CompareProvider>
        </CartProvider>
      </body>
    </html>
  );
}
