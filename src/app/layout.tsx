import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/providers/Providers";
import JsonLd from "@/components/Shared/Seo/JsonLd";
import { siteMetadata } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  fallback: ["system-ui", "Roboto", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
