"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur shadow-sm z-50">
      <div className="max-w-6xl mx-auto relative flex items-center justify-between py-3 px-4 md:px-6 w-full lg:h-24">
        {/* Left: Logo */}
        <div className="flex md:flex-1 justify-start items-center">
          <Link href="/" className="flex items-center md:gap-4 z-10 shrink-0">
          <Image
            src="/logo-icon.png"
            alt="Premier Icon"
            width={112}
            height={112}
            className="object-contain w-16 h-16 md:w-28 md:h-28 shrink-0"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:left-auto md:top-auto flex flex-col items-center justify-center text-center leading-none">
            <span className="text-lg md:text-2xl font-extrabold tracking-widest leading-none text-gray-900">
              PREMIER
            </span>
            <span className="text-[9px] md:text-xs font-bold text-brand-brown tracking-[0.2em] uppercase mt-1">
              — DECK & PORCH —
            </span>
          </div>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 font-medium text-slate-600">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-brand-brown transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA & Mobile Menu Button */}
        <div className="flex md:flex-1 justify-end items-center">
          <a
            href="#contact"
            className="hidden md:inline-block bg-brand-brown hover:bg-brand-brown-dark text-white px-7 py-3 rounded-lg font-semibold shadow transition-all duration-200 hover:scale-105"
          >
            Free Estimate
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 pb-6 space-y-4 shadow-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-brand-brown transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-brand-brown text-white text-center px-6 py-3 rounded-lg font-semibold"
          >
            Free Estimate
          </a>
        </div>
      )}
    </header>
  );
}
