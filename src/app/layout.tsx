import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'SafeNet.AI',
  description: 'An AI-powered web platform to detect and prevent various online threats such as scam messages, phishing URLs, and deepfakes.',
  manifest: '/manifest.ts'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#09090B" />
      </head>
      <body className="font-body antialiased bg-background min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
