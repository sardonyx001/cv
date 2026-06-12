import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export const metadata: Metadata = {
  title: "Jamel Eddine Lassoued",
  description: "Full Stack Engineer based in Tokyo, Japan.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Inline script: synchronously redirect Japanese-language browsers to /jp
// before React hydrates — eliminates the flash seen with a useEffect approach.
const localeScript = `
try {
  if (!sessionStorage.getItem('lr')) {
    sessionStorage.setItem('lr', '1');
    var lang = navigator.language || (navigator.languages && navigator.languages[0]) || '';
    if (lang.startsWith('ja') && location.pathname === '/') location.replace('/jp');
  }
} catch(e) {}
`.trim();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="m-3 flex items-end justify-end gap-2 print:hidden">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
