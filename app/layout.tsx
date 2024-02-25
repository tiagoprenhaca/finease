import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({ 
  subsets: ["latin"] ,
  weight: ["400", "700"],
  variable: "--font-titillium",
});

export const metadata: Metadata = {
  title: "FinEase",
  description: "Orçamentos, gastos e objetivos em um só lugar, controle suas finanças com facilidade gratuitamente!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titillium.variable} font-sans`}>{children}</body>
    </html>
  );
}
