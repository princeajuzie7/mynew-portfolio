import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Ajuzie - Fullstack Engineer",
  description:
    "Welcome to Prince Ajuzie Portfolio A Multifaceted Solopreneur | SAAS Builder in Public 🚀 | Technical Writer 📝 | Shaping tech solutions and sharing the journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
