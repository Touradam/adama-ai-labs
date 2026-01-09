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
    default: "Adama AI Lab | 2-Weekend AI Education Program",
    template: "%s | Adama AI Lab",
  },
  description:
    "Understand the machine before you trust it. A 2-weekend AI education program teaching you to understand AI, build tools, and keep control. First bootcamp FREE!",
  keywords: [
    "AI education",
    "AI bootcamp",
    "learn AI",
    "AI weekend program",
    "AI fundamentals",
    "build AI tools",
    "AI literacy",
    "ethical AI",
    "AI training",
    "AI course",
    "free AI bootcamp",
    "AI workshop",
  ],
  authors: [{ name: "Adama AI Lab" }],
  creator: "Adama AI Lab",
  publisher: "Adama AI Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adamaailabs.com",
    siteName: "Adama AI Lab",
    title: "Adama AI Lab | 2-Weekend AI Education Program",
    description:
      "Understand the machine before you trust it. Learn AI, build tools, keep control. First bootcamp FREE!",
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
    title: "Adama AI Lab | 2-Weekend AI Education Program",
    description:
      "Understand the machine before you trust it. Use AI. Don't let it use you. First bootcamp FREE!",
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#14B8A6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#14B8A6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
