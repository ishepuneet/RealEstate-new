import React from "react";

const resources = [
  {
    type: "BUYING GUIDE",
    title: "The Modern Home Buyer's Guide",
    description:
      "Everything you need to know before purchasing your next home, from financing to closing.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "SELLING GUIDE",
    title: "How to Sell Your Property",
    description:
      "Discover practical strategies to position your property, attract buyers, and maximize its value.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "MARKET INSIGHTS",
    title: "Understanding the Luxury Market",
    description:
      "Explore the latest trends, buyer behavior, and opportunities shaping today's property market.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
];

const guides = [
  {
    number: "01",
    title: "Buying Your First Home",
    text: "A simple roadmap from finding the right property to getting the keys.",
  },
  {
    number: "02",
    title: "Preparing to Sell",
    text: "Learn how presentation, pricing, and positioning can make a difference.",
  },
  {
    number: "03",
    title: "Property Investment",
    text: "Understand the fundamentals of building a thoughtful real estate portfolio.",
  },
  {
    number: "04",
    title: "Moving Checklist",
    text: "A practical checklist to help make your next move smoother and stress-free.",
  },
];

export default function Resources() {
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
            <a href="/resources" className="text-[#d6b273]">
              Resources
            </a>
            <a href="/about" className="hover:text-[#d6b273]">
              About
            </a>
          </nav>

          <a
            href="/contact"
            className="rounded-full border border-[#d6b273] px-5 py-2.5 text-sm text-[#d6b273] transition hover:bg-[#d6b273] hover:text-[#050c1a]"
          >
            Contact Us
          </a>
        </div>
      </header> */}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury interior"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#050c1a]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a]/40 to-[#050c1a]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d6b273]">
              Haven Resources
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Knowledge for
              <br />
              <span className="italic text-[#d6b273]">
                smarter decisions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Expert guides, market insights, and practical advice to help you
              navigate every step of your real estate journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
            Featured Resources
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Guides worth keeping.
          </h2>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a1320]"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="text-xs tracking-[0.2em] text-[#d6b273]">
                  {resource.type}
                </p>

                <h3 className="mt-3 font-serif text-2xl">
                  {resource.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {resource.description}
                </p>

                <button className="mt-6 text-sm text-[#d6b273] transition hover:text-[#e9ca91]">
                  Read Guide →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-white/10 bg-[#08111f]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
                Real Estate Essentials
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Everything you need,
                <br />
                <span className="italic text-[#d6b273]">
                  in one place.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-white/50">
                Whether you're buying, selling, investing, or simply exploring
                the market, our resources are designed to make complex
                decisions easier.
              </p>
            </div>

            <div>
              {guides.map((guide) => (
                <div
                  key={guide.number}
                  className="flex gap-6 border-b border-white/10 py-6 first:pt-0 last:border-b-0"
                >
                  <span className="text-sm text-[#d6b273]">
                    {guide.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-xl">{guide.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/45">
                      {guide.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
          Stay Informed
        </p>

        <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
          Get the latest market insights.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-white/50">
          Join our private newsletter for market updates, new listings, and
          useful real estate insights.
        </p>

        <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 rounded-full border border-white/10 bg-[#0a1320] px-6 py-4 text-sm outline-none placeholder:text-white/30 focus:border-[#d6b273]"
          />

          <button className="rounded-full bg-[#d6b273] px-7 py-4 text-sm font-medium text-[#050c1a] transition hover:bg-[#e9ca91]">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}
