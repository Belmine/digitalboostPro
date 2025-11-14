import { i } from "framer-motion/client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"
import Header from '@/componentstwo/Header';
import Footer from '@/componentstwo/Footer';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Digital Bosst Pro - Agence Marketing Digital Performance",
  description: "Boostez votre croissance avec notre agence de marketing digital axée sur la performance. Stratégies personnalisées, résultats mesurables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      >
        <Header />
        {children}
<div id="contact">
        <Footer />
      </div>      </body>
    </html>
  );
}

