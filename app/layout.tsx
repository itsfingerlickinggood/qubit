import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FaviconIcon from "./favicon.ico"; // Import your favicon.ico file

<Analytics /> && <SpeedInsights />;
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Qubit",
  description: "entropy-com-x",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* Render your favicon.ico */}
        <link rel="icon" href={FaviconIcon.src} type="image/x-icon" />
      </head>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
