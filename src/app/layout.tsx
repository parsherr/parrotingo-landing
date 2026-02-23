import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Parrotingo — Learn Languages the Fun Way",
  description:
    "Parrotingo is a fun and interactive language learning app. Start speaking a new language with engaging lessons, smart repetition, and gamification.",
  keywords: [
    "language learning",
    "learn languages",
    "parrotingo",
    "language app",
    "vocabulary",
    "fluency",
  ],
  openGraph: {
    title: "Parrotingo — Learn Languages the Fun Way",
    description:
      "Start speaking a new language with Parrotingo's engaging lessons.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-[family-name:var(--font-nunito)]">
        {children}
      </body>
    </html>
  );
}
