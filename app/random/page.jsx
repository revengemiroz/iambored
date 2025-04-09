"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import {
  AlertTriangle,
  ExternalLink,
  Home,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import Navbar from "../uiLayout/Navbar";
import FooterNav from "../uiLayout/FooterNav";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function RandomPage() {
  const [iframeError, setIframeError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentSite, setCurrentSite] = useState(null);
  const iframeRef = useRef(null);

  const category = 5; // Optional: filter by category
  const randomItem = useQuery(api.functions.items.getRandomItem, {
    categoryNumber: category,
    trigger: refreshKey,
  });

  // When randomItem changes → show it
  useEffect(() => {
    if (randomItem) {
      setCurrentSite(randomItem);
      setIframeError(false);
    }
  }, [randomItem]);

  // Retry logic when iframe load fails
  useEffect(() => {
    if (!currentSite) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const timeout = setTimeout(() => {
      try {
        // Accessing cross-origin will throw
        if (!iframe.contentWindow?.location.href) {
          setIframeError(true);
        }
      } catch {
        setIframeError(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSite]);

  const randomize = () => {
    setRefreshKey((prev) => prev + 1); // triggers new random fetch
  };

  const openInNewTab = () => {
    if (currentSite) {
      window.open(currentSite.url, "_blank");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      {currentSite && <Navbar title={currentSite.title} />}

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Show iframe if no error */}
        {currentSite && !iframeError && (
          <iframe
            key={currentSite.url} // ✅ force remount on URL change
            ref={iframeRef}
            src={currentSite.url}
            title={currentSite.title}
            className="absolute inset-0 w-full h-full border-0"
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
                <Button variant="outline" onClick={randomize}>
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

      {/* Footer */}
      <FooterNav randomize={randomize} />
    </div>
  );
}
