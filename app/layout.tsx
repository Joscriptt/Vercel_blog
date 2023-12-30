import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js App Dir Blog",
  description:
    "This is a blog app built with Next.js 13 app folder and Contentlayer. It is a great example of how to use Next.js 13 app folder and Contentlayer together.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon.ico",
        sizes: "16x16",
      },
      {
        url: "/favicon.ico",
        sizes: "64x64",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
