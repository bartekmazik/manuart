import type { Metadata } from "next";
import localFont from "next/font/local";
import { NavbarProvider } from "./components/Navbar";
import "./globals.css";
import { FooterProvider } from "./components/Footer";

const Now = localFont({
  src: "../public/fonts/now.otf",
});

export const metadata: Metadata = {
  title: {
    default: "Manuart Festiwal",
    template: "%s - Manuart Festiwal",
  },
  description: "Katowicki festiwal w stylu handmade dla fanów rękodzieła",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Now.className}     antialiased `}>
        <NavbarProvider />
        <div className="px-4 sm:px-8 min-h-screen">{children}</div>
        <FooterProvider />
      </body>
    </html>
  );
}
