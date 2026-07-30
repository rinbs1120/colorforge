import type { Metadata } from 'next';
import Script from 'next/script';
import { ClerkProvider } from '@clerk/nextjs';
import { CursorTrail } from '@/components/cursor-trail';
import { RefHandler } from '@/components/ref-handler';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-4R54BPGTYY';

export const metadata: Metadata = {
  verification: { other: { "p:domain_verify": "88a5b8cbaf6eb49fa1682d7ee76f0525" } },
  title: {
    default: 'PixCraftX — AI Coloring Book Engine for KDP & Etsy',
    template: '%s | PixCraftX',
  },
  description:
    'AI-powered coloring book generator for KDP & Etsy sellers. Batch create pages, auto-layout, export print-ready PDF — commercial license included.',
  keywords: [
    'coloring pages',
    'AI coloring',
    'KDP coloring book',
    'Etsy coloring pages',
    'coloring book PDF',
    'printable coloring pages',
    'coloring page generator',
    'batch coloring page generator',
    'print-ready coloring book',
  ],
  authors: [{ name: 'PixCraftX Team', url: 'https://pixcraftx.com' }],
  generator: 'PixCraftX',
  openGraph: {
    title: 'PixCraftX — AI Coloring Book Engine for KDP & Etsy',
    description:
      'AI-powered coloring book generator for KDP & Etsy sellers. Batch create pages, auto-layout, export print-ready PDF — commercial license included.',
    url: 'https://pixcraftx.com',
    siteName: 'PixCraftX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixCraftX — AI Coloring Book Engine for KDP & Etsy',
    description:
      'AI-powered coloring book generator for KDP & Etsy sellers. Batch create pages, auto-layout, export print-ready PDF — commercial license included.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </head>
        <body className="antialiased">
          {children}
          <CursorTrail />
          <RefHandler />
        </body>
      </html>
    </ClerkProvider>
  );
}
