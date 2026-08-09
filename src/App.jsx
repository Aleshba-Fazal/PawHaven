import { useMemo, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

/* =========================
   PET DATA
========================= */

const pets = [
  {
    id: 1,
    name: "Luna",
    type: "Cat",
    breed: "Siamese Mix",
    age: "1.5 years",
    ageGroup: "Young",
    image: "/images/cat1.jpg",
    description:
      "Luna is a graceful cat who enjoys sunbathing, gentle pets, and spending time with children.",
  },
  {
    id: 2,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: "1.5 years",
    ageGroup: "Young",
    image: "/images/dog1.jpg",
    description:
      "Buddy is a friendly and energetic dog who loves playing fetch and going for long walks.",
  },
  {
    id: 3,
    name: "Max",
    type: "Dog",
    breed: "Labrador Mix",
    age: "3 years",
    ageGroup: "Adult",
    image: "/images/dog2.jpg",
    description:
      "Max is a loyal companion who is house-trained and already knows basic commands.",
  },
  {
    id: 4,
    name: "Bella",
    type: "Cat",
    breed: "Domestic Shorthair",
    age: "4 months",
    ageGroup: "Baby",
    image: "/images/cat2.jpg",
    description:
      "Bella is a playful kitten who loves chasing toys and curling up in warm laps.",
  },
  {
    id: 5,
    name: "Rocky",
    type: "Dog",
    breed: "Beagle",
    age: "5 years",
    ageGroup: "Adult",
    image: "/images/dog3.jpg",
    description:
      "Rocky is a sweet older dog who would love a quiet and loving home.",
  },
  {
    id: 6,
    name: "Oliver",
    type: "Rabbit",
    breed: "Friendly Rabbit",
    age: "6 months",
    ageGroup: "Baby",
    image: "/images/rabbit1.jpg",
    description:
      "Oliver is a friendly bunny who enjoys fresh vegetables and gentle attention.",
  },
  {
    id: 7,
    name: "Rosella",
    type: "Bird",
    breed: "Australian Parrot",
    age: "3 months",
    ageGroup: "Baby",
    image: "/images/parrot.jpg",
    description:
      "Rosella is an energetic and playful bird who loves interacting with people.",
  },
  {
    id: 8,
    name: "Daisy",
    type: "Cat",
    breed: "Ragdoll",
    age: "2 years",
    ageGroup: "Young",
    image: "/images/cat3.jpg",
    description:
      "Daisy is affectionate and social. She loves warmth and being the center of attention.",
  },
];

/* =========================
   ICONS
========================= */

function PawIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.5 8.5c-.9-1.6-2.7-2.2-4-1.5-1.3.7-1.6 2.5-.7 4.1.9 1.6 2.7 2.2 4 1.5 1.3-.7 1.6-2.5.7-4.1Z" />
      <path d="M15.5 8.5c.9-1.6 2.7-2.2 4-1.5 1.3.7 1.6 2.5.7 4.1-.9 1.6-2.7 2.2-4 1.5-1.3-.7-1.6-2.5-.7-4.1Z" />
      <path d="M12 12.5c-2.8 0-5.2 2.4-5.2 5.2 0 2.1 1.4 3.3 3.3 3.3.9 0 1.4-.4 1.9-.8.5.4 1 .8 1.9.8 1.9 0 3.3-1.2 3.3-3.3 0-2.8-2.4-5.2-5.2-5.2Z" />
      <path d="M9.2 5.2C9.2 3.5 10.3 2 12 2s2.8 1.5 2.8 3.2" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

/* =========================
   HEADER
========================= */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Meet Pets", path: "/pets" },
    { label: "Adoption", path: "/adopt" },
    { label: "Stories", path: "/stories" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
            <PawIcon size={25} />
          </div>

          <div>
            <p className="text-xl font-black tracking-tight text-slate-900">
              Paw<span className="text-emerald-600">Haven</span>
            </p>
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block">
              Find love. Give home.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/adopt"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Adopt a Pet
            <ArrowRight />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-700 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-semibold ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/adopt"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-emerald-600 px-4 py-3 text-center font-bold text-white"
            >
              Start Adoption
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer className="mt-24 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500">
              <PawIcon size={25} />
            </div>
            <span className="text-2xl font-black">
              Paw<span className="text-emerald-400">Haven</span>
            </span>
          </Link>

          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Helping people find loving companions while giving rescued animals
            the safe, happy homes they deserve.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Explore</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link className="hover:text-emerald-400" to="/pets">
              Meet Pets
            </Link>
            <Link className="hover:text-emerald-400" to="/adopt">
              Adoption
            </Link>
            <Link className="hover:text-emerald-400" to="/stories">
              Success Stories
            </Link>
            <Link className="hover:text-emerald-400" to="/about">
              About Us
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Our Promise</h3>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Every pet deserves kindness, care, safety, and a family that loves
            them.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 PawHaven. All rights reserved.</p>
          <p>Made with care for animals ❤️</p>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   PET CARD
========================= */

function PetCard({ pet }) {
  const navigate = useNavigate();

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/10">
      <div className="relative overflow-hidden">
        <img
          src={pet.image}
          alt={`${pet.name}, ${pet.breed}`}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
          {pet.type}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-black text-slate-900">{pet.name}</h3>
            <p className="mt-1 text-sm font-medium text-emerald-600">
              {pet.breed}
            </p>
          </div>

          <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
            {pet.age}
          </span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
          {pet.description}
        </p>

        <button
          type="button"
          onClick={() => navigate(`/adopt?pet=${pet.id}`)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white transition hover:bg-emerald-700"
        >
          Meet {pet.name}
          <ArrowRight />
        </button>
      </div>
    </article>
  );
}

/* =========================
   HOME
========================= */

function Home() {
  const [search, setSearch] = useState("");

  const featuredPets = useMemo(() => {
    return pets
      .filter((pet) =>
        `${pet.name} ${pet.type} ${pet.breed}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .slice(0, 6);
  }, [search]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#effaf7]">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm">
              <span>🐾</span>
              Every pet deserves a home
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Find your new
              <span className="block text-emerald-600">best friend.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Meet wonderful rescued pets waiting for a family to call their
              own. Your next best friend could be just one adoption away.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/pets"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Meet the Pets
                <ArrowRight />
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-center font-bold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Why Adopt?
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-emerald-100 pt-7">
              <div>
                <p className="text-2xl font-black text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Pets helped</p>
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">320+</p>
                <p className="text-sm text-slate-500">Happy families</p>
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">98%</p>
                <p className="text-sm text-slate-500">Happy matches</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-emerald-200/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">
              <img
                src="/images/welcome.jpg"
                alt="Happy pets waiting for loving homes"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Your next companion
                    </p>
                    <p className="mt-1 font-black text-slate-900">
                      Love is waiting.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    ❤️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
            Find your match
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Pets looking for a family
          </h2>

          <p className="mt-4 text-slate-500">
            Search our available pets and find a personality that fits your
            family.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-100">
            <SearchIcon />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, breed or animal..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              aria-label="Search pets"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        {featuredPets.length === 0 && (
          <div className="mt-10 rounded-3xl bg-slate-50 p-12 text-center">
            <p className="text-lg font-bold text-slate-700">
              No pets found.
            </p>
            <p className="mt-2 text-slate-500">
              Try another name, breed, or animal.
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/pets"
            className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800"
          >
            View all pets
            <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Feature
              icon="🏠"
              title="Find a forever home"
              text="We help connect loving families with pets looking for a safe and caring home."
            />

            <Feature
              icon="❤️"
              title="Adopt with confidence"
              text="Our simple process makes discovering and applying to adopt clear and stress-free."
            />

            <Feature
              icon="🐾"
              title="Change a life"
              text="Adoption gives an animal a second chance while bringing unconditional love into your life."
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================
   FEATURE
========================= */

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

/* =========================
   PETS PAGE
========================= */

function PetsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [age, setAge] = useState("All");

  const filteredPets = pets.filter((pet) => {
    const matchesSearch = `${pet.name} ${pet.type} ${pet.breed}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = type === "All" || pet.type === type;
    const matchesAge = age === "All" || pet.ageGroup === age;

    return matchesSearch && matchesType && matchesAge;
  });

  return (
    <PageHero
      eyebrow="Meet your match"
      title="Pets waiting for you"
      text="Explore our adorable companions and discover the one who feels like family."
    >
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <SearchIcon />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search pets..."
              className="w-full outline-none placeholder:text-slate-400"
            />
          </div>

          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-600 outline-none focus:border-emerald-400"
            aria-label="Filter by animal"
          >
            <option>All</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Rabbit</option>
            <option>Bird</option>
          </select>

          <select
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-600 outline-none focus:border-emerald-400"
            aria-label="Filter by age"
          >
            <option>All</option>
            <option>Baby</option>
            <option>Young</option>
            <option>Adult</option>
          </select>
        </div>

        <div className="mb-6 mt-8 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-500">
            Showing{" "}
            <span className="text-slate-900">{filteredPets.length}</span> pets
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="rounded-3xl bg-slate-50 p-16 text-center">
            <div className="text-5xl">🐾</div>
            <h3 className="mt-4 text-xl font-black text-slate-900">
              No matches found
            </h3>
            <p className="mt-2 text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </section>
    </PageHero>
  );
}

/* =========================
   PAGE HERO
========================= */

function PageHero({ eyebrow, title, text, children }) {
  return (
    <>
      <section className="bg-[#effaf7] px-5 py-16 text-center sm:py-20">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
          {eyebrow}
        </p>

        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          {text}
        </p>
      </section>

      {children}
    </>
  );
}

/* =========================
   ADOPTION FORM
========================= */

function AdoptPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const selectedId = Number(params.get("pet"));

  const selectedPet = pets.find((pet) => pet.id === selectedId);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    housing: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.agree) {
      alert("Please confirm that you understand the adoption process.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
          ✓
        </div>

        <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
          Application received
        </p>

        <h1 className="mt-3 text-4xl font-black text-slate-950">
          Thank you, {form.name.split(" ")[0] || "friend"}! ❤️
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-500">
          Your frontend demo application has been submitted successfully.
          {selectedPet && ` You selected ${selectedPet.name}.`}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => navigate("/pets")}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
          >
            Explore More Pets
          </button>

          <button
            onClick={() => navigate("/")}
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700"
          >
            Back Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Start your journey"
        title="Adoption application"
        text="A few details help us understand you and the kind of home you can provide."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="sticky top-28 rounded-3xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              Your new companion
            </p>

            {selectedPet ? (
              <>
                <img
                  src={selectedPet.image}
                  alt={selectedPet.name}
                  className="mt-5 h-64 w-full rounded-2xl object-cover"
                />

                <h2 className="mt-5 text-2xl font-black">
                  {selectedPet.name}
                </h2>

                <p className="mt-1 text-emerald-400">
                  {selectedPet.breed} · {selectedPet.age}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {selectedPet.description}
                </p>
              </>
            ) : (
              <>
                <div className="mt-5 rounded-2xl bg-white/5 p-6">
                  <div className="text-5xl">🐾</div>
                  <h2 className="mt-4 text-2xl font-black">
                    Choose a pet first
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    You can select a pet from the Meet Pets page before
                    submitting your application.
                  </p>
                </div>

                <Link
                  to="/pets"
                  className="mt-5 block rounded-xl bg-emerald-500 px-5 py-3 text-center font-bold text-white hover:bg-emerald-400"
                >
                  Browse Pets
                </Link>
              </>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
        >
          <h2 className="text-2xl font-black text-slate-950">
            Tell us about yourself
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            This is a frontend-only demonstration. No information is sent to a
            server.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <FormField
              label="Full name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />

            <FormField
              label="Phone number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              required
            />

            <FormField
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="City / area"
              required
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="housing"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Housing type
            </label>

            <select
              id="housing"
              name="housing"
              value={form.housing}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            >
              <option value="">Select one</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Farm">Farm</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-5">
            <label
              htmlFor="experience"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Tell us about your experience with pets
            </label>

            <textarea
              id="experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about pets you've cared for..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          <label className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 h-4 w-4 accent-emerald-600"
            />

            <span>
              I understand that this is a frontend demo and that a real
              adoption application would require verification and follow-up.
            </span>
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-3.5 font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
          >
            Submit Adoption Application
          </button>
        </form>
      </section>
    </>
  );
}

/* =========================
   FORM FIELD
========================= */

function FormField({
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
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
      />
    </div>
  );
}

/* =========================
   STORIES
========================= */

const stories = [
  {
    name: "John & Milo",
    rating: 5,
    image: "/images/happy1.jpg",
    text: "The adoption journey was simple and wonderful. We found a beautiful companion and couldn't be happier.",
  },
  {
    name: "Sarah & Daisy",
    rating: 5,
    image: "/images/cat3.jpg",
    text: "Daisy completely changed our home. She is playful, loving, and now feels like she has always been part of our family.",
  },
  {
    name: "Emily & Buddy",
    rating: 5,
    image: "/images/dog1.jpeg",
    text: "We were nervous about adopting for the first time, but the process was easy to understand and Buddy is amazing.",
  },
  {
    name: "David & Rocky",
    rating: 5,
    image: "/images/dog3.jpg",
    text: "Rocky has brought so much happiness into our family. We are incredibly grateful for his second chance.",
  },
];

function StoriesPage() {
  return (
    <PageHero
      eyebrow="Happy tails"
      title="Real stories. Real love."
      text="Every adoption creates a new chapter for both the pet and the family."
    >
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.name}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex gap-5">
                <img
                  src={story.image}
                  alt={story.name}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="font-black text-slate-900">{story.name}</h3>

                  <div
                    className="mt-1 text-amber-400"
                    aria-label={`${story.rating} out of 5 stars`}
                  >
                    {"★".repeat(story.rating)}
                  </div>
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-600">“{story.text}”</p>
            </article>
          ))}
        </div>
      </section>
    </PageHero>
  );
}

