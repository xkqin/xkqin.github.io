import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  metadataBase: new URL('https://xkqin.github.io'),
  title: 'Xukun Qin · Embodied AI Researcher',
  description:
    'Xukun Qin at Shanghai AI Laboratory. AI, embodied intelligence, VLA, VLN, and world models.',
  openGraph: {
    title: 'Xukun Qin · Embodied AI Researcher',
    description:
      'Embodied AI · VLA / VLN · World Models',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Xukun Qin — Embodied AI, Active Perception, Autonomous Camera Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xukun Qin · Embodied AI Researcher',
    description:
      'Embodied AI · VLA / VLN · World Models',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
