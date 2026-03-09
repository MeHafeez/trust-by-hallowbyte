import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fatima Rahma Foundation — Healthcare, Education & Food for All",
    template: "%s | Fatima Rahma Foundation",
  },
  description:
    "Fatima Rahma Foundation provides healthcare, education, and food support to families in need. Donate today to save lives and uplift communities.",
  keywords: [
    "charity",
    "donation",
    "healthcare",
    "education",
    "food distribution",
    "NGO",
    "Fatima Rahma Foundation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
