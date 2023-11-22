import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// components
import NavBar from './components/NavBar';

// css
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emmy Manning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={inter.className}>
        <main className='flex justify-between bg-[#0D1225] w-full min-h-screen'>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
