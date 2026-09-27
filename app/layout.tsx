import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California, offering warm, grounded therapy for adults navigating anxiety, trauma, burnout, and stress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}