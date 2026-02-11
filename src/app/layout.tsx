import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'KI Compliance Dominator 2026',
  description: 'SaaS für EU AI Act & ISO 42001 – automatisierte Compliance-Checks, Risk Graph 3D, agentische Workflows.',
  openGraph: { title: 'KI Compliance Dominator 2026', images: ['/og-image.jpg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="container py-10">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
