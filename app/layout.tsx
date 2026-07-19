import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/context/I18nContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StadiumOS AI — FIFA World Cup 2026",
    template: "%s | StadiumOS AI",
  },
  description:
    "GenAI-powered stadium operations platform for FIFA World Cup 2026. Real-time crowd intelligence, smart navigation, AI copilot, multilingual assistance, and mission-control operations dashboards.",
  keywords: [
    "FIFA World Cup 2026",
    "StadiumOS",
    "AI stadium",
    "smart stadium",
    "crowd management",
    "multilingual",
    "accessibility",
    "smart navigation",
  ],
  authors: [{ name: "StadiumOS AI" }],
  openGraph: {
    title: "StadiumOS AI — FIFA World Cup 2026",
    description:
      "GenAI-powered stadium operations for the FIFA World Cup 2026. Smart navigation, crowd intelligence, and multilingual AI assistance.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
