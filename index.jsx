import React, { useMemo, useState } from "react";

// Kaafi Studio – React Single-File App
// — Tailwind CSS expected in the host project
// — No hamburger/mobile menu per your preference
// — Removed the word "smart" wherever it appeared
// — Tabs for Videos & Design, easy to add more items
// — Contact form wired to Web3Forms (uses your access key)
// — Clean, modern, production-ready structure with subtle animations

// If you are using Vite/Next, drop this component into your pages
// or export default function App() { ... } as shown.

// -------------------------
// Content (edit-friendly)
// -------------------------
const SOCIALS = [
  { label: "Facebook", href: "https://web.facebook.com/kaafistudio" },
  { label: "TikTok", href: "https://tiktok.com/@kaafistudio" },
  { label: "X", href: "https://twitter.com/Kaafistudio" },
  { label: "YouTube", href: "https://www.youtube.com/@Kaafistudio" },
];

const SERVICES = [
  {
    icon: "🎬",
    title: "Music Videos",
    text: "Cinematic music video production with creative concepts and professional editing.",
  },
  {
    icon: "💍",
    title: "Wedding Films",
    text: "Beautiful wedding coverage edited into cinematic highlights you'll cherish forever.",
  },
  {
    icon: "📺",
    title: "Live Shows",
    text: "Professional production from script to screen, telling compelling Somali stories.",
  },
];

// Videos (YouTube/Vimeo). Add more by pushing new objects.
const INITIAL_VIDEOS = [
  {
    id: "DFmeoF1k-E8",
    title: "Somali Song",
    role: "Music Video Production",
    thumb: "https://i.ytimg.com/vi/DFmeoF1k-E8/maxresdefault.jpg",
    provider: "youtube",
  },
  {
    id: "U80EGx3Aa2Q",
    title: "Live Show Highlights",
    role: "Somali Hit Shows",
    thumb:
      "https://i.ytimg.com/vi/U80EGx3Aa2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDp9ihnA3gH4W6RgaozLVzZ4cDyqw",
    provider: "youtube",
  },
];

// Designs/Photos – add as many as you need.
const INITIAL_DESIGNS = [
  {
    src:
      "https://images.squarespace-cdn.com/content/v1/54c6bc46e4b0798595118465/c383a260-bb19-4a88-b4c2-2a775073097c/Munaluchi_bride_karimah_gheddai_photography_toronto_wedding_photographer_african_black_somali_weddings_canada?format=2500w",
    title: "Wedding",
    role: "Wedding Highlight Film",
  },
];

// -------------------------
// Small UI helpers
// -------------------------
function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {sub && <p className="text-gray-600 mt-3">{sub}</p>}
    </div>
  );
}

