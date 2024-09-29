import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// material ui integration
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

// Header/Footer
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";


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
        <AppRouterCacheProvider>
          <div className="w-full flex-none">
            <Navigation />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-2">{children}</div>
          <div className="w-full flex-none">
            <Footer />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
