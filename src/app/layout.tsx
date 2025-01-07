import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import "react-loading-skeleton/dist/skeleton.css";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  // Optional: you can specify custom weights
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nattypay",
  description:
    "Experience seamless financial transactions with Nattypay, a local and global leading financial service provider, We make the best and easiest banking for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <NextTopLoader color="#D4B139" showSpinner={false} />
          <main className="w-full overflow-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
