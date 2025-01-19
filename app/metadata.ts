import type { Metadata } from 'next';

const defaultKeywords = [
  'mehendi classes',
  'online mehendi course',
  'learn mehendi art',
  'mehendi tutorial',
  'Tanisha Vijay',
  'bridal mehendi',
  'mehandy.in',
  'mehendi designs',
  'henna art',
  'mehendi artist',
  'learn mehendi online',
  'best mehendi course',
  'mehendi training',
  'professional mehendi',
  'Indian mehendi',
];

const defaultDescription = 'Learn Mehendi from Tanisha Vijay, a renowned artist with 550k+ Instagram followers. Join our courses and master the art of Mehendi. Professional online courses, expert tutorials, and a supportive community.';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Mehandy.in - Get Handy with Skills | Learn Mehendi Art Online',
    template: '%s | Mehandy.in',
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: 'Tanisha Vijay' }],
  creator: 'Tanisha Vijay',
  metadataBase: new URL('https://mehandy.in'),
  openGraph: {
    type: 'website',
    siteName: 'Mehandy.in',
    title: 'Learn Mehendi Art Online with Tanisha Vijay',
    description: defaultDescription,
    images: [
      {
        url: '/tanisha.avif',
        width: 1200,
        height: 630,
        alt: 'Mehandy.in - Learn Mehendi Art Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Mehendi Art Online with Tanisha Vijay',
    description: defaultDescription,
    images: ['/tanisha.avif'],
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
    google: 'your-google-site-verification-code',
  },
}; 