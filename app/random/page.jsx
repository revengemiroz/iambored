"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { AlertTriangle, ExternalLink, Loader2 } from "lucide-react";
import Navbar from "../uiLayout/Navbar";
import FooterNav from "../uiLayout/FooterNav";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function RandomPage() {
  const [iframeError, setIframeError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentSite, setCurrentSite] = useState(null);
  const [showLoading, setShowLoading] = useState(true);
  const iframeRef = useRef(null);

  const category = 5; // Optional: filter by category
  const randomItem = useQuery(api.functions.items.getRandomItem, {
    categoryNumber: category,
    trigger: refreshKey,
  });

  useEffect(() => {
    if (randomItem) {
      setShowLoading(true);
      setIframeError(false);

      const timeout = setTimeout(() => {
        setCurrentSite(randomItem);
        setShowLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [randomItem]);

  const randomize = () => {
    setIframeError(false);
    setShowLoading(true);
    setRefreshKey((prev) => prev + 1);
  };

  const handleRetry = () => {
    setIframeError(false);
    setShowLoading(true);
    setRefreshKey((prev) => prev + 1);
  };

  const openInNewTab = () => {
    if (currentSite) {
      window.open(currentSite.url, "_blank");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {currentSite && (
        <Navbar title={currentSite.title} url={currentSite.url} />
      )}

      <div className="flex-1 relative overflow-hidden">
        {showLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
            <Loader2 className="animate-spin w-8 h-8 text-gray-600" />
            <p className="mt-2 text-gray-500 text-sm">Loading a fun site...</p>
          </div>
        )}

        {currentSite && !iframeError && !showLoading && (
          <iframe
            key={currentSite.url}
            ref={iframeRef}
            src={currentSite.url}
            title={currentSite.title}
            allow="autoplay"
            className="absolute inset-0 w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={() => setIframeError(false)}
            onError={() => setIframeError(true)}
          />
        )}

        {iframeError && !showLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white px-6 text-center z-10">
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
                <Button variant="outline" onClick={handleRetry}>
                  Try Again
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

      <FooterNav randomize={randomize} />
    </div>
  );
}
