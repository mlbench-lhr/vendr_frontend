import './globals.css';
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'VendorTracker Legal',
    template: '%s | VendorTracker',
  },
  description: 'VendorTracker legal pages including Privacy Policy and Terms & Conditions.',
  authors: [{ name: 'VendorTracker' }],
  openGraph: {
    title: 'VendorTracker Legal',
    description: 'Privacy Policy and Terms & Conditions for the VendorTracker mobile application.',
    url: 'http://localhost:3000',
    siteName: 'VendorTracker',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#226BF7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-white/10 bg-black">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt="VendorTracker logo" width={80} height={20} priority />
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link className="link" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="link" href="/terms">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t border-white/10 mt-12">
          <div className="container py-6 text-sm text-gray-400">
            © {new Date().getFullYear()} VendorTracker. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
