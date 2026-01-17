import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Echo — Your Money, Alive",
  description:
    "Echo is a personal finance OS that turns your transaction data into clear next actions, monthly insights, and a shareable Money Wrapped story.",
  keywords: [
    "personal finance",
    "budget tracker",
    "money management",
    "financial insights",
    "money wrapped",
    "expense tracking",
  ],
  authors: [{ name: "Echo Team" }],
  icons: {
    icon: "/favicon-echo.png",
    apple: "/echo-icon.png",
  },
  openGraph: {
    title: "Echo — Your Money, Alive",
    description:
      "The personal finance OS that proactively turns your transaction data into clear next actions and monthly insights.",
    type: "website",
    locale: "en_US",
    siteName: "Echo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo — Your Money, Alive",
    description:
      "The personal finance OS that proactively turns your transaction data into clear next actions and monthly insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
