import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samarqand Restaurant Wien | Authentische Usbekische Küche',
  description: 'Erleben Sie authentische usbekische Küche im Herzen von Wien. Traditionelle Gerichte, herzliche Gastfreundschaft und die Aromen der alten Seidenstraße.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
