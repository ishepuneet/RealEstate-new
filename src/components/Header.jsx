import React, { useState } from "react";
import { Link } from "react-router-dom";

function Arrow({ small = false }) {
  return <span className={small ? "text-sm" : "text-lg"}>↗</span>;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#050c1a]/95 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between lg:min-h-[88px]">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 sm:gap-3"
        >
          <span className="relative grid h-9 w-9 place-items-center text-[#d6b273] sm:h-11 sm:w-11">
            <span className="absolute left-1 top-0 h-8 w-px bg-[#d6b273] sm:h-10" />
            <span className="absolute left-4.5 top-0 h-8 w-px bg-[#d6b273] sm:left-5 sm:h-10" />
            <span className="absolute left-8 top-0 h-8 w-px bg-[#d6b273] sm:left-9 sm:h-10" />
            <span className="absolute left-1 top-4 h-px w-7 bg-[#d6b273] sm:top-5 sm:w-8" />
          </span>

          <span className="font-serif text-lg tracking-[.2em] text-[#f2e6cf] sm:text-2xl sm:tracking-[.25em]">
            HAVEN

            <small className="block pl-0.5 font-sans text-[6px] font-medium tracking-[.5em] text-[#d6b273] sm:pl-1 sm:text-[7px] sm:tracking-[.58em]">
              {/* REALTY */}
            </small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-[12px] font-medium text-white/75 md:flex lg:gap-9">
          <Link
            to="/properties"
            className="transition hover:text-[#d6b273]"
          >
            Properties
          </Link>

          <Link
            to="/buy"
            className="transition hover:text-[#d6b273]"
          >
            Buy
          </Link>

          <Link
            to="/sell"
            className="transition hover:text-[#d6b273]"
          >
            Sell
          </Link>

          <Link
            to="/about"
            className="transition hover:text-[#d6b273]"
          >
            About
          </Link>

          <Link
            to="/resources"
            className="transition hover:text-[#d6b273]"
          >
            Resources
          </Link>
        </nav>

        {/* Desktop Consultation */}
        <Link
          to="/contact"
          className="group hidden items-center gap-3 rounded-full bg-[#d6b273] px-4 py-2.5 text-[10px] font-semibold text-[#17202d] transition hover:bg-[#ebcc93] sm:flex lg:gap-4 lg:px-5 lg:py-3 lg:text-[11px]"
        >
          Book a Consultation

          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#efe0bd]/70 transition group-hover:translate-x-0.5">
            <Arrow small />
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/20 text-white transition hover:border-[#d6b273]/50 sm:h-11 sm:w-11 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-white transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-white transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-white/10 pt-4">

          <Link
            to="/properties"
            onClick={closeMenu}
            className="border-b border-white/5 px-2 py-4 text-sm text-white/75 transition hover:text-[#d6b273]"
          >
            Properties
          </Link>

          <Link
            to="/buy"
            onClick={closeMenu}
            className="border-b border-white/5 px-2 py-4 text-sm text-white/75 transition hover:text-[#d6b273]"
          >
            Buy
          </Link>

          <Link
            to="/sell"
            onClick={closeMenu}
            className="border-b border-white/5 px-2 py-4 text-sm text-white/75 transition hover:text-[#d6b273]"
          >
            Sell
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="border-b border-white/5 px-2 py-4 text-sm text-white/75 transition hover:text-[#d6b273]"
          >
            About
          </Link>

          <Link
            to="/resources"
            onClick={closeMenu}
            className="border-b border-white/5 px-2 py-4 text-sm text-white/75 transition hover:text-[#d6b273]"
          >
            Resources
          </Link>

          {/* Mobile Consultation */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="group mt-5 flex items-center justify-between rounded-full bg-[#d6b273] px-5 py-3.5 text-[11px] font-semibold text-[#17202d] transition hover:bg-[#ebcc93]"
          >
            Book a Consultation

            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#efe0bd]/70">
              <Arrow small />
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}