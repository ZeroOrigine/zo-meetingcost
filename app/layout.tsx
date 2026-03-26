import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MeetingCost — Measure What Your Meetings Create',
  description: 'Not every meeting is a waste. But how do you know which ones matter? Calculate meeting costs, score meeting ROI, and track what your meetings actually produce.',
  openGraph: {
    title: 'MeetingCost — Measure What Your Meetings Create',
    description: 'Calculate meeting costs, score meeting ROI, and track what your meetings actually produce.',
    url: 'https://meetingcost.zeroorigine.com',
    siteName: 'MeetingCost',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
