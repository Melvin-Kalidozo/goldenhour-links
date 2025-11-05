import { Bebas_Neue } from "next/font/google";
import "./globals.css";

// Import the Bebas Neue font
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata = {
  title: "GoldenHour Production",
  description:
    "Photography, Videography, Graphics Design, Software Solutions, and Content Creation by GoldenHour Production.",
  keywords: [
    "GoldenHour Production",
    "Photography",
    "Videography",
    "Graphics Design",
    "Software Development",
    "Content Creation",
  ],
  authors: [{ name: "GoldenHour Production" }],
  openGraph: {
    title: "GoldenHour Production",
    description:
      "Creative studio specializing in photography, videography, design, and digital solutions.",
    url: "https://goldenhour-links.vercel.app/",
    siteName: "GoldenHour Production",
    images: [
      {
        url: "/Logo2.png",
        width: 800,
        height: 600,
        alt: "GoldenHour Production Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldenHour Production",
    description:
      "Photography, Videography, Design, Software & Content Creation.",
    images: ["/Logo2.png"],
  },
  icons: {
    icon: "/Logo2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
