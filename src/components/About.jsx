import React from "react";

const values = [
  {
    number: "01",
    title: "Expert Guidance",
    description:
      "Our local market knowledge and experience help you make confident real estate decisions.",
  },
  {
    number: "02",
    title: "Curated Properties",
    description:
      "We carefully select exceptional properties that match the lifestyle, vision and goals of our clients.",
  },
  {
    number: "03",
    title: "Personal Approach",
    description:
      "Every client is different. We take the time to understand what matters before making recommendations.",
  },
  {
    number: "04",
    title: "Long-Term Trust",
    description:
      "Our relationships don't end at closing. We believe great real estate service is built on lasting trust.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "850+", label: "Properties Sold" },
  { value: "32", label: "Markets Covered" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#050c1a] text-white">

      {/* ================= HEADER ================= */}

      {/* <header className="border-b border-white/10 bg-[#050c1a]">
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
            <a
              href="/"
              className="transition hover:text-[#d6b273]"
            >
              Home
            </a>

            <a
              href="/properties"
              className="transition hover:text-[#d6b273]"
            >
              Properties
            </a>

            <a
              href="#"
              className="transition hover:text-[#d6b273]"
            >
              Buy
            </a>

            <a
              href="#"
              className="transition hover:text-[#d6b273]"
            >
              Sell
            </a>

            <a
              href="/about"
              className="text-[#d6b273]"
            >
              About
            </a>

            <a
              href="#"
              className="transition hover:text-[#d6b273]"
            >
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
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
            alt="Luxury Haven Realty property"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050c1a] via-[#050c1a]/95 to-[#050c1a]/60" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a] via-transparent to-[#050c1a]/50" />

        </div>

        <div className="relative mx-auto max-w-[1420px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

          <div className="max-w-4xl">

            <p className="text-[10px] font-semibold tracking-[0.35em] text-[#d6b273]">
              ABOUT HAVEN REALTY
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
              Real estate,
              <br />
              <span className="italic font-normal text-[#d6b273]">
                reimagined.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Haven Realty is a modern real estate company built around
              exceptional properties, thoughtful advice and relationships
              that last far beyond the transaction.
            </p>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="mx-auto max-w-[1420px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* IMAGE */}

          <div className="relative">

            <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-[#d6b273]/50" />

            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
              alt="Modern luxury home"
              className="relative h-[480px] w-full rounded-sm object-cover sm:h-[580px]"
            />

            <div className="absolute -bottom-5 right-5 max-w-[230px] border border-white/10 bg-[#101a29]/95 p-6 backdrop-blur-xl sm:right-8">
              <p className="font-serif text-4xl text-[#d6b273]">
                15+
              </p>

              <p className="mt-2 text-[9px] tracking-[0.2em] text-white/45">
                YEARS OF EXPERIENCE
              </p>
            </div>

          </div>

          {/* CONTENT */}

          <div className="lg:pl-12">

            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#d6b273]">
              WHO WE ARE
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              More than a real estate
              <br />
              <span className="italic font-normal text-[#d6b273]">
                company.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-white/50">

              <p>
                At Haven Realty, we believe finding a home should feel
                personal, inspiring and effortless. Real estate is not
                simply about square footage or market value — it is about
                finding a place where life happens.
              </p>

              <p>
                From contemporary city residences to private estates,
                we connect discerning buyers and sellers with properties
                that stand apart.
              </p>

              <p>
                Our approach combines deep market knowledge, modern
                technology and genuine human relationships to create a
                real estate experience that feels different from the
                traditional industry.
              </p>

            </div>

            <div className="mt-9 flex items-center gap-4">

              <button className="rounded-full bg-[#d6b273] px-6 py-3.5 text-[10px] font-bold text-[#152031] transition hover:bg-[#e9ca91]">
                EXPLORE PROPERTIES
              </button>

              <span className="text-xs text-white/35">
                Exceptional homes. Extraordinary lifestyles.
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="border-y border-white/10 bg-[#0a1320]">

        <div className="mx-auto grid max-w-[1420px] grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (

            <div
              key={stat.label}
              className={`px-6 py-10 lg:px-10 lg:py-14 ${
                index !== 0
                  ? "border-l border-white/10"
                  : ""
              }`}
            >

              <p className="font-serif text-4xl text-[#d6b273] sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-[9px] tracking-[0.2em] text-white/40">
                {stat.label.toUpperCase()}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= PHILOSOPHY ================= */}

      <section className="mx-auto max-w-[1420px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#d6b273]">
              OUR PHILOSOPHY
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Designed around
              <br />
              <span className="italic font-normal text-[#d6b273]">
                your ambitions.
              </span>
            </h2>

          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">

            {values.map((value) => (

              <div
                key={value.number}
                className="bg-[#050c1a] p-7 sm:p-8"
              >

                <div className="flex items-start justify-between">

                  <span className="font-serif text-2xl text-[#d6b273]">
                    {value.number}
                  </span>

                  <span className="text-white/20">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 font-serif text-2xl">
                  {value.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/40">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="relative overflow-hidden border-y border-white/10">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#050c1a]/80" />

        </div>

        <div className="relative mx-auto max-w-[1000px] px-5 py-24 text-center sm:px-8 lg:py-32">

          <span className="font-serif text-6xl text-[#d6b273]">
            “
          </span>

          <blockquote className="mt-2 font-serif text-3xl leading-tight sm:text-5xl">
            We don't simply help people
            <br className="hidden sm:block" />
            find property.
            <br />
            <span className="italic font-normal text-[#d6b273]">
              We help them find their place.
            </span>
          </blockquote>

          <p className="mt-8 text-[9px] tracking-[0.3em] text-white/35">
            THE HAVEN REALTY PHILOSOPHY
          </p>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="mx-auto max-w-[1420px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="rounded-3xl border border-[#d6b273]/20 bg-[#0b1422] p-8 sm:p-12 lg:p-16">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <p className="text-[10px] tracking-[0.3em] text-[#d6b273]">
                LET'S CONNECT
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Your next chapter
                <br />
                <span className="italic font-normal text-[#d6b273]">
                  starts here.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/40">
                Whether you're buying, selling or simply exploring
                what's possible, our team is here to help.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <button className="rounded-full bg-[#d6b273] px-7 py-4 text-[10px] font-bold text-[#152031] transition hover:bg-[#e9ca91]">
                BOOK A CONSULTATION ↗
              </button>

              <button className="rounded-full border border-white/15 px-7 py-4 text-[10px] font-semibold text-white/60 transition hover:border-[#d6b273] hover:text-[#d6b273]">
                CONTACT US
              </button>

            </div>

          </div>

        </div>

      </section>


    </main>
  );
}