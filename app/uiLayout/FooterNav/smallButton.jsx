"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

export default function MiniMainButton() {
  const [isLoading, setIsLoading] = useState(false);

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
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative"
    >
      {/* Sparkle Glow Background */}
      <div className="absolute inset-0 rounded-full bg-rose-500/30 blur-xl scale-110 animate-pulse" />

      {/* Sparkles */}
      <div className="absolute -top-2 -right-2">
        <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
      </div>
      <div className="absolute -bottom-2 -left-2">
        <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse delay-200" />
      </div>

      {/* Button with motion */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer"
      >
        <Button
          onClick={handleClick}
          disabled={isLoading}
          className="cursor-pointer h-16 w-16 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 text-white p-0 shadow-md border-2 border-white"
          aria-label="Unbore Me"
        >
          {isLoading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <div className="flex flex-col items-center leading-none">
              <span className="text-[10px] font-bold tracking-tight">
                UNBORE
              </span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </motion.div>
            </div>
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
}
