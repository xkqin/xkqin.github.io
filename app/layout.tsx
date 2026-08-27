import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://xkqin.github.io'),
  title: 'Xukun Qin · Embodied AI Researcher',
  description:
    'Academic homepage of Xukun Qin, researching embodied AI, active perception, UAV vision-language navigation, and autonomous camera agents.',
  openGraph: {
    title: 'Xukun Qin · Embodied AI Researcher',
    description:
      'Embodied AI · Active Perception · Autonomous Camera Agents',
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
      'Embodied AI · Active Perception · Autonomous Camera Agents',
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
