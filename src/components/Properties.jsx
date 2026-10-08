import React, { useMemo, useState } from "react";

const properties = [
  {
    id: 1,
    title: "The Hillside Estate",
    location: "Beverly Hills, CA",
    type: "Villa",
    status: "For Sale",
    price: "$14,500,000",
    beds: 5,
    baths: 6,
    area: "7,200",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    title: "Oceanfront Villa",
    location: "Malibu, CA",
    type: "Villa",
    status: "For Sale",
    price: "$8,950,000",
    beds: 4,
    baths: 4.5,
    area: "5,100",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "New York, NY",
    type: "Penthouse",
    status: "For Sale",
    price: "$4,250,000",
    beds: 3,
    baths: 3.5,
    area: "3,400",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    title: "Lakeside Retreat",
    location: "Lake Tahoe, CA",
    type: "House",
    status: "For Rent",
    price: "$25,000 / mo",
    beds: 4,
    baths: 3,
    area: "3,000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    title: "Desert Modern",
    location: "Scottsdale, AZ",
    type: "House",
    status: "For Sale",
    price: "$6,750,000",
    beds: 5,
    baths: 5.5,
    area: "6,200",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    title: "The Glass Residence",
    location: "Los Angeles, CA",
    type: "Villa",
    status: "For Sale",
    price: "$9,800,000",
    beds: 5,
    baths: 5,
    area: "5,850",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 7,
    title: "Central Park Residence",
    location: "New York, NY",
    type: "Penthouse",
    status: "For Rent",
    price: "$18,500 / mo",
    beds: 3,
    baths: 3,
    area: "2,900",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 8,
    title: "Palm Springs House",
    location: "Palm Springs, CA",
    type: "House",
    status: "For Sale",
    price: "$3,950,000",
    beds: 4,
    baths: 4,
    area: "3,750",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
];

const locations = [
  "All Locations",
  "Beverly Hills, CA",
  "Malibu, CA",
  "New York, NY",
  "Lake Tahoe, CA",
  "Scottsdale, AZ",
  "Los Angeles, CA",
  "Palm Springs, CA",
];

const propertyTypes = [
  "All Types",
  "Villa",
  "House",
  "Penthouse",
];

export default function Properties() {
  const [status, setStatus] = useState("All");
  const [location, setLocation] = useState("All Locations");
  const [propertyType, setPropertyType] = useState("All Types");
  const [sortBy, setSortBy] = useState("Featured");
  const [favorites, setFavorites] = useState([]);

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const statusMatch =
        status === "All" || property.status === status;

      const locationMatch =
        location === "All Locations" ||
        property.location === location;

      const typeMatch =
        propertyType === "All Types" ||
        property.type === propertyType;

      return statusMatch && locationMatch && typeMatch;
    });

    if (sortBy === "Price: Low to High") {
      result = [...result].sort(
        (a, b) =>
          Number(a.price.replace(/[^0-9]/g, "")) -
          Number(b.price.replace(/[^0-9]/g, ""))
      );
    }

    if (sortBy === "Price: High to Low") {
      result = [...result].sort(
        (a, b) =>
          Number(b.price.replace(/[^0-9]/g, "")) -
          Number(a.price.replace(/[^0-9]/g, ""))
      );
    }

    return result;
  }, [status, location, propertyType, sortBy]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const resetFilters = () => {
    setStatus("All");
    setLocation("All Locations");
    setPropertyType("All Types");
    setSortBy("Featured");
  };

  return (
    <div className="min-h-screen bg-[#050c1a] text-white">

      {/* HEADER */}

      {/* <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1420px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">

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

            <a
              href="/properties"
              className="text-[#d6b273]"
            >
              Properties
            </a>

            <a href="#" className="hover:text-[#d6b273]">
              Buy
            </a>

            <a href="#" className="hover:text-[#d6b273]">
              Sell
            </a>

            <a href="#" className="hover:text-[#d6b273]">
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

      {/* PAGE HERO */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-[1420px] px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">

          <p className="text-[10px] font-semibold tracking-[0.35em] text-[#d6b273]">
            THE HAVEN COLLECTION
          </p>

          <div className="mt-5 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
                Discover exceptional
                <br />
                <span className="italic font-normal text-[#d6b273]">
                  places to live.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-6 text-white/45">
                Explore our curated collection of extraordinary homes,
                private estates, penthouses and investment properties.
              </p>

            </div>

            <div className="lg:text-right">

              <p className="font-serif text-5xl text-white">
                {filteredProperties.length}
              </p>

              <p className="text-[9px] tracking-[0.25em] text-white/35">
                PROPERTIES AVAILABLE
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FILTERS */}

      <section className="mx-auto max-w-[1420px] px-5 py-8 sm:px-8 lg:px-12">

        <div className="rounded-2xl border border-white/10 bg-[#0b1422] p-3">

          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">

            <Filter label="STATUS">
              <select
                value={status} className="bg-[#111B29] "
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
            </Filter>

            <Filter label="LOCATION">
              <select
                value={location} className="bg-[#111B29] "
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Filter>

            <Filter label="PROPERTY TYPE">
              <select
                value={propertyType} className="bg-[#111B29] "
                onChange={(e) => setPropertyType(e.target.value)}
              >
                {propertyTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Filter>

            <Filter label="SORT BY">
              <select
                value={sortBy} className="bg-[#111B29] "
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </Filter>

            <button
              onClick={resetFilters}
              className="min-h-[64px] rounded-xl border border-white/10 text-xs text-white/50 transition hover:border-[#d6b273]/50 hover:text-[#d6b273]"
            >
              Reset Filters
            </button>

          </div>

        </div>

      </section>

      {/* PROPERTY GRID */}

      <section className="mx-auto max-w-[1420px] px-5 pb-24 sm:px-8 lg:px-12">

        <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">

          <p className="text-xs text-white/40">
            Showing{" "}
            <span className="text-white">
              {filteredProperties.length}
            </span>{" "}
            carefully selected properties
          </p>

          <button
            onClick={resetFilters}
            className="text-[10px] text-[#d6b273]"
          >
            CLEAR FILTERS
          </button>

        </div>

        {filteredProperties.length > 0 ? (

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {filteredProperties.map((property) => (

              <PropertyCard
                key={property.id}
                property={property}
                favorite={favorites.includes(property.id)}
                onFavorite={() =>
                  toggleFavorite(property.id)
                }
              />

            ))}

          </div>

        ) : (

          <div className="rounded-2xl border border-white/10 bg-[#0b1422] px-5 py-24 text-center">

            <h2 className="font-serif text-3xl">
              No properties found
            </h2>

            <p className="mt-3 text-sm text-white/40">
              Try changing your search filters.
            </p>

            <button
              onClick={resetFilters}
              className="mt-7 rounded-full bg-[#d6b273] px-6 py-3 text-xs font-bold text-[#152031]"
            >
              RESET SEARCH
            </button>

          </div>

        )}

      </section>

      {/* CTA */}

      <section className="border-t border-white/10 bg-[#09121f]">

        <div className="mx-auto max-w-[1420px] px-5 py-16 sm:px-8 lg:px-12">

          <div className="rounded-3xl border border-[#d6b273]/20 bg-[#0d1827] p-8 sm:p-12 lg:p-16">

            <p className="text-[10px] tracking-[0.3em] text-[#d6b273]">
              PRIVATE PROPERTY SEARCH
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div>

                <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                  Looking for something
                  <br />
                  <span className="italic font-normal text-[#d6b273]">
                    truly exceptional?
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-6 text-white/40">
                  Tell us what you're looking for and our advisors
                  will curate a private selection for you.
                </p>

              </div>

              <button className="w-fit rounded-full bg-[#d6b273] px-7 py-4 text-xs font-bold text-[#152031] transition hover:bg-[#e9ca91]">
                START A PRIVATE SEARCH ↗
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

/* FILTER */

function Filter({ label, children }) {
  return (
    <label className="flex min-h-[64px] flex-col justify-center rounded-xl bg-[#111b29] px-4">

      <span className="text-[8px] font-semibold tracking-[0.2em] text-white/30">
        {label}
      </span>

      <span className="mt-1 text-xs text-white/75">
        {children}
      </span>

    </label>
  );
}

/* PROPERTY CARD */

function PropertyCard({
  property,
  favorite,
  onFavorite,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1422] transition duration-300 hover:-translate-y-1 hover:border-[#d6b273]/40">

      {/* IMAGE */}

      <div className="relative h-[330px] overflow-hidden">

        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07101d] via-transparent to-transparent" />

        {/* STATUS */}

        <span className="absolute left-4 top-4 rounded bg-white/85 px-2.5 py-1.5 text-[8px] font-bold tracking-wider text-[#17202d]">
          {property.status.toUpperCase()}
        </span>

        {/* FAVORITE */}

        <button
          onClick={onFavorite}
          className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full backdrop-blur-md transition ${
            favorite
              ? "bg-[#d6b273] text-[#152031]"
              : "bg-[#101b2a]/75 text-white/75 hover:bg-[#d6b273] hover:text-[#152031]"
          }`}
        >
          {favorite ? "♥" : "♡"}
        </button>

        {/* CONTENT OVER IMAGE */}

        <div className="absolute bottom-5 left-5 right-5">

          <p className="mb-1 text-[9px] tracking-[0.15em] text-[#d6b273]">
            {property.type.toUpperCase()}
          </p>

          <h2 className="font-serif text-2xl text-white">
            {property.title}
          </h2>

          <p className="mt-1 text-[11px] text-white/55">
            ⌖ {property.location}
          </p>

        </div>

      </div>

      {/* DETAILS */}

      <div className="p-5">

        <p className="font-serif text-xl text-[#d6b273]">
          {property.price}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-white/45">

          <span>▱ {property.beds} Beds</span>

          <span>♧ {property.baths} Baths</span>

          <span>▧ {property.area} Sq Ft</span>

        </div>

        <button className="mt-5 flex w-full items-center justify-between rounded-full border border-white/10 px-4 py-3 text-[10px] font-semibold text-white/60 transition hover:border-[#d6b273]/50 hover:text-[#d6b273]">

          VIEW PROPERTY

          <span>↗</span>

        </button>

      </div>

    </article>
  );
}