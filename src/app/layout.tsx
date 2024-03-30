import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./_providers/Providers";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/font/Satoshi-Variable.woff2",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "OwlHacks 2024",
  description: "Temple's Student Run Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
