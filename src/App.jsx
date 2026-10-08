import React from "react";

const properties = [
  {
    title: "Oceanfront Villa",
    location: "Malibu, CA",
    price: "$8,950,000",
    beds: "4",
    baths: "4.5",
    area: "5,100",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    tag: "FOR SALE",
  },
  {
    title: "Skyline Penthouse",
    location: "New York, NY",
    price: "$4,250,000",
    beds: "3",
    baths: "3.5",
    area: "3,400",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    tag: "FOR SALE",
  },
  {
    title: "Lakeside Retreat",
    location: "Lake Tahoe, CA",
    price: "$25,000 / mo",
    beds: "4",
    baths: "3",
    area: "3,000",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    tag: "FOR RENT",
  },
  {
    title: "Desert Modern",
    location: "Scottsdale, AZ",
    price: "$6,750,000",
    beds: "5",
    baths: "5.5",
    area: "6,200",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    tag: "FOR SALE",
  },
];

const features = [
  {
    icon: "◇",
    title: "Expert Guidance",
    text: "Local expertise and market insights you can trust.",
  },
  {
    icon: "⌂",
    title: "Curated Listings",
    text: "Handpicked properties that match your lifestyle.",
  },
  {
    icon: "⌕",
    title: "Seamless Experience",
    text: "From search to signature, we're with you.",
  },
  {
    icon: "▥",
    title: "Smart Investment",
    text: "Build wealth with strategic real estate decisions.",
  },
];

function Arrow({ small = false }) {
  return <span className={small ? "text-sm" : "text-lg"}>↗</span>;
}

