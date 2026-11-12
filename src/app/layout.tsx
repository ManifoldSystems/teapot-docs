import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

export const metadata: Metadata = {
  title: { default: 'Teapot Docs', template: '%s | Teapot Docs' },
  description: 'Guides for Teapot, a personal mesh for your devices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><RootProvider>{children}</RootProvider></body>
    </html>
  );
}
