import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: {
    default: "whitstable.shop - Your Guide to Whitstable",
    template: "%s | whitstable.shop",
  },
  description:
    "Discover the best shops, restaurants, cafes and local businesses in Whitstable. Community-driven directory with photo competitions, local tips, and more.",
  keywords: [
    "Whitstable",
    "shops",
    "restaurants",
    "cafes",
    "local businesses",
    "Kent",
    "seaside",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "whitstable.shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-oyster-50 text-oyster-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
