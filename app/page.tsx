const impactStats = [
  {
    value: "500+",
    label: "lives to impact through the first awareness campaign",
  },
  {
    value: "4",
    label: "active project areas for care, learning, and play",
  },
  {
    value: "3",
    label: "volunteer pathways for teachers, therapists, and allies",
  },
];

const projects = [
  {
    title: "Speech Therapy",
    description:
      "Helping children build communication, confidence, and everyday expression with trained support.",
    accent: "bg-[#00a6a6]",
  },
  {
    title: "Physical Therapy",
    description:
      "Supporting movement, posture, strength, and independence through steady care routines.",
    accent: "bg-[#ff6f61]",
  },
  {
    title: "Psychotherapy Support",
    description:
      "Creating patient, attentive spaces where children and families feel seen and supported.",
    accent: "bg-[#f2b84b]",
  },
  {
    title: "Learning Through Play",
    description:
      "Building joyful infrastructure with toys, art, games, and a safe playground for discovery.",
    accent: "bg-[#236c62]",
  },
];

const volunteerRoles = [
  "Trained teachers for daily learning support",
  "Therapists for guided care sessions",
  "Campaign volunteers for awareness drives",
  "Community partners for toys, art, games, and playground needs",
];

const leadershipSlots = [
  "Founder name and photo",
  "Board member name and photo",
  "Board member name and photo",
];

