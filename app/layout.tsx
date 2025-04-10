import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

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
      <body className={`${Now.className} pt-4  antialiased overflow-x-hidden`}>
        <Navbar />
        <div className="mx-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
