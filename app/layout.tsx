import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftLabor — Operations Agent",
  description: "3PL operations automation demo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
