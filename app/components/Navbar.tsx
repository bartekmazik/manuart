"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function isHome(path: string) {
  if (path === "/") {
    return "absolute top-0 left-0 z-50 pt-6 px-10";
  } else {
    return "";
  }
}

const menuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

function Dropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-background p-10 flex flex-col gap-8 text-2xl font-bold text-primary"
    >
      <button
        className="text-right text-3xl self-end text-primarydark"
        onClick={onClose}
      >
        x
      </button>
      <Link href="/About" onClick={onClose}>
        Wydarzenie
      </Link>
      <Link href="/About" onClick={onClose}>
        O nas
      </Link>
      <Link href="/About" onClick={onClose}>
        Partnerzy
      </Link>
      <Link href="/About" onClick={onClose}>
        Kontakt
      </Link>
    </motion.div>
  );
}
const Navbar = () => {
  const route = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isHome(
        route
      )} border w-full flex flex-row items-center justify-between sm:justify-start sm:gap-10`}
    >
      <Link href="/" className="relative w-20 h-20">
        <Image src="/logo.png" alt="logo" fill />
      </Link>
      <div className="hidden sm:flex flex-row items-center gap-8 justify-between font-bold hover:text-primarydark text-xl text-primary">
        <Link href={"/About"}>Wydarzenie</Link>
        <Link href={"/About"}>O nas</Link>
        <Link href={"/About"}>Partnerzy</Link>
        <Link href={"/About"}>Kontakt</Link>
      </div>
      <button
        className="sm:hidden p-4 self-start "
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>
      <AnimatePresence>
        {isOpen && <Dropdown onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
