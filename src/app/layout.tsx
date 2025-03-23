import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/toaster"
import StructuredData from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.princeajuzie.me"),
  title: {
    default: "Prince Ajuzie | Software Engineer & SAAS Builder",
    template: "%s | Prince Ajuzie",
  },
  description:
    "Software engineer specializing in building exceptional digital experiences with a focus on performance and scalability.",
  keywords: [
    "Prince Ajuzie",
    "Software Engineer",
    "Full Stack Developer",
    "SAAS Builder",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Prince Ajuzie", url: "https://www.princeajuzie.me" }],
  creator: "Prince Ajuzie",
  publisher: "Prince Ajuzie",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.princeajuzie.me",
    title: "Prince Ajuzie | Software Engineer & SAAS Builder",
    description:
      "Software engineer specializing in building exceptional digital experiences with a focus on performance and scalability.",
    siteName: "Prince Ajuzie Portfolio",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Prince Ajuzie - Software Engineer & SAAS Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Ajuzie | Software Engineer & SAAS Builder",
    description:
      "Software engineer specializing in building exceptional digital experiences with a focus on performance and scalability.",
    images: ["/ogimage.png"],
    creator: "@princeajuzie",
    site: "@princeajuzie",
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
  alternates: {
    canonical: "https://www.princeajuzie.me",
  },
  verification: {
    google: "googlebfc5ac9c8f942c97",
  },
  category: "Portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="BxupqRmfA6MnqmUegG4C2j7S05ByaiE3aR1am9SnZdY"
        />
        <meta name="application-name" content="Prince Ajuzie Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Prince Ajuzie" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-background focus:z-[100]"
          >
            Skip to main content
          </a>
          <StructuredData />
          <main id="main-content">{children}</main>
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

