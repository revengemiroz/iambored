"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Your list of fun sites
const funSites = [
  { title: "Falling Sand", slug: "sandspiel", url: "https://sandspiel.club/" },
  { title: "Zoomquilt", slug: "zoomquilt", url: "https://zoomquilt.org" },
  {
    title: "Pointer Pointer",
    slug: "pointerpointer",
    url: "https://pointerpointer.com/",
  },
  {
    title: "Smashthewalls",
    slug: "smashthewalls",
    url: "https://smashthewalls.com/",
  },
];

export default function SitePage() {
  const router = useRouter();
  const params = useParams();
  const [site, setSite] = useState(null);

  useEffect(() => {
    const currentSlug = params?.site;
    const match = funSites.find((site) => site.slug === currentSlug);
    if (match) {
      setSite(match);
    } else {
      setSite(null);
    }
  }, [params]);

  const handleRandom = () => {
    const random = funSites[Math.floor(Math.random() * funSites.length)];
    router.push(`/${random.slug}`);
  };

  if (!site) {
    return (
      <div className="h-screen flex items-center justify-center text-red-600 font-semibold">
        Website not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-red-100 text-red-800 shadow">
        <Link href="/" className="font-bold text-lg hover:underline">
          ← Bored Button
        </Link>
        <div className="flex gap-3">
          <button
            onClick={handleRandom}
            className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
          >
            🎲 Random
          </button>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 rounded bg-white border border-red-600 text-red-600 hover:bg-red-50 transition"
          >
            🔗 Open in New Tab
          </a>
        </div>
      </nav>

      {/* Iframe that fills remaining space */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.iframe
            key={site.url}
            src={site.url}
            className="w-full h-dvh border-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            allow="fullscreen"
          />
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-red-100 text-center py-4 text-sm text-red-700">
        <p>
          © {new Date().getFullYear()} Bored Button &mdash; Powered by fun on
          the internet 😄
        </p>
      </footer>
    </div>
  );
}