const mediaSlots = [
  "Photo gallery link or uploaded pictures",
  "Video link or embedded awareness film",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#172321]">
      <header className="absolute left-0 right-0 top-0 z-20">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 text-white sm:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          <a className="text-lg font-semibold" href="#top">
            Smile Foundation
          </a>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <a
              className="hidden rounded-md px-3 py-2 transition hover:bg-white/15 sm:inline-flex"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hidden rounded-md px-3 py-2 transition hover:bg-white/15 sm:inline-flex"
              href="#volunteer"
            >
              Volunteer
            </a>
            <a
              className="hidden rounded-md px-3 py-2 transition hover:bg-white/15 sm:inline-flex"
              href="#admissions"
            >
              Admissions
            </a>
            <a
              className="rounded-md bg-[#ff6f61] px-4 py-2 text-white shadow-lg shadow-black/20 transition hover:bg-[#f25f51]"
              href="#donate"
            >
              Donate
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="relative flex min-h-[82svh] items-center overflow-hidden"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-smile-foundation.png"
          alt="Children and teachers in a bright therapy and play space"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,66,64,0.92),rgba(8,66,64,0.72),rgba(23,35,33,0.18))]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-md border border-white/35 bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur">
              Tarapur, Maharashtra, India
            </p>
            <h1 className="text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
              Smile Foundation
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-white sm:text-2xl sm:leading-9">
              Helping special-needs children communicate, move, learn, and
              belong through therapy, trained teachers, and joyful spaces.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-md bg-[#ff6f61] px-6 py-3 text-base font-bold text-white shadow-xl shadow-black/25 transition hover:bg-[#f25f51]"
                href="#donate"
              >
                Donate to the campaign
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md border border-white/75 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
                href="#admissions"
              >
                New admissions
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md border border-white/75 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
                href="#volunteer"
              >
                Become a volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9ece9] bg-white" aria-label="Impact highlights">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:px-8 md:grid-cols-3 lg:px-10">
          {impactStats.map((stat) => (
            <article
              className="rounded-lg border border-[#d9ece9] bg-[#f7fffd] p-5"
              key={stat.label}
            >
              <p className="text-4xl font-bold text-[#007d7a]">{stat.value}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-[#42534f]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fbfffe] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#ff6f61]">
              Hope and impact
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-[#172321] sm:text-5xl">
              A care center built around what each child needs next.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#4c5b57]">
            Smile Foundation is raising support for speech therapy, physical
            therapy, psychotherapy support, trained teachers, learning tools,
            playground infrastructure, art, games, and awareness campaigns that
            invite the community into social responsibility.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="bg-white px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#007d7a]">
              Active projects
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Therapy, teaching, and play that work together.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article
                className="rounded-lg border border-[#dde8e5] bg-white p-6 shadow-sm"
                key={project.title}
              >
                <span
                  className={`${project.accent} mb-5 block h-1.5 w-16 rounded-md`}
                />
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#53615e]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="volunteer"
        className="bg-[#fff8e6] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-[#9d6a00]">
              Volunteer opportunities
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Bring your time, skill, or network to the campaign.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f533a]">
              The foundation needs people who can help children directly and
              people who can help the community understand why this work
              matters.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {volunteerRoles.map((role) => (
              <article
                className="rounded-lg border border-[#f0dca8] bg-white p-5"
                key={role}
              >
                <p className="text-base font-bold leading-7 text-[#332b1b]">
                  {role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="admissions"
        className="bg-[#f7fffd] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-[#007d7a]">
              New admissions
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              A place for admissions details and family enquiries.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4c5b57]">
              This section is ready for admission links, forms, visit timings,
              eligibility notes, and any guidance families should see before
              contacting Smile Foundation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg border border-[#bfe1dc] bg-white p-5">
              <p className="text-sm font-bold uppercase text-[#ff6f61]">
                Admissions link
              </p>
              <h3 className="mt-3 text-xl font-bold">Add application form</h3>
              <p className="mt-3 text-sm leading-7 text-[#53615e]">
                Future space for an online admission form, registration link,
                or downloadable document.
              </p>
            </article>
            <article className="rounded-lg border border-[#bfe1dc] bg-white p-5">
              <p className="text-sm font-bold uppercase text-[#ff6f61]">
                Correspondence
              </p>
              <h3 className="mt-3 text-xl font-bold">Add email address</h3>
              <p className="mt-3 text-sm leading-7 text-[#53615e]">
                Future space for the official email address and any contact
                instructions for parents, donors, or volunteers.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#ff6f61]">
              Foundation details
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Space for founder, board members, pictures, and videos.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
            <div className="grid gap-5 sm:grid-cols-3">
              {leadershipSlots.map((slot) => (
                <article
                  className="rounded-lg border border-dashed border-[#bfe1dc] bg-[#fbfffe] p-5"
                  key={slot}
                >
                  <div className="flex aspect-square items-center justify-center rounded-md bg-[#e5f7f4] text-center text-sm font-bold text-[#007d7a]">
                    Photo
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{slot}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#53615e]">
                    Role, short introduction, and contact notes can be added
                    here later.
                  </p>
                </article>
              ))}
            </div>
            <div className="grid gap-5">
              {mediaSlots.map((slot) => (
                <article
                  className="rounded-lg border border-dashed border-[#f0dca8] bg-[#fff8e6] p-5"
                  key={slot}
                >
                  <div className="flex aspect-video items-center justify-center rounded-md bg-white text-center text-sm font-bold text-[#9d6a00]">
                    Media placeholder
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{slot}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f533a]">
                    Future space for real images, video embeds, or gallery
                    links from the foundation.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="bg-[#006f6b] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#ffd76a]">
              Fundraising campaign
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Help build a stronger support system for special-needs children.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9fffb]">
              Donations will help provide trained teachers, therapy access,
              child-friendly infrastructure, toys, art materials, games, and a
              playground where children can learn with joy and dignity.
            </p>
          </div>
          <div className="rounded-lg border border-white/25 bg-white p-6 text-[#172321] shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold">Your gift can support</h3>
            <ul className="mt-6 space-y-4 text-sm font-semibold leading-6 text-[#40504c]">
              <li>Therapy sessions for speech, movement, and emotional care</li>
              <li>Teacher training and classroom learning materials</li>
              <li>Toys, art supplies, games, and playground equipment</li>
              <li>Awareness drives for inclusion and social responsibility</li>
            </ul>
            <a
              className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[#ff6f61] px-5 py-3 text-base font-bold text-white transition hover:bg-[#f25f51]"
              href="#top"
            >
              Support Smile Foundation
            </a>
            <div className="mt-5 rounded-md border border-dashed border-[#f0dca8] bg-[#fff8e6] p-4 text-sm font-semibold leading-6 text-[#5f533a]">
              Payment barcode, donation links, and donor correspondence email
              can be added here when ready.
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#172321] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold">Smile Foundation</p>
          <p className="text-sm leading-6 text-[#c7d7d3]">
            Tarapur, Maharashtra, India. Building care, awareness, and social
            responsibility for special-needs children.
          </p>
        </div>
      </footer>
    </main>
  );
}
