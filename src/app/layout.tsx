import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Work_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import { MUIThemeProvider } from '@/components/MUIThemeProvider';
import { QuizProvider } from '@/context/QuizContext';
import { MusicProvider } from '@/context/MusicContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});
const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: "MEvie Valentine's Day Quiz",
  description: "Let's see who really knows ball in a mecha romantic mecha chaotic game of quizzical fun :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${workSans.variable} ${greatVibes.variable}`}>
        <MusicProvider>
          <MUIThemeProvider>
            <QuizProvider>{children}</QuizProvider>
          </MUIThemeProvider>
        </MusicProvider>
      </body>
    </html>
  );
}
