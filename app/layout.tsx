import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Ultimate Digital Mastery Blueprint | Transform Your Life Today",
  description:
    "Discover the proven system that has helped 10,000+ people build their dream digital business. Get instant access to the complete ebook and bonus materials.",
  keywords: "ebook, digital business, online income, blueprint, guide",
  openGraph: {
    title: "The Ultimate Digital Mastery Blueprint",
    description: "The proven system to build your dream digital business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">{children}</body>
    </html>
  );
}
