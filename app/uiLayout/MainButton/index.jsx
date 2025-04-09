"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const destinations = [
  { url: "https://neal.fun/", title: "Neal.fun - Interactive experiences" },
  { url: "https://theuselessweb.com/", title: "The Useless Web" },
  { url: "https://quickdraw.withgoogle.com/", title: "Quick, Draw! by Google" },
  { url: "https://www.geoguessr.com/", title: "GeoGuessr - Geography game" },
  { url: "https://www.window-swap.com/", title: "Window Swap" },
  {
    url: "https://www.thisworldthesedays.com/",
    title: "This World These Days",
  },
  {
    url: "https://www.mapcrunch.com/",
    title: "MapCrunch - Random Street View",
  },
  { url: "https://www.flightradar24.com/", title: "FlightRadar24" },
  { url: "https://radiooooo.com/", title: "Radiooooo - Music by decade" },
  { url: "https://www.incredibox.com/", title: "Incredibox - Make music" },
];

export default function MainButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [hoverState, setHoverState] = useState(false);

  const handleClick = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const randomDestination =
        destinations[Math.floor(Math.random() * destinations.length)];
      window.open(randomDestination.url, "_blank");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative"
      >
        {/* Glow background */}
        <div className="absolute inset-0 rounded-full bg-rose-500/30 blur-2xl scale-110 animate-pulse" />

        {/* Sparkles */}
        <div className="absolute -top-6 -right-6">
          <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute -bottom-4 -left-6">
          <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse delay-200" />
        </div>

        {/* Button with animation */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer"
        >
          <Button
            onClick={handleClick}
            disabled={isLoading}
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
            className="cursor-pointer relative h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-xl hover:shadow-rose-300/60 transition-transform duration-300 ease-in-out"
          >
            {isLoading ? (
              <Loader2 className="h-8 w-8 animate-spin" />
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-lg sm:text-xl font-bold tracking-wide">
                  UNBORE ME
                </span>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="mt-1"
                >
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              </div>
            )}
          </Button>
        </motion.div>
      </motion.div>

      <p className="text-center text-sm text-gray-500 max-w-xs">
        Click to discover something amazing from our curated collection
      </p>
      <p className="text-center text-xs text-gray-400">
        Prefer to stay on this site? Try the{" "}
        <Link href="/random" className="text-rose-500 hover:underline">
          random page
        </Link>{" "}
        instead.
      </p>
    </div>
  );
}
