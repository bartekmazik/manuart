import type { Metadata } from "next";
import localFont from "next/font/local";
import { NavbarProvider } from "./components/Navbar";
import "./globals.css";
import { FooterProvider } from "./components/Footer";

const Now = localFont({
  src: "../public/fonts/now.otf",
});

export const metadata: Metadata = {
  title: "Manuart Festival",
  description: "Festiwal w stylu handmade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Now.className}    antialiased `}>
        <NavbarProvider />
        <div className="mx-8 min-h-screen">{children}</div>
        <FooterProvider />
      </body>
    </html>
  );
}