/* =========================
   ABOUT
========================= */

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our mission"
        title="More than adoption. It's a second chance."
        text="PawHaven exists to make it easier for people and rescued animals to find one another."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <img
          src="/images/happy1.jpg"
          alt="Person spending time with a rescued dog"
          loading="lazy"
          className="h-[450px] w-full rounded-[2rem] object-cover shadow-2xl"
        />

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
            Rescue. Foster. Adopt.
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Give a rescued animal the life they deserve.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            There are countless animals waiting for someone to see their
            potential. Adoption isn't simply bringing a pet home — it's giving
            an animal safety, care, companionship, and another chance.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Stat number="500+" label="Pets helped" />
            <Stat number="320+" label="Families" />
            <Stat number="98%" label="Matches" />
          </div>
        </div>
      </section>

      <section className="bg-[#effaf7]">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Three simple steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Step number="01" title="Meet the pets" text="Explore animals and find a personality that feels right for your family." />
            <Step number="02" title="Apply to adopt" text="Complete a simple application with information about your home and experience." />
            <Step number="03" title="Start your journey" text="Take the next steps toward welcoming your new companion home." />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 text-center">
      <p className="text-xl font-black text-emerald-600">{number}</p>
      <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-sm">
      <span className="text-sm font-black text-emerald-600">{number}</span>

      <h3 className="mt-5 text-xl font-black text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-500">{text}</p>
    </div>
  );
}

/* =========================
   NOT FOUND
========================= */

function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <div className="text-7xl">🐾</div>

      <h1 className="mt-6 text-4xl font-black text-slate-950">
        Page not found
      </h1>

      <p className="mt-4 text-slate-500">
        Looks like this page wandered off.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white"
      >
        Back Home
      </Link>
    </section>
  );
}

/* =========================
   APP
========================= */

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fbfa] text-slate-900">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}