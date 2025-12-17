import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nachiket Bejagamwar | Full Stack Developer",
  description:
    "Portfolio of Nachiket Bejagamwar — Full Stack Developer skilled in Next.js, React, Tailwind CSS, MongoDB, Express.js, and building scalable, high-performance web applications.",
  keywords: [
    "Nachiket Bejagamwar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio"
  ],
  authors: [{ name: "Nachiket Bejagamwar" }],
  creator: "Nachiket Bejagamwar",
  publisher: "Nachiket Bejagamwar",
  metadataBase: new URL("https://nachiket-bejagamwar.vercel.app"),
  openGraph: {
    title: "Nachiket Bejagamwar | Full Stack Developer",
    description:
      "Showcasing projects, experience, and skills in modern web development — MERN stack, Next.js, Tailwind CSS, MongoDB, and more.",
    url: "https://nachiket-bejagamwar.vercel.app",
    siteName: "Nachiket Bejagamwar | Portfolio",
    type: "website",
  },
};

// Define the props type for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" type="image/png" href="favicon.png" /> */}
        {/* Add viewport meta tag for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <Toaster 
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}