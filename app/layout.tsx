import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yagnik Gohil | Portfolio",
  description:
    "Yagnik Gohil — Backend-focused software engineer skilled in Go, JavaScript, SQL, and more.",
  keywords: [
    "Yagnik Gohil",
    "Software Engineer",
    "Backend Developer",
    "Go Developer",
    "JavaScript",
    "SQL",
    "Portfolio",
  ],
  authors: [{ name: "Yagnik Gohil", url: "https://yagnik.dev" }],
  openGraph: {
    title: "Yagnik Gohil | Portfolio",
    description: "Software engineer skilled in Go, JavaScript, SQL, and more.",
    url: "https://yagnik.dev",
    siteName: "Yagnik Gohil",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Yagnik Gohil — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yagnik Gohil | Portfolio",
    description: "Software engineer skilled in Go, JavaScript, SQL, and more.",
    creator: "@yagnik_19",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "https://yagnik.dev",
  },
  metadataBase: new URL("https://yagnik.dev"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Charset and viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-3475130815736394" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475130815736394"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
