"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Home,
  RefreshCw,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";
import Navbar from "../uiLayout/Navbar";

// Sample destinations
const destinations = [
  {
    url: "https://pointerpointer.com/",
    title: "PointerPointer - Pointing at your pointer",
  },
];

// Get a random site
const getRandomSite = () =>
  destinations[Math.floor(Math.random() * destinations.length)];

export default function RandomPage() {
  const [currentSite, setCurrentSite] = useState(null);
  const [iframeError, setIframeError] = useState(false);
  const iframeRef = useRef(null);

  const handleGetAnother = () => {
    setCurrentSite(getRandomSite());
    setIframeError(false);
  };

  const openInNewTab = () => {
    if (currentSite) {
      window.open(currentSite.url, "_blank");
    }
  };

  // Prevent hydration error by setting only on client
  useEffect(() => {
    setCurrentSite(getRandomSite());
  }, []);

  // Handle iframe errors
  useEffect(() => {
    if (!currentSite) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const timeout = setTimeout(() => {
      try {
        if (!iframe.contentWindow?.location.href) {
          setIframeError(true);
        }
      } catch (err) {
        setIframeError(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSite]);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      {currentSite && <Navbar title={currentSite.title} />}

      {/* Content */}
      <div className="flex-1 w-full relative">
        {currentSite && (
          <iframe
            ref={iframeRef}
            src={currentSite.url}
            title={currentSite.title}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={() => setIframeError(false)}
            onError={() => setIframeError(true)}
          />
        )}

        {/* Error fallback */}
        {iframeError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white px-6 text-center">
            <div className="max-w-md mx-auto space-y-5">
              <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto" />
              <h2 className="text-xl font-semibold">
                This site can't be displayed in an iframe
              </h2>
              <p className="text-gray-600 text-sm">
                Some websites block loading inside other sites. You can still
                visit it in a new tab.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={handleGetAnother}>
                  Try Another
                </Button>
                <Button onClick={openInNewTab}>
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Open in Tab
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Optional Bottom bar or footer here */}
    </div>
  );
}
