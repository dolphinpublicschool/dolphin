import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingEnquiry from "@/components/floating-enquiry";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dolphin Public School Faridabad | CBSE School in Old Faridabad",
    template: "%s | Dolphin Public School Faridabad",
  },

  description:
    "Dolphin Public School is a reputed CBSE affiliated school in Old Faridabad, offering quality education, experienced faculty, modern infrastructure, and holistic student development.",

  keywords: [
    "Dolphin Public School",
    "CBSE School in Faridabad",
    "Best school in Old Faridabad",
    "CBSE schools near me",
    "Top schools in Faridabad",
    "English medium school Faridabad",
    "CBSE affiliated school Haryana",
  ],

  authors: [{ name: "Dolphin Public School" }],
  creator: "Dolphin Public School",
  publisher: "Dolphin Public School",

  // metadataBase: new URL("https://www.dolphinpublicschool.in"),

  // alternates: {
  //   canonical: "https://www.dolphinpublicschool.in",
  // },

  openGraph: {
    title: "Dolphin Public School Faridabad | CBSE School",
    description:
      "CBSE affiliated school in Old Faridabad providing quality education with modern facilities and experienced faculty.",
    // url: "https://www.dolphinpublicschool.in",
    siteName: "Dolphin Public School",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dolphin Public School Faridabad",
    description:
      "A trusted CBSE school in Old Faridabad focused on academic excellence and overall development.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <FloatingEnquiry />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
