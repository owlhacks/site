import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/providers/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  fallback: ["system-ui", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  title: "OwlHacks 2024",
  description: "Temple's Student Run Hackathon",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <a id="mlh-trust-badge"
        style = {{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          right: "25px",
          top: "0",
          width: "15%",
          zIndex: 10000
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" target="_blank">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2025 Hackathon Season" style={{width:"100%"}}/>
      </a>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
