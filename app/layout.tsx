import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// navigation
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Local Taste",
  description: "Vietnam Culinary Delight Expedition",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="w-full flex-none">
          <Navigation />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </body>
    </html>
  );
}