function App() {
  return (
    
    <main className="min-h-screen overflow-hidden bg-[#050c1a] text-white selection:bg-[#d6b273] selection:text-[#050c1a]">
      {/* HERO */}
      <section className="relative min-h-[760px] lg:min-h-[900px]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover object-center opacity-80"
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
            alt="Luxury modern home"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050c1a_0%,rgba(5,12,26,.86)_30%,rgba(5,12,26,.32)_67%,rgba(5,12,26,.72)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#050c1a_0%,transparent_28%,rgba(5,12,26,.3)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[760px] max-w-[1420px] flex-col px-5 sm:px-8 lg:min-h-[900px] lg:px-12">
          {/* NAV */}
          {/* <header className="flex items-center justify-between border-b border-white/10 py-5 lg:py-7">
            <a href="#" className="flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center text-[#d6b273]">
                <span className="absolute left-1 top-0 h-10 w-px bg-[#d6b273]" />
                <span className="absolute left-5 top-0 h-10 w-px bg-[#d6b273]" />
                <span className="absolute left-9 top-0 h-10 w-px bg-[#d6b273]" />
                <span className="absolute left-1 top-5 h-px w-8 bg-[#d6b273]" />
              </span>
              <span className="font-serif text-xl tracking-[.25em] text-[#f2e6cf] sm:text-2xl">
                HAVEN
                <small className="block pl-1 font-sans text-[7px] font-medium tracking-[.58em] text-[#d6b273]">
                  REALTY
                </small>
              </span>
            </a>

            <nav className="hidden items-center gap-9 text-[12px] font-medium text-white/75 lg:flex">
              {["Properties", "Buy", "Sell", "About", "Resources"].map((item) => (
                <a key={item} href="#" className="transition hover:text-[#d6b273]">
                  {item}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="group hidden items-center gap-4 rounded-full bg-[#d6b273] px-5 py-3 text-[11px] font-semibold text-[#17202d] transition hover:bg-[#ebcc93] sm:flex"
            >
              Book a Consultation
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#efe0bd]/70 transition group-hover:translate-x-0.5">
                <Arrow small />
              </span>
            </a>

            <button className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/20 text-white lg:hidden" aria-label="Open menu">
              <span className="space-y-1">
                <i className="block h-px w-5 bg-white" />
                <i className="block h-px w-5 bg-white" />
                <i className="block h-px w-5 bg-white" />
              </span>
            </button>
          </header> */}

          {/* HERO COPY */}
          <div className="flex flex-1 items-center pb-12 pt-20 lg:pb-24 lg:pt-24">
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] font-semibold tracking-[.34em] text-[#d6b273] sm:text-xs">
                FIND MORE THAN A HOME.
              </p>
              <h1 className="max-w-2xl font-serif text-[54px] leading-[.93] tracking-[-.035em] text-[#f7f2e9] sm:text-[76px] lg:text-[92px]">
                Find your
                <br />
                <em className="font-normal text-[#d6b273]">place</em>
                <br />
                to thrive.
              </h1>
              <p className="mt-7 max-w-md text-sm leading-6 text-white/65 sm:text-base">
                Curated properties. Expert guidance.
                <br className="hidden sm:block" />
                Extraordinary living.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#properties"
                  className="group flex items-center gap-5 rounded-full bg-[#d6b273] px-5 py-3.5 text-[11px] font-semibold text-[#182131] transition hover:bg-[#edd29b]"
                >
                  Explore Properties
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f1dfb8] transition group-hover:translate-x-0.5">
                    <Arrow small />
                  </span>
                </a>
                <button className="flex items-center gap-3 text-xs font-medium text-white/80 transition hover:text-[#d6b273]">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/20 text-[#d6b273]">
                    ▶
                  </span>
                  Watch Video
                </button>
              </div>
            </div>

            {/* FEATURED HERO PROPERTY */}
            <div className="absolute bottom-28 right-5 hidden w-[380px] rounded-[24px] border border-white/15 bg-[#17202d]/75 p-5 shadow-2xl backdrop-blur-xl xl:block 2xl:right-12">
              <p className="text-[9px] font-semibold tracking-[.2em] text-[#d6b273]">
                EXCLUSIVE LISTING
              </p>
              <h2 className="mt-2 font-serif text-2xl text-white">The Hillside Estate.</h2>
              <p className="mt-1 text-xs text-white/55">⌖ Beverly Hills, CA</p>

              <div className="my-5 grid grid-cols-3 gap-3 border-y border-white/10 py-4 text-[10px] text-white/55">
                <div>▱ <span className="ml-1 text-white/80">5</span><small className="ml-1">Beds</small></div>
                <div>♧ <span className="ml-1 text-white/80">6</span><small className="ml-1">Baths</small></div>
                <div>▧ <span className="ml-1 text-white/80">7,200</span><small className="ml-1">Sq Ft</small></div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xl font-medium">$14,500,000</p>
                  <a href="#" className="mt-1 block text-[10px] text-white/50 hover:text-[#d6b273]">
                    View Property
                  </a>
                </div>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-[#d6b273] hover:text-[#d6b273]">
                  <Arrow />
                </button>
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="relative z-10 mb-[-36px] rounded-2xl border border-white/10 bg-[#111a29]/90 p-2 shadow-2xl backdrop-blur-xl lg:mb-[-30px]">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
              <SearchItem icon="⌕" label="LOCATION" value="Any Location" />
              <SearchItem label="PROPERTY TYPE" value="Any Type" />
              <SearchItem label="PRICE RANGE" value="$500K - $10M+" />
              <button className="flex min-h-[68px] items-center justify-center gap-3 rounded-xl bg-[#d6b273] px-5 text-xs font-semibold text-[#17202d] transition hover:bg-[#edcf96]">
                Search Properties
                <span className="text-base">⌕</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="properties" className="mx-auto max-w-[1420px] px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-36">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold tracking-[.28em] text-[#d6b273]">FEATURED PROPERTIES</p>
            <h2 className="mt-3 font-serif text-4xl leading-none text-white sm:text-5xl">
              Exceptional homes.
              <br />
              <em className="font-normal text-[#d6b273]">Extraordinary lifestyles.</em>
            </h2>
          </div>
          <a href="#" className="hidden items-center gap-3 pb-1 text-xs text-white/65 transition hover:text-[#d6b273] sm:flex">
            View all properties <Arrow small />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {properties.map((property) => (
            <PropertyCard key={property.title} property={property} />
          ))}
        </div>

        <a href="#" className="mt-7 flex items-center justify-center gap-3 text-xs text-white/60 sm:hidden">
          View all properties <Arrow small />
        </a>
      </section>

      {/* VALUE PROPS */}
      <section className="mx-auto max-w-[1420px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28 lg:pt-12">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-white/10 bg-[#0b1422]/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6b273]/40 hover:bg-[#111b2b]"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="text-2xl text-[#d6b273]">{feature.icon}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-sm text-white/50 transition group-hover:border-[#d6b273]/50 group-hover:text-[#d6b273]">
                  ↗
                </span>
              </div>
              <h3 className="font-serif text-xl text-white">{feature.title}</h3>
              <p className="mt-2 max-w-[230px] text-xs leading-5 text-white/45">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

function SearchItem({ icon, label, value }) {
  return (
    <button className="group flex min-h-[68px] items-center gap-4 rounded-xl px-5 text-left transition hover:bg-white/5">
      {icon && <span className="text-xl text-white/60">{icon}</span>}
      <span className="flex-1">
        <span className="block text-[8px] font-semibold tracking-[.18em] text-white/35">{label}</span>
        <span className="mt-1 block text-xs text-white/80">{value}</span>
      </span>
      <span className="text-xs text-white/30">⌄</span>
    </button>
  );
}

function PropertyCard({ property }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#0b1422]">
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101d]/80 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded bg-[#dbe0e5]/85 px-2 py-1 text-[8px] font-bold tracking-wider text-[#1b2531]">
          {property.tag}
        </span>
        <button className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-[#152031]/75 text-white/70 backdrop-blur transition hover:bg-[#d6b273] hover:text-[#152031]" aria-label={`Save ${property.title}`}>
          ♡
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-xl text-white">{property.title}</h3>
          <p className="mt-1 text-[10px] text-white/65">⌖ {property.location}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-4">
        <span className="font-medium text-sm text-[#d6b273]">{property.price}</span>
        <div className="flex gap-3 text-[9px] text-white/40">
          <span>▱ {property.beds}</span>
          <span>♧ {property.baths}</span>
          <span>▧ {property.area}</span>
        </div>
      </div>
    </article>
  );
}

export default App;
