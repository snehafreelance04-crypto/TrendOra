import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import trendoraFavicon from "./assets/trendora-favicon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrendOra",
  icons: {
    icon: trendoraFavicon.src,
  },
  description: "Your Smart Shopping Destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href={trendoraFavicon.src}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
