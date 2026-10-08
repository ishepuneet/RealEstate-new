import React, { useMemo, useState } from "react";

const properties = [
  {
    id: 1,
    title: "The Azure Residence",
    location: "Beverly Hills, California",
    type: "Villa",
    price: "$4.85M",
    beds: 5,
    baths: 6,
    area: "5,420 sq ft",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Ocean Crest Estate",
    location: "Malibu, California",
    type: "Estate",
    price: "$7.2M",
    beds: 6,
    baths: 7,
    area: "7,180 sq ft",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "The Grand Oak",
    location: "Austin, Texas",
    type: "Residence",
    price: "$2.95M",
    beds: 4,
    baths: 5,
    area: "4,280 sq ft",
    status: "New Listing",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Sierra Modern",
    location: "Los Angeles, California",
    type: "Villa",
    price: "$3.75M",
    beds: 4,
    baths: 4,
    area: "3,950 sq ft",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Willow Creek Manor",
    location: "Nashville, Tennessee",
    type: "Estate",
    price: "$5.4M",
    beds: 5,
    baths: 6,
    area: "6,120 sq ft",
    status: "Featured",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "The Palm House",
    location: "Miami, Florida",
    type: "Residence",
    price: "$3.2M",
    beds: 4,
    baths: 5,
    area: "4,610 sq ft",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Buy() {
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [price, setPrice] = useState("Any Price");
  const [sort, setSort] = useState("Featured");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (location !== "All Locations") {
      result = result.filter((item) => item.location.includes(location));
    }

    if (type !== "All Types") {
      result = result.filter((item) => item.type === type);
    }

    if (price === "Under $3M") {
      result = result.filter(
        (item) => parseFloat(item.price.replace("$", "").replace("M", "")) < 3
      );
    }

    if (price === "$3M - $5M") {
      result = result.filter((item) => {
        const value = parseFloat(
          item.price.replace("$", "").replace("M", "")
        );
        return value >= 3 && value <= 5;
      });
    }

    if (price === "$5M+") {
      result = result.filter(
        (item) => parseFloat(item.price.replace("$", "").replace("M", "")) > 5
      );
    }

    if (sort === "Price: Low to High") {
      result.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "").replace("M", "")) -
          parseFloat(b.price.replace("$", "").replace("M", ""))
      );
    }

    if (sort === "Price: High to Low") {
      result.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "").replace("M", "")) -
          parseFloat(a.price.replace("$", "").replace("M", ""))
      );
    }

    return result;
  }, [location, type, price, sort]);

  return (
    <div className="min-h-screen bg-[#050c1a] text-white">
      {/* Navbar */}
      {/* <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="/" className="font-serif text-2xl tracking-wide">
            Haven<span className="text-[#d6b273]">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/" className="transition hover:text-[#d6b273]">
              Home
            </a>
            <a href="/properties" className="transition hover:text-[#d6b273]">
              Properties
            </a>
            <a href="/buy" className="text-[#d6b273]">
              Buy
            </a>
            <a href="/sell" className="transition hover:text-[#d6b273]">
              Sell
            </a>
            <a href="/about" className="transition hover:text-[#d6b273]">
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
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury home"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050c1a]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a]/40 via-[#050c1a]/60 to-[#050c1a]" />
        </div>

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#d6b273]">
              Find Your Haven
            </p>

            <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Find a home
              <br />
              <span className="italic text-[#d6b273]">worth coming home to.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Explore exceptional properties selected for their character,
              location, design, and lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0a1320] p-5 shadow-2xl sm:p-7">
          <div className="mb-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d6b273]">
              Search Properties
            </p>
            <h2 className="mt-2 font-serif text-2xl">
              What are you looking for?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101a29] px-4 py-4 text-sm text-white outline-none focus:border-[#d6b273]"
            >
              <option>All Locations</option>
              <option>California</option>
              <option>Texas</option>
              <option>Tennessee</option>
              <option>Florida</option>
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101a29] px-4 py-4 text-sm text-white outline-none focus:border-[#d6b273]"
            >
              <option>All Types</option>
              <option>Villa</option>
              <option>Estate</option>
              <option>Residence</option>
            </select>

            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101a29] px-4 py-4 text-sm text-white outline-none focus:border-[#d6b273]"
            >
              <option>Any Price</option>
              <option>Under $3M</option>
              <option>$3M - $5M</option>
              <option>$5M+</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101a29] px-4 py-4 text-sm text-white outline-none focus:border-[#d6b273]"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
              Available Now
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Exceptional properties
            </h2>
          </div>

          <p className="text-sm text-white/50">
            {filteredProperties.length} properties found
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a1320] transition duration-300 hover:-translate-y-1 hover:border-[#d6b273]/40"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#050c1a]/80 px-3 py-1.5 text-xs text-[#d6b273] backdrop-blur">
                    {property.status}
                  </div>

                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#050c1a]/80 text-lg backdrop-blur transition hover:bg-[#d6b273] hover:text-[#050c1a]"
                  >
                    {favorites.includes(property.id) ? "♥" : "♡"}
                  </button>

                  <div className="absolute bottom-4 left-4 rounded-lg bg-[#050c1a]/85 px-4 py-2 backdrop-blur">
                    <span className="font-serif text-xl text-[#d6b273]">
                      {property.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-[#d6b273]">
                    {property.type}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    {property.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {property.location}
                  </p>

                  <div className="my-5 h-px bg-white/10" />

                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.area}</span>
                  </div>

                  <button className="mt-6 w-full rounded-xl border border-[#d6b273]/50 py-3 text-sm text-[#d6b273] transition hover:bg-[#d6b273] hover:text-[#050c1a]">
                    View Property
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#0a1320] py-20 text-center">
            <h3 className="font-serif text-3xl">No properties found</h3>
            <p className="mt-3 text-white/50">
              Try changing your search filters.
            </p>
          </div>
        )}
      </section>

      {/* Why Buy With Us */}
      <section className="border-y border-white/10 bg-[#08111f]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
                The Haven Difference
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Buying a home should feel
                <span className="italic text-[#d6b273]"> effortless.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-white/55">
                From your first property search to handing over the keys,
                our advisors provide thoughtful guidance and local expertise
                at every step.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-block rounded-full bg-[#d6b273] px-7 py-3.5 text-sm font-medium text-[#050c1a] transition hover:bg-[#e9ca91]"
              >
                Speak With An Advisor
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Curated Listings", "Only properties that meet our standards."],
                ["02", "Local Expertise", "Deep knowledge of every market we serve."],
                ["03", "Private Guidance", "Personalized support throughout your journey."],
                ["04", "Clear Process", "Transparent communication from start to finish."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-[#0a1320] p-6"
                >
                  <span className="text-sm text-[#d6b273]">{number}</span>
                  <h3 className="mt-5 font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d6b273]">
          Your Next Chapter
        </p>

        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
          Let us help you find
          <br />
          <span className="italic text-[#d6b273]">your place.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-white/50">
          Tell us what you're looking for and our team will help you discover
          properties that match your lifestyle and ambitions.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[#d6b273] px-8 py-4 text-sm font-medium text-[#050c1a] transition hover:bg-[#e9ca91]"
        >
          Start Your Search
        </a>
      </section>

      {/* Footer
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 text-sm text-white/40 sm:px-8 md:flex-row lg:px-10">
          <p>
            © 2026 Haven<span className="text-[#d6b273]">.</span> Realty
          </p>

          <div className="flex gap-6">
            <a href="/properties" className="hover:text-[#d6b273]">
              Properties
            </a>
            <a href="/sell" className="hover:text-[#d6b273]">
              Sell
            </a>
            <a href="/about" className="hover:text-[#d6b273]">
              About
            </a>
            <a href="/contact" className="hover:text-[#d6b273]">
              Contact
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}