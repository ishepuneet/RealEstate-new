import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050c1a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="font-serif text-3xl tracking-wide">
              Haven<span className="text-[#d6b273]">.</span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
              Exceptional properties, thoughtful guidance, and a more refined
              approach to real estate.
            </p>

            <div className="mt-6 flex gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50 transition hover:border-[#d6b273] hover:text-[#d6b273]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-medium">Explore</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">
              <a href="/" className="hover:text-[#d6b273]">
                Home
              </a>
              <a href="/properties" className="hover:text-[#d6b273]">
                Properties
              </a>
              <a href="/buy" className="hover:text-[#d6b273]">
                Buy
              </a>
              <a href="/sell" className="hover:text-[#d6b273]">
                Sell
              </a>
              <a href="/resources" className="hover:text-[#d6b273]">
                Resources
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium">Company</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">
              <a href="/about" className="hover:text-[#d6b273]">
                About Us
              </a>
              <a href="/contact" className="hover:text-[#d6b273]">
                Contact
              </a>
              <a href="#" className="hover:text-[#d6b273]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#d6b273]">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row">
          <p>© 2026 Haven Realty. All rights reserved.</p>
          <p>Designed for exceptional living.</p>
        </div>
      </div>
    </footer>
  );
}