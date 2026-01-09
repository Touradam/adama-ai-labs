import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adamaailabs.com"),
  title: {
    default: "A-dama AI Labs | AI Education & Automation",
    template: "%s | A-dama AI Labs",
  },
  description:
    "Empowering students to learn AI and helping founders automate their businesses with custom AI agents, machine learning solutions, and Python automation.",
  keywords: [
    "AI education",
    "machine learning",
    "AI agents",
    "Python automation",
    "neural networks",
    "LLM agents",
    "AI courses",
    "business automation",
    "AI mentorship",
    "machine learning solutions",
  ],
  authors: [{ name: "A-dama AI Labs" }],
  creator: "A-dama AI Labs",
  publisher: "A-dama AI Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adamaailabs.com",
    siteName: "A-dama AI Labs",
    title: "A-dama AI Labs | AI Education & Automation",
    description:
      "Empowering students to learn AI and helping founders automate their businesses with custom AI agents, machine learning solutions, and Python automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "A-dama AI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A-dama AI Labs | AI Education & Automation",
    description:
      "Empowering students to learn AI and helping founders automate their businesses.",
    images: ["/og-image.png"],
    creator: "@adamaailabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