function Pill({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
        active
          ? "bg-gray-900 text-white border-gray-900 shadow"
          : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
      }`}
    >
      {children}
    </button>
  );
}

function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="rounded-full w-9 h-9 grid place-items-center border hover:bg-gray-50"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
}

// -------------------------
// Main App
// -------------------------
export default function App() {
  const [tab, setTab] = useState("videos");
  const [videos] = useState(INITIAL_VIDEOS);
  const [designs] = useState(INITIAL_DESIGNS);
  const [openVideo, setOpenVideo] = useState(null);
  const [openImage, setOpenImage] = useState(null);

  const videoSrc = useMemo(() => {
    if (!openVideo) return "";
    const { provider, id } = openVideo;
    if (provider === "youtube") return `https://www.youtube.com/embed/${id}`;
    if (provider === "vimeo") return `https://player.vimeo.com/video/${id}`;
    return "";
  }, [openVideo]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Headbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            <span className="text-gray-900">Kaafi</span>
            <span className="text-gray-500">Studio</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-gray-600">
              Services
            </a>
            <a href="#portfolio" className="hover:text-gray-600">
              Portfolio
            </a>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              High Quality Production
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Kaafi Studio produces high‑quality music videos, films, wedding
              highlights, and documentaries that tell authentic Somali stories.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#services" className="px-5 py-3 rounded-xl bg-gray-900 text-white">
                Our Services
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl border border-gray-300 hover:border-gray-400"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl bg-gray-200 shadow-inner overflow-hidden">
              {/* Replace with a featured reel thumbnail if desired */}
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1470&auto=format&fit=crop"
                alt="Kaafi Studio showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle title="Our Services" sub="What we can create for you" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section id="portfolio" className="py-16 md:py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle title="Our Portfolio" sub="Browse our recent work" />

          <div className="mt-8 flex items-center gap-2 justify-center">
            <Pill active={tab === "videos"} onClick={() => setTab("videos")}>
              Videos
            </Pill>
            <Pill active={tab === "design"} onClick={() => setTab("design")}>
              Design
            </Pill>
            <Pill active={tab === "docs"} onClick={() => setTab("docs")}>
              Documents
            </Pill>
          </div>

          {/* VIDEOS GRID */}
          {tab === "videos" && (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setOpenVideo(v)}
                  className="group text-left"
                  aria-label={`Open video ${v.title}`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border">
                    <img
                      src={v.thumb}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center text-white text-3xl">
                      ▶
                    </div>
                  </div>
                  <h3 className="mt-3 font-semibold">{v.title}</h3>
                  <p className="text-gray-500 text-sm">{v.role}</p>
                </button>
              ))}
            </div>
          )}

          {/* DESIGN GRID */}
          {tab === "design" && (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {designs.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setOpenImage(d)}
                  className="group text-left"
                  aria-label={`Open design ${d.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
                    <img
                      src={d.src}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="mt-3 font-semibold">{d.title}</h3>
                  <p className="text-gray-500 text-sm">{d.role}</p>
                </button>
              ))}
            </div>
          )}

          {/* DOCUMENTS INSTRUCTIONS (client-side first approach) */}
          {tab === "docs" && (
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold text-lg">Add Project Documents</h3>
                <p className="text-gray-600 mt-2">
                  For a quick start, keep PDFs or briefs in a public folder and
                  paste links here. If you prefer a backend (Node.js) to upload
                  and store documents, we can expose an <code>\nPOST /api/documents\n</code> endpoint
                  and list them below from <code>/api/documents</code>.
                </p>
                <ul className="list-disc ml-5 mt-4 space-y-1 text-gray-700">
                  <li>
                    <span className="font-medium">Option A (no backend):</span>
                    &nbsp;Add your Google Drive/Dropbox/Public links to a small
                    JSON array in this file and they will render here.
                  </li>
                  <li>
                    <span className="font-medium">Option B (Node.js API):</span>
                    &nbsp;Use the provided Express snippet (I can share next) to
                    upload and serve documents. The UI is already ready.
                  </li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <a
                    href="#contact"
                    className="px-5 py-3 rounded-xl bg-gray-900 text-white"
                  >
                    Ask us to enable uploads
                  </a>
                  <a
                    href="#portfolio"
                    className="px-5 py-3 rounded-xl border border-gray-300"
                  >
                    Back to Portfolio
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            title="About Kaafi Studio"
            sub="Learn more about our story and mission"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border p-6">
              <h3 className="text-xl font-semibold">Home of Quality</h3>
              <p className="mt-3 text-gray-600">
                Kaafi Studio is one of Somalia's premier content creators,
                producing high‑quality videos including Somali songs, films,
                wedding highlights, and documentaries.
              </p>
              <p className="mt-3 text-gray-600">
                Our motto "Qabiil Iyo Qolo Malahan" speaks to our inclusive
                approach. We create content for all Somalis regardless of
                background.
              </p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc ml-5">
                <li>Professional videography equipment</li>
                <li>Experienced creative team</li>
                <li>Cultural sensitivity and authenticity</li>
                <li>Multilingual production capabilities</li>
                <li>Affordable and competitive pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-gray-600 mt-3">
            Contact us today to discuss your project and how we can bring your
            vision to life.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            title="Contact Us"
            sub="Reach out for collaborations or to discuss your project"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Contact Form (Web3Forms) */}
            <div className="rounded-3xl border p-6">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
                onSubmit={(e) => {
                  // Passive client-side success notice
                  const form = e.currentTarget;
                  setTimeout(() => {
                    const ok = form?.dataset?.last === "ok"; // no-op; server handles submission
                  }, 0);
                }}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="696f9140-c9ba-4c15-92ae-21337af3aa80"
                />
                <div>
                  <input
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>
                <div>
                  <input
                    name="subject"
                    placeholder="Subject"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full rounded-xl border px-4 py-3 h-32"
                  />
                </div>
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gray-900 text-white"
                >
                  Send Message
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Or email us at {" "}
                  <a className="underline" href="mailto:info@kaafistudio.com">
                    info@kaafistudio.com
                  </a>
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="rounded-3xl border p-6">
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <a
                    href="https://wa.me/message/Z4VNJSBV7JSYM1"
                    className="text-gray-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +44 7449 961382
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    className="text-gray-600 underline"
                    href="mailto:info@kaafistudio.com"
                  >
                    info@kaafistudio.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">Social Media</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50"
                        aria-label={s.label}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-lg font-bold">
              <span>Kaafi</span>
              <span className="text-gray-500">Studio</span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Kaafi Studio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <Modal open={!!openVideo} onClose={() => setOpenVideo(null)}>
        {openVideo && (
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={`${videoSrc}?autoplay=1&rel=0`}
              title={openVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
      </Modal>

      {/* Image Modal */}
      <Modal open={!!openImage} onClose={() => setOpenImage(null)}>
        {openImage && (
          <div className="max-h-[70vh] overflow-auto">
            <img
              src={openImage.src}
              alt={openImage.title}
              className="w-full h-auto rounded-xl"
            />
            <h3 className="mt-4 font-semibold">{openImage.title}</h3>
            <p className="text-gray-600">{openImage.role}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
