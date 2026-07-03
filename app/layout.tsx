import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smile Foundation | Tarapur",
  description:
    "A hopeful nonprofit page for Smile Foundation, supporting special-needs children in Tarapur, Maharashtra.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
