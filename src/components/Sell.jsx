import React, { useState } from "react";

export default function Sell() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    price: "",
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
    <main className="min-h-screen bg-[#050c1a] text-white">

      {/* ================= HEADER ================= */}
{/* 
      <header className="border-b border-white/10 bg-[#050c1a]">
        <div className="mx-auto flex max-w-[1420px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">

          <a
            href="/"
            className="font-serif text-2xl tracking-[0.25em] text-[#f2e6cf]"
          >
            HAVEN

            <span className="block pl-1 font-sans text-[7px] tracking-[0.55em] text-[#d6b273]">
              REALTY
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs text-white/60 md:flex">

            <a href="/" className="hover:text-[#d6b273]">
              Home
            </a>

            <a href="/properties" className="hover:text-[#d6b273]">
              Properties
            </a>

            <a href="#" className="hover:text-[#d6b273]">
              Buy
            </a>

            <a href="/sell" className="text-[#d6b273]">
              Sell
            </a>

            <a href="/about" className="hover:text-[#d6b273]">
              About
            </a>

            <a href="#" className="hover:text-[#d6b273]">
              Resources
            </a>

          </nav>

          <button className="rounded-full bg-[#d6b273] px-5 py-3 text-[10px] font-bold text-[#152031] transition hover:bg-[#e9ca91]">
            BOOK A CONSULTATION
          </button>

        </div>
      </header> */}

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85"
            alt="Luxury property"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050c1a] via-[#050c1a]/95 to-[#050c1a]/60" />

        </div>

        <div className="relative mx-auto max-w-[1420px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="max-w-4xl">

            <p className="text-[10px] font-semibold tracking-[0.35em] text-[#d6b273]">
              SELL WITH HAVEN
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">

              Your property
              <br />

              deserves to be
              <br />

              <span className="italic font-normal text-[#d6b273]">
                seen differently.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Strategic marketing, expert valuation and a personal approach
              designed to position your property for the strongest possible
              result.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#valuation"
                className="rounded-full bg-[#d6b273] px-7 py-4 text-[10px] font-bold text-[#152031] transition hover:bg-[#e9ca91]"
              >
                GET A FREE VALUATION ↗
              </a>

              <a
                href="#process"
                className="rounded-full border border-white/15 px-7 py-4 text-[10px] font-semibold text-white/65 transition hover:border-[#d6b273] hover:text-[#d6b273]"
              >
                HOW IT WORKS
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="border-b border-white/10 bg-[#0a1320]">

        <div className="mx-auto grid max-w-[1420px] grid-cols-2 lg:grid-cols-4">

          {[
            ["98%", "Client Satisfaction"],
            ["850+", "Properties Sold"],
            ["15+", "Years Experience"],
            ["32", "Markets Covered"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="border-r border-white/10 px-6 py-10 last:border-r-0 sm:px-10 lg:py-14"
            >

              <p className="font-serif text-4xl text-[#d6b273] sm:text-5xl">
                {value}
              </p>

              <p className="mt-3 text-[9px] tracking-[0.2em] text-white/35">
                {label.toUpperCase()}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= WHY SELL WITH US ================= */}

      <section
        id="process"
        className="mx-auto max-w-[1420px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#d6b273]">
              THE HAVEN ADVANTAGE
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">

              Selling should feel
              <br />

              <span className="italic font-normal text-[#d6b273]">
                effortless.
              </span>

            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              We combine local expertise, premium presentation and
              strategic marketing to make sure your property gets the
              attention it deserves.
            </p>

          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">

            {[
              {
                number: "01",
                title: "Accurate Valuation",
                text: "Understand your property's true market position with detailed local market analysis.",
              },
              {
                number: "02",
                title: "Premium Marketing",
                text: "Professional photography, compelling presentation and targeted digital exposure.",
              },
              {
                number: "03",
                title: "Qualified Buyers",
                text: "Connect your property with serious buyers from our private network and wider market.",
              },
              {
                number: "04",
                title: "Negotiation",
                text: "Experienced representation designed to protect your interests and maximize your result.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="bg-[#050c1a] p-7 sm:p-9"
              >

                <div className="flex justify-between">

                  <span className="font-serif text-2xl text-[#d6b273]">
                    {item.number}
                  </span>

                  <span className="text-white/20">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 font-serif text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/40">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SELLING PROCESS ================= */}

      <section className="border-y border-white/10 bg-[#0a1320]">

        <div className="mx-auto max-w-[1420px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mb-14">

            <p className="text-[10px] tracking-[0.3em] text-[#d6b273]">
              OUR PROCESS
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              From valuation
              <br />
              <span className="italic font-normal text-[#d6b273]">
                to sold.
              </span>
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-4">

            {[
              ["01", "Tell Us About Your Property"],
              ["02", "Property Valuation"],
              ["03", "Launch & Market"],
              ["04", "Negotiate & Close"],
            ].map(([number, title]) => (

              <div key={number} className="relative">

                <span className="font-serif text-5xl text-[#d6b273]/40">
                  {number}
                </span>

                <div className="mt-5 h-px w-full bg-white/10" />

                <h3 className="mt-5 max-w-[180px] font-serif text-xl">
                  {title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-white/35">
                  A dedicated Haven advisor guides you through every stage
                  of the selling journey.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= VALUATION FORM ================= */}

      <section
        id="valuation"
        className="mx-auto max-w-[1420px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}

          <div>

            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#d6b273]">
              PROPERTY VALUATION
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">

              Know what your
              <br />

              property is
              <br />

              <span className="italic font-normal text-[#d6b273]">
                really worth.
              </span>

            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Complete the form and one of our property advisors will
              contact you for a confidential, no-obligation valuation.
            </p>

            <div className="mt-10 border-l border-[#d6b273] pl-5">

              <p className="font-serif text-xl text-white">
                Confidential. Personal. No obligation.
              </p>

              <p className="mt-2 text-xs text-white/35">
                Your information is kept completely private.
              </p>

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-2xl border border-white/10 bg-[#0b1422] p-6 sm:p-9">

            {submitted ? (

              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#d6b273] text-2xl text-[#152031]">
                  ✓
                </div>

                <h3 className="mt-7 font-serif text-3xl">
                  Thank you.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                  Your valuation request has been received. A Haven Realty
                  advisor will contact you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-xs text-[#d6b273]"
                >
                  Submit another request
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="grid gap-5 sm:grid-cols-2">

                  <Input
                    label="FULL NAME"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                  <Input
                    label="PHONE"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    required
                  />

                </div>

                <Input
                  label="EMAIL ADDRESS"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

                <div className="grid gap-5 sm:grid-cols-2">

                  <Input
                    label="PROPERTY TYPE"
                    name="propertyType"
                    value={form.propertyType}
                    onChange={handleChange}
                    placeholder="Villa / House / Apartment"
                    required
                  />

                  <Input
                    label="PROPERTY LOCATION"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="City / Area"
                    required
                  />

                </div>

                <Input
                  label="EXPECTED PRICE"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Approximate property value"
                />

                <div>

                  <label className="mb-2 block text-[8px] font-semibold tracking-[0.2em] text-white/30">
                    ADDITIONAL DETAILS
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us anything else about your property..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#101a29] px-4 py-4 text-xs text-white outline-none placeholder:text-white/20 focus:border-[#d6b273]/50"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#d6b273] py-4 text-[10px] font-bold text-[#152031] transition hover:bg-[#e9ca91]"
                >
                  REQUEST MY FREE VALUATION ↗
                </button>

                <p className="text-center text-[9px] text-white/25">
                  By submitting this form, you agree to be contacted by
                  Haven Realty regarding your property.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>

     


    </main>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>

      <label className="mb-2 block text-[8px] font-semibold tracking-[0.2em] text-white/30">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-[#101a29] px-4 py-4 text-xs text-white outline-none placeholder:text-white/20 transition focus:border-[#d6b273]/50"
      />

    </div>
  );
}