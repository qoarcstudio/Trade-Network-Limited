import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tradeCommerce Landing Page",
  description: "Premium tradeCommerce landing page design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>{children}</body>
    </html>
  );
}
