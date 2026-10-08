import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050c1a] text-white">
      {/* Navbar */}
      {/* <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="/" className="font-serif text-2xl tracking-wide">
            Haven<span className="text-[#d6b273]">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
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
            <a href="/about" className="hover:text-[#d6b273]">
              About
            </a>
          </nav>

          <a
            href="/contact"
            className="rounded-full border border-[#d6b273] bg-[#d6b273] px-5 py-2.5 text-sm text-[#050c1a]"
          >
            Contact Us
          </a>
        </div>
      </header> */}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury interior"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#050c1a]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a]/40 to-[#050c1a]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d6b273]">
            Get In Touch
          </p>

          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Let's find your
            <br />
            <span className="italic text-[#d6b273]">next chapter.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Whether you're buying, selling, or simply exploring your options,
            our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Information */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
              Contact Haven
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              We would love to hear from you.
            </h2>

            <p className="mt-6 leading-7 text-white/50">
              Have a question about a property? Looking to sell? Or just want
              to understand the market? Send us a message and one of our
              advisors will get back to you.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b273]">
                  Visit Us
                </p>
                <p className="mt-2 text-white/60">
                  128 Madison Avenue
                  <br />
                  New York, NY 10016
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b273]">
                  Call Us
                </p>
                <p className="mt-2 text-white/60">+1 (212) 555-0188</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b273]">
                  Email
                </p>
                <p className="mt-2 text-white/60">
                  hello@havenrealty.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b273]">
                  Office Hours
                </p>
                <p className="mt-2 text-white/60">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0a1320] p-6 sm:p-9">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Your Name"
                    name="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Phone Number"
                    name="phone"
                    placeholder="+1 000 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                  />

                  <div>
                    <label className="mb-2 block text-sm text-white/60">
                      I'm Interested In
                    </label>

                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#101a29] px-4 py-3.5 text-sm text-white outline-none focus:border-[#d6b273]"
                    >
                      <option value="">Select an option</option>
                      <option>Buying a Property</option>
                      <option>Selling a Property</option>
                      <option>Investment</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us a little about what you're looking for..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#101a29] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#d6b273]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#d6b273] py-4 text-sm font-medium text-[#050c1a] transition hover:bg-[#e9ca91]"
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-white/30">
                  We typically respond within one business day.
                </p>
              </form>
            ) : (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d6b273]/10 text-3xl text-[#d6b273]">
                  ✓
                </div>

                <h3 className="mt-6 font-serif text-3xl">
                  Message Received
                </h3>

                <p className="mt-3 max-w-md leading-7 text-white/50">
                  Thank you for reaching out to Haven Realty. One of our
                  advisors will be in touch shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm text-[#d6b273] hover:text-[#e9ca91]"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map / Office */}
      <section className="border-y border-white/10 bg-[#08111f]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="min-h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85"
              alt="New York city"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
                Our Office
              </p>

              <h2 className="mt-4 font-serif text-4xl">
                Come say hello.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-white/50">
                Our doors are open for conversations about your next move.
                Schedule a private consultation with our team.
              </p>

              <a
                href="#"
                className="mt-7 inline-block rounded-full border border-[#d6b273] px-7 py-3 text-sm text-[#d6b273] transition hover:bg-[#d6b273] hover:text-[#050c1a]"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/60">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-white/10 bg-[#101a29] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#d6b273]"
      />
    </div>
  );
}